import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs text-[color:var(--muted)]">
      {children}
    </span>
  );
}

function Card({
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

function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  target,
  rel,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--focus)]";
  const solid =
    "bg-[var(--brand-gold)] text-[#050505] hover:bg-[var(--brand-gold-hover)]";
  const outline =
    "border border-[var(--border-strong)] bg-[rgba(255,255,255,0.03)] text-[color:var(--foreground)] hover:bg-[rgba(255,255,255,0.07)]";
  const cls = cn(base, variant === "solid" ? solid : outline, className);

  if (href) {
    return (
      <a className={cls} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function SectionTitle({
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
      <h1 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
        {title}
      </h1>
      {desc ? (
        <p className="text-[color:var(--muted)] max-w-3xl leading-relaxed">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function SenakaBatagodaCaseStudy() {
  const email = "hasitha@theroifirm.com";
  const linkedIn = "https://www.linkedin.com/in/hsjayathilaka/";
  const calendly =
    "https://calendly.com/hasitha-theroifirm/intro-call-hasitha-jayathilaka";

  const youtubeUrl = "https://www.youtube.com/@senakabatagoda";
  const spotifyUrl = "https://open.spotify.com/artist/6ydHFgQbtjfJ41qxQFhXwe";
  const appleMusicUrl =
    "https://music.apple.com/lk/artist/senaka-batagoda/1425513104/see-all?section=top-songs";

  // ✅ Lightbox
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  useEffect(() => {
    if (!lightboxSrc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  const mediaImages = [
    {
      src: "/case-studies/senaka/artist-01.jpg",
      alt: "Senaka Batagoda - portrait 1",
    },
    {
      src: "/case-studies/senaka/artist-02.jpg",
      alt: "Senaka Batagoda - portrait 2",
    },
    {
      src: "/case-studies/senaka/release-art.jpg",
      alt: "Release artwork / thumbnail",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Case Study - Digital Distribution & Monetization Strategy (Senaka
          Batagoda)
        </title>
        <meta
          name="description"
          content="How I designed and executed a distribution + monetization system for a Sri Lankan musician - platform control, verification, catalog recovery, and rights-safe infrastructure."
        />
      </Head>

      <div className="min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/55 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </a>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
              <Button href={calendly} target="_blank" rel="noreferrer">
                Book a call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT */}
            <div className="w-full lg:flex-1 space-y-8">
              {/* Hero */}
              <div className="space-y-6">
                <SectionTitle
                  eyebrow="Case Study"
                  title="Building a Digital Distribution & Monetization Strategy (2020)"
                  desc="A real-world example of systems-level growth: platform control, identity verification, catalog recovery, rights protection, and sustainable digital revenue - executed in a market where music distribution infrastructure was still emerging."
                />

                <div className="flex flex-wrap gap-2">
                  <Badge>Fractional / Consulting</Badge>
                  <Badge>Creator Economy</Badge>
                  <Badge>Distribution Systems</Badge>
                  <Badge>Copyright & Claims</Badge>
                  <Badge>Omnichannel</Badge>
                  <Badge>IP & Attribution</Badge>
                </div>

                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                        Client
                      </div>
                      <div className="mt-1 font-semibold text-[color:var(--foreground)]">
                        Senaka Batagoda
                      </div>
                      <div className="text-sm text-[color:var(--muted)]">
                        Sri Lankan musician & performer
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                        Timeframe
                      </div>
                      <div className="mt-1 font-semibold text-[color:var(--foreground)]">
                        Feb – Jun 2020
                      </div>
                      <div className="text-sm text-[color:var(--muted)]">
                        Lockdown-era execution
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                        Outcome
                      </div>
                      <div className="mt-1 font-semibold text-[color:var(--foreground)]">
                        A working digital revenue system
                      </div>
                      <div className="text-sm text-[color:var(--muted)]">
                        Verification + monetization enabled
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Media */}
              <Card className="p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                      Media
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--muted)]">
                      Selected visuals from the engagement.
                    </div>
                  </div>
                  <div className="text-xs text-[color:var(--muted-2)] hidden sm:block">
                    Click any image to preview
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {mediaImages.map((img) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => {
                        setLightboxSrc(img.src);
                        setLightboxAlt(img.alt);
                      }}
                      className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-left hover:bg-[rgba(255,255,255,0.06)] transition"
                      title="Open image"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover aspect-[16/10] transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </Card>

              {/* Context */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                  Context
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                  A market ahead of its infrastructure
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  In 2020, digital music distribution and royalty systems were
                  still unfamiliar to many local teams. Strong offline popularity
                  did not automatically translate into verified digital identity,
                  platform control, or predictable monetization.
                </p>
              </Card>

              {/* Challenge */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                  Challenge
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                  Fragmentation + rights complexity
                </h2>
                <ul className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed list-disc pl-5 space-y-2">
                  <li>
                    Assets scattered across platforms with inconsistent ownership
                    signals
                  </li>
                  <li>
                    Verification gaps (artist identity not clearly recognized by
                    discovery engines)
                  </li>
                  <li>Risk of unauthorized uploads and monetization leakage</li>
                  <li>Need for a compliant distribution pipeline that could scale</li>
                  <li>
                    Need for clear attribution and contributor alignment as part
                    of IP hygiene
                  </li>
                </ul>
              </Card>

              {/* Approach */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                  Approach
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                  Build the engine, not just the posts
                </h2>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      title: "1) Platform control & verification",
                      body:
                        "Consolidated presence and enabled official identity signals across platforms (artist verification, channel structure, and discovery alignment).",
                    },
                    {
                      title: "2) Distribution architecture",
                      body:
                        "Implemented a structured distribution layer for catalog publishing, royalty tracking, and consistent metadata - supporting global discovery and monetization.",
                    },
                    {
                      title: "3) Rights + attribution protocol",
                      body:
                        "Consulted on attribution and contributor rights to keep releases aligned with IP expectations - designed to reduce future disputes and platform restrictions.",
                    },
                    {
                      title: "4) Visual identity coherence",
                      body:
                        "Built a consistent graphic system across social media, thumbnails, and release collateral so the brand looked official, recognizable, and platform-native.",
                    },
                    {
                      title: "5) Omnichannel use of assets",
                      body:
                        "Turned existing materials into a cohesive omnichannel footprint - transforming scattered presence into a consistent digital home for fans.",
                    },
                  ].map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5"
                    >
                      <div className="font-semibold text-[color:var(--foreground)]">
                        {b.title}
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Outcome */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                  Outcome
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                  A working, repeatable digital revenue system
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  The engagement established foundations for verified identity,
                  catalog structure, platform compliance, and monetization.
                  Sensitive financial details are intentionally not included in
                  this public write-up.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Verification enabled</Badge>
                  <Badge>Monetization enabled</Badge>
                  <Badge>Catalog structured</Badge>
                  <Badge>Brand coherence</Badge>
                  <Badge>Attribution protocol</Badge>
                  <Badge>Reduced leakage risk</Badge>
                </div>
              </Card>

              {/* Why this mattered */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-[color:var(--muted-2)]">
                  Why this mattered
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                  Compliance-first systems protect creators long-term
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  During my engagement, the priority was not only “getting music
                  online,” but building a rights-safe, platform-compliant, and
                  coherent digital identity - including consistent visual
                  branding, proper attribution to contributors, and a structured
                  approach to rights and distribution.
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  Subsequent developments in later years highlighted why these
                  guardrails matter: parts of a catalog can become restricted
                  when contributor rights and distribution protocols are not
                  consistently maintained over time. This is exactly why the
                  original strategy was designed to be compliance-first rather
                  than campaign-first.
                </p>
              </Card>
            </div>

            {/* RIGHT */}
            <aside className="w-full lg:w-[360px] xl:w-[380px] space-y-4 lg:sticky lg:top-24">
              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  Executive summary
                </div>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  The artist had strong offline recognition but lacked a cohesive
                  digital presence. I designed a full distribution + monetization
                  architecture, consolidated fragmented assets, navigated platform
                  constraints, and implemented a repeatable system for visibility,
                  rights protection, and income generation - while intentionally
                  avoiding sensitive commercial details.
                </p>

                <div className="mt-5 grid gap-2">
                  <Button
                    href={`mailto:${email}?subject=Case%20Study%20Enquiry%20—%20Music%20Distribution%20System`}
                    className="w-full"
                  >
                    Enquire via email
                  </Button>
                  <Button
                    variant="outline"
                    href={calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    Book a call
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  Listen / Watch
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Official artist presence across platforms.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2">
                  {[
                    {
                      href: youtubeUrl,
                      icon: "/case-studies/platforms/youtube.svg",
                      label: "YouTube",
                    },
                    {
                      href: spotifyUrl,
                      icon: "/case-studies/platforms/spotify.svg",
                      label: "Spotify",
                    },
                    {
                      href: appleMusicUrl,
                      icon: "/case-studies/platforms/apple-music.svg",
                      label: "Apple Music / iTunes",
                    },
                  ].map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-3 hover:bg-[rgba(255,255,255,0.07)] transition"
                    >
                      <div className="flex items-center gap-3">
                        <img src={p.icon} alt={p.label} className="h-5 w-5" />
                        <div className="text-sm font-semibold text-[color:var(--foreground)]">
                          {p.label}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[color:var(--muted-2)]" />
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  What this proves
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                  <li className="flex gap-2">
                    <Target className="h-4 w-4 mt-0.5 text-[var(--brand-gold)]" />
                    Systems thinking over campaigns
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-[var(--brand-gold)]" />
                    Rights protection + platform compliance
                  </li>
                  <li className="flex gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-[var(--brand-gold)]" />
                    Turning cultural IP into measurable digital value
                  </li>
                  <li className="flex gap-2">
                    <Users className="h-4 w-4 mt-0.5 text-[var(--brand-gold)]" />
                    Partner-driven execution in an immature market
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-[var(--brand-gold)]" />
                    Long-term IP safety over short-term distribution
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  Engage
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  If you need structured distribution, positioning, or a growth
                  engine for a creator brand, platform, or cultural venture:
                </p>

                <div className="mt-4 grid gap-2">
                  <Button
                    href={`mailto:${email}?subject=Enquiry%20—%20Distribution%20%2F%20Creator%20Growth`}
                    className="w-full"
                  >
                    Email me
                  </Button>
                  <Button
                    variant="outline"
                    href={calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    Book via Calendly
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  Next case studies
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                  <li>• CRM + growth strategy for an online aggregator</li>
                  <li>• Building a VR demo from zero (learning + shipping)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-semibold text-[color:var(--foreground)]">
                  Disclaimer & Rights
                </div>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  This case study is presented for portfolio and professional
                  reference purposes only.
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  The release artwork and promotional visuals shown here were
                  designed and produced by Hasitha Jayathilaka as part of a paid
                  project engagement. Artist photographs depict Senaka Batagoda
                  and were used with permission for the original promotional
                  campaign.
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  Artist name, likeness, recordings, and platform trademarks
                  remain the property of their respective owners. This page does
                  not imply current affiliation, representation, or endorsement.
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted)] leading-relaxed">
                  Sensitive commercial and financial details are intentionally
                  not disclosed. If any material requires correction or removal,
                  it will be updated promptly upon request.
                </p>
              </Card>
            </aside>
          </div>

          {/* Lightbox */}
          {lightboxSrc ? (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Image preview"
              onClick={() => setLightboxSrc(null)}
            >
              <div
                className="relative max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0E0E0E] shadow-[var(--shadow-soft)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightboxSrc(null)}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.08)] text-[color:var(--foreground)] hover:bg-[rgba(255,255,255,0.12)]"
                  aria-label="Close"
                  title="Close (Esc)"
                >
                  ✕
                </button>

                <img
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  className="max-h-[90vh] w-auto max-w-[92vw] object-contain"
                />
              </div>
            </div>
          ) : null}

          <footer className="pt-12 pb-10 text-sm text-[color:var(--muted-2)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
              <div>© {new Date().getFullYear()} Hasitha Jayathilaka</div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="underline underline-offset-4 hover:text-[color:var(--foreground)]"
                  href="/"
                >
                  Portfolio
                </a>
                <a
                  className="underline underline-offset-4 hover:text-[color:var(--foreground)]"
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="underline underline-offset-4 hover:text-[color:var(--foreground)]"
                  href={calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  Calendly
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
