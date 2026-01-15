import React from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-[var(--shadow-soft)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs text-[color:var(--muted)]">
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  target,
  rel,
  download,
  type,
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--focus)] disabled:opacity-50 disabled:cursor-not-allowed";

  const solid =
    "bg-[var(--brand-gold)] text-[#050505] hover:bg-[var(--brand-gold-hover)]";
  const outline =
    "border border-[var(--border-strong)] bg-[rgba(255,255,255,0.03)] text-[color:var(--foreground)] hover:bg-[rgba(255,255,255,0.07)]";

  const cls = cn(base, variant === "solid" ? solid : outline, className);

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={target}
        rel={rel}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--foreground)]">
        {title}
      </h2>
      {desc ? (
        <p className="text-[color:var(--muted)] max-w-2xl leading-relaxed">{desc}</p>
      ) : null}
    </div>
  );
}
