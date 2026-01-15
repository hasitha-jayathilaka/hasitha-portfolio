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

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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

  // Prevent background scroll when modal is open
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

      setServerMsg("Thanks - your enquiry was sent. I’ll get back to you soon.");
      setSubmitting(false);
    } catch {
      setServerMsg("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop (Black Gallery) */}
      <button
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Scroll container */}
      <div className="relative h-full w-full overflow-y-auto">
        <div className="min-h-full flex items-start justify-center p-4 sm:p-6">
          {/* Panel */}
          <div
            className={cn(
              "w-[92%] max-w-xl overflow-hidden rounded-3xl border border-[var(--border)]",
              "bg-[color:var(--background)] text-[color:var(--foreground)] shadow-[var(--shadow-soft)]",
              "max-h-[90vh]"
            )}
          >
            {/* Subtle gold hairline */}
            <div className="h-[2px] bg-[var(--brand-gold)]" />

            {/* Glow / vignette like hero */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.18), rgba(212,175,55,0.0) 65%)",
                  filter: "blur(2px)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(1200px 700px at 50% 0%, rgba(255,255,255,0.06), rgba(0,0,0,0) 55%)",
                }}
              />
            </div>

            {/* Sticky header */}
            <div className="sticky top-0 z-10 border-b border-[var(--border)] bg-[rgba(0,0,0,0.55)] backdrop-blur px-6 md:px-8 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                    Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Choose a category, add a short note (max 300 chars), and I’ll respond.
                  </p>
                </div>

                <button
                  className="rounded-xl border border-[var(--border-strong)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] hover:bg-[rgba(255,255,255,0.07)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]"
                  onClick={onClose}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="px-6 md:px-8 py-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Enquiry type */}
                <div>
                  <label className="text-sm font-semibold text-[color:var(--foreground)]">
                    Enquiry type
                  </label>
                  <select
                    className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                    value={type}
                    onChange={(ev) => setType(ev.target.value as EnquiryType)}
                  >
                    {ENQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#050505]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {type === "Other" ? (
                  <div>
                    <label className="text-sm font-semibold text-[color:var(--foreground)]">
                      Specify “Other”
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-2)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                      value={otherType}
                      onChange={(e2) => setOtherType(e2.target.value)}
                      placeholder="e.g., Partnerships / Speaking / Advisory"
                      maxLength={80}
                    />
                    {errors.otherType ? (
                      <p className="mt-1 text-xs text-[color:var(--brand-gold)]">
                        {errors.otherType}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {/* Name / Email / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-[color:var(--foreground)]">
                      Name *
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-2)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                      value={name}
                      onChange={(e2) => setName(e2.target.value)}
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-[color:var(--brand-gold)]">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[color:var(--foreground)]">
                      Email *
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-2)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                      value={email}
                      onChange={(e2) => setEmail(e2.target.value)}
                      placeholder="you@company.com"
                      inputMode="email"
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-[color:var(--brand-gold)]">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-[color:var(--foreground)]">
                      Phone (optional)
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-2)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                      value={phone}
                      onChange={(e2) => setPhone(e2.target.value)}
                      placeholder="+94 7X XXX XXXX"
                      inputMode="tel"
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-[color:var(--brand-gold)]">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-[color:var(--foreground)]">
                      Message *
                    </label>
                    <span className="text-xs text-[color:var(--muted-2)]">
                      {message.length}/300
                    </span>
                  </div>
                  <textarea
                    className="mt-2 w-full min-h-[110px] rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-2)] outline-none focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--focus)]"
                    value={message}
                    onChange={(e2) => setMessage(e2.target.value.slice(0, 300))}
                    placeholder="Short context: role/need, timeline, location, and what you want to discuss."
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-[color:var(--brand-gold)]">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                {/* Server message */}
                {serverMsg ? (
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[color:var(--muted)]">
                    {serverMsg}
                  </div>
                ) : null}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="rounded-2xl bg-[var(--brand-gold)] text-[#050505] px-5 py-3 font-semibold hover:bg-[var(--brand-gold-hover)] transition disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--focus)]"
                  >
                    {submitting ? "Sending..." : "Send enquiry"}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-2xl border border-[var(--border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 font-semibold text-[color:var(--foreground)] hover:bg-[rgba(255,255,255,0.07)] transition focus:outline-none focus:ring-2 focus:ring-[var(--focus)]"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-xs text-[color:var(--muted-2)]">
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
