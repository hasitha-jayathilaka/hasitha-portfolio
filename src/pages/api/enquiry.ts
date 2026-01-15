import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  return /^[+()\-0-9\s]{7,20}$/.test(phone.trim());
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

  const cleanType = String(enquiryType || "").trim() || "Unspecified";
  const cleanOther = String(enquiryOther || "").trim();
  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanPhone = String(phone || "").trim();
  const cleanMessage = String(message).trim();

  console.log("NEW ENQUIRY", {
    enquiryType: cleanType,
    enquiryOther: cleanOther,
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    message: cleanMessage,
    ts: new Date().toISOString(),
  });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = (process.env.ENQUIRY_TO_EMAIL || "hasitha@theroifirm.com").trim();
  const FROM = (process.env.ENQUIRY_FROM_EMAIL || "onboarding@resend.dev").trim();

  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY missing: enquiry logged but not emailed.");
    return res.status(200).json({ ok: true, emailed: false });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    const subject = `New enquiry: ${cleanType}${cleanOther ? ` (${cleanOther})` : ""} — ${cleanName}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6">
        <h2 style="margin:0 0 12px">New enquiry received</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px">
          <tr><td style="padding:6px 0;color:#666;width:140px">Type</td><td style="padding:6px 0"><b>${escapeHtml(cleanType)}</b></td></tr>
          ${
            cleanType === "Other" && cleanOther
              ? `<tr><td style="padding:6px 0;color:#666">Other</td><td style="padding:6px 0"><b>${escapeHtml(cleanOther)}</b></td></tr>`
              : ""
          }
          <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0">${escapeHtml(cleanName)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td></tr>
          ${
            cleanPhone
              ? `<tr><td style="padding:6px 0;color:#666">Phone</td><td style="padding:6px 0">${escapeHtml(cleanPhone)}</td></tr>`
              : ""
          }
          <tr><td style="padding:6px 0;color:#666;vertical-align:top">Message</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(cleanMessage)}</td></tr>
        </table>
        <p style="margin:16px 0 0;color:#666;font-size:12px">Replying to this email will reply to the sender (Reply-To is set).</p>
      </div>
    `;

    await resend.emails.send({
  from: `Hasitha Portfolio <${FROM}>`,
  to: [TO],
  replyTo: cleanEmail,
  subject,
  html,
});

    return res.status(200).json({ ok: true, emailed: true });
  } catch (err: any) {
    console.error("Failed to send enquiry email", err?.message || err);
    return res.status(500).json({ error: "Email failed to send. Please try again." });
  }
}
