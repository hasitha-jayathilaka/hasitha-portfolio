import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  return /^[+()\-0-9\s]{7,20}$/.test(phone.trim());
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const {
      enquiryType,
      enquiryOther,
      name,
      email,
      phone,
      message,
    } = req.body || {};

    // Basic validation
    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({ error: "Invalid name" });
    }
    if (!email || !isValidEmail(String(email))) {
      return res.status(400).json({ error: "Invalid email" });
    }
    if (phone && !isValidPhone(String(phone))) {
      return res.status(400).json({ error: "Invalid phone" });
    }
    if (!message || String(message).trim().length < 1) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || "hasitha@theroifirm.com";

    // ✅ LOGS (check your terminal where you ran npm run dev)
    console.log("---- ENQUIRY REQUEST ----");
    console.log("Has RESEND_API_KEY:", Boolean(apiKey));
    console.log("To:", toEmail);
    console.log("From user:", String(email).trim());
    console.log("Type:", enquiryType, enquiryOther ? `(Other: ${enquiryOther})` : "");
    console.log("Name:", String(name).trim());
    console.log("Phone:", String(phone || "").trim());
    console.log("Message length:", String(message).trim().length);

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in env");
      return res.status(500).json({ error: "Server misconfigured: missing RESEND_API_KEY" });
    }

    const resend = new Resend(apiKey);

    // ✅ IMPORTANT:
    // Use a verified 'from' address in Resend, not a random domain.
    // If you haven't verified your domain, use onboarding@resend.dev.
    const FROM = process.env.RESEND_FROM || "onboarding@resend.dev";

    const subject = `New enquiry: ${enquiryType}${enquiryType === "Other" && enquiryOther ? ` (${enquiryOther})` : ""}`;

    const text = [
      `New enquiry received`,
      ``,
      `Type: ${enquiryType}${enquiryType === "Other" && enquiryOther ? ` (${enquiryOther})` : ""}`,
      `Name: ${String(name).trim()}`,
      `Email: ${String(email).trim()}`,
      `Phone: ${String(phone || "").trim()}`,
      ``,
      `Message:`,
      `${String(message).trim()}`,
    ].join("\n");

    const result = await resend.emails.send({
      from: FROM,
      to: [toEmail],
      replyTo: String(email).trim(), // ✅ so you can reply directly
      subject,
      text,
    });

    console.log("RESEND RESULT:", result);

    // If Resend returns an error, it usually looks like { error: {...} }
    // If success, it usually has { data: { id: "..." } }
    const id =
      (result as any)?.data?.id ||
      (result as any)?.id ||
      null;

    const error =
      (result as any)?.error ||
      null;

    if (error) {
      console.error("RESEND ERROR:", error);
      return res.status(502).json({ error: "Email provider rejected the request", providerError: error });
    }

    return res.status(200).json({ ok: true, id });
  } catch (err: any) {
    console.error("ENQUIRY API FAILED:", err?.message || err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
