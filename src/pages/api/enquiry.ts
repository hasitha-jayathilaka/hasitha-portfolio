import type { NextApiRequest, NextApiResponse } from "next";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  return /^[+()\-0-9\s]{7,20}$/.test(phone.trim());
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { enquiryType, enquiryOther, name, email, phone, message } = req.body || {};

  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: "Invalid name" });
  }
  if (!email || !isValidEmail(String(email))) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (phone && String(phone).trim() && !isValidPhone(String(phone))) {
    return res.status(400).json({ error: "Invalid phone" });
  }
  if (!message || String(message).trim().length < 1 || String(message).length > 300) {
    return res.status(400).json({ error: "Message must be 1–300 characters" });
  }

  const cleanType = String(enquiryType || "").trim();
  const cleanOther = String(enquiryOther || "").trim();

  // ✅ For now: log the enquiry in the server console (works on Vercel too)
  console.log("NEW ENQUIRY", {
    enquiryType: cleanType,
    enquiryOther: cleanOther,
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone || "").trim(),
    message: String(message).trim(),
    ts: new Date().toISOString(),
  });

  // NEXT STEP (optional): send email via a provider (Resend/Formspree/etc.)
  // I’ll guide you once this form works locally.

  return res.status(200).json({ ok: true });
}
