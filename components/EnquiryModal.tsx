import React, { useMemo, useState } from "react";

type EnquiryType =
  | "Fractional CMO / Growth Lead"
  | "Creative & Product Strategy"
  | "Venture & IP Architecture"
  | "Other";

const ENQUIRY_OPTIONS: EnquiryType[] = [
  "Fractional CMO / Growth Lead",
  "Creative & Product Strategy",
  "Venture & IP Architecture",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  // permissive: +, digits, spaces, hyphens, parentheses; 7–20 chars
  return /^[+()\-0-9\s]{7,20}$/.test(phone.trim());
}

export default function EnquiryModal({
  open,
  onClose,
  defaultType,
}: {
  open: boolean;
  onClose: () => void;
  defaultType?: EnquiryType;
}) {
  const initialType = useMemo<EnquiryType>(() => {
    if (defaultType && ENQUIRY_OPTIONS.includes(defaultType)) return defaultType;
    return "Fractional CMO / Growth Lead";
  }, [defaultType]);

  const [type, setType] = useState<EnquiryType>(initialType);
  const [otherType, setOtherType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  // Reset when defaultType changes / modal opens
  React.useEffect(() => {
    if (!open) return;
    setType(initialType);
    setOtherType("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setServerMsg(null);
  }, [open, initialType]);

  // ✅ Prevent background scroll when modal is open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const errors = (() => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2)
      e.name = "Please enter your name (min 2 characters).";
    if (!isValidEmail(email)) e.email = "Please enter a valid email.";
    if (phone.trim() && !isValidPhone(phone))
      e.phone = "Phone looks invalid (optional).";
    if (type === "Other" && otherType.trim().length < 3)
      e.otherType = "Please specify (min 3 characters).";
    if (message.trim().length < 1) e.message = "Please add a short message.";
    if (message.length > 300) e.message = "Message must be 300 characters or less.";
    return e;
  })();

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMsg(null);
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      const payload = {
        enquiryType: type,
        enquiryOther: type === "Other" ? otherType.trim() : "",
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerMsg(data?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setServerMsg("Thanks — your enquiry was sent. I’ll get back to you soon.");
      setSubmitting(false);
    } catch {
      setServerMsg("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* ✅ Scroll container (this is the key fix) */}
      <div className="relative h-full w-full overflow-y-auto">
        {/* Center container but allows scrolling */}
        <div className="min-h-full flex items-start justify-center p-4 sm:p-6">
          {/* Panel */}
          <div className="w-[92%] max-w-xl rounded-3xl border border-white/10 bg-[#0F1322] text-[#F5F1E8] shadow-2xl overflow-hidden max-h-[90vh]">
            <div className="h-1.5 bg-gradient-to-r from-[#F6C85F] via-[#8B5CF6] to-[#F6C85F]" />

            {/* ✅ Sticky header so Close stays visible */}
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0F1322]/95 backdrop-blur px-6 md:px-8 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Enquiry</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Choose a category, add a short note (max 300 chars), and I’ll respond.
                  </p>
                </div>
                <button
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                  onClick={onClose}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>

            {/* ✅ Scrollable body */}
            <div className="px-6 md:px-8 py-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Enquiry type */}
                <div>
                  <label className="text-sm text-white/80">Enquiry type</label>
                  <select
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                    value={type}
                    onChange={(ev) => setType(ev.target.value as EnquiryType)}
                  >
                    {ENQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0F1322]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {type === "Other" ? (
                  <div>
                    <label className="text-sm text-white/80">Specify “Other”</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                      value={otherType}
                      onChange={(e2) => setOtherType(e2.target.value)}
                      placeholder="e.g., Partnerships / Speaking / Advisory"
                      maxLength={80}
                    />
                    {errors.otherType ? (
                      <p className="mt-1 text-xs text-red-300">{errors.otherType}</p>
                    ) : null}
                  </div>
                ) : null}

                {/* Name / Email / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/80">Name *</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                      value={name}
                      onChange={(e2) => setName(e2.target.value)}
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-red-300">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm text-white/80">Email *</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                      value={email}
                      onChange={(e2) => setEmail(e2.target.value)}
                      placeholder="you@company.com"
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm text-white/80">Phone (optional)</label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                      value={phone}
                      onChange={(e2) => setPhone(e2.target.value)}
                      placeholder="+94 7X XXX XXXX"
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
                    ) : null}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-white/80">Message *</label>
                    <span className="text-xs text-white/60">{message.length}/300</span>
                  </div>
                  <textarea
                    className="mt-2 w-full min-h-[110px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none"
                    value={message}
                    onChange={(e2) => setMessage(e2.target.value.slice(0, 300))}
                    placeholder="Short context: role/need, timeline, location, and what you want to discuss."
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-red-300">{errors.message}</p>
                  ) : null}
                </div>

                {/* Server message */}
                {serverMsg ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    {serverMsg}
                  </div>
                ) : null}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="rounded-2xl bg-[#F6C85F] text-[#0B1026] px-5 py-3 font-medium shadow hover:opacity-95 transition disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send enquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-xs text-white/50">
                  Prefer a meeting? Use the “Book a call” button for Calendly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
