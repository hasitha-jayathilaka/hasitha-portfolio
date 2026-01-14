import React, { useMemo, useState } from "react";
import Head from "next/head";
import { ArrowLeft, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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
        "rounded-2xl border border-white/10 bg-white/5 shadow-sm overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "live" | "soon";
}) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs";
  const variants: Record<string, string> = {
    default: "border-white/10 bg-white/5 text-white/80",
    live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    soon: "border-white/10 bg-white/5 text-white/70",
  };

  return <span className={cn(base, variants[variant])}>{children}</span>;
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
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors";
  const solid = "bg-[#C9A24D] text-[#0F1322] hover:bg-[#b8913f]";
  const outline =
    "border border-[#F5F1E8]/20 bg-transparent text-[#F5F1E8] hover:bg-[#F5F1E8]/10";
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

export default function CaseStudiesIndex() {
  // ✅ Your prefill link
  const PREFILL_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdgXyDCwAl7Hwurtjogt5PouTr1ud809zA9en0dmNSqEGZG0w/viewform?usp=pp_url&entry.1992433045=__EMAIL__";

  // Optional quick links (adjust if you want)
  const linkedIn = "https://www.linkedin.com/in/hsjayathilaka/";
  const calendly =
    "https://calendly.com/hasitha-theroifirm/intro-call-hasitha-jayathilaka";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const caseStudies = useMemo(
    () => [
      // ✅ LIVE
      {
        status: "live",
        slug: "/case-studies/senaka-batagoda",
        title: "Digital Distribution & Monetization System",
        desc: "Turning an artist’s catalog into a verified, rights-safe digital business.",
        tags: ["Creator Economy", "IP & Attribution", "Distribution"],
        thumb: "/case-studies/thumbs/senaka.jpg",
      },
      {
        status: "live",
        slug: "/case-studies/online-aggregator",
        title: "Holistic Growth Strategy for an Online Aggregator",
        desc: "Aligning marketing, operations, and technology into one coordinated growth system.",
        tags: ["Growth Strategy", "Systems Thinking", "Ops × Marketing"],
        thumb: "/case-studies/thumbs/aggregator.jpg",
      },

      // ✅ COMING SOON (your 12 in order)
      {
        status: "soon",
        title: "How Games Can Promote Brands",
        desc: "Building engagement, loyalty, and monetization through interactive worlds.",
        tags: ["Brand Strategy", "Gaming", "Experience Design"],
        thumb: "/case-studies/thumbs/breakout.jpg",
      },
      {
        status: "soon",
        title: "Luxury Tea Brands in the Digital Age",
        desc: "How heritage tea becomes a modern digital luxury brand.",
        tags: ["Luxury Branding", "UGC", "Storytelling"],
        thumb: "/case-studies/thumbs/luxury-tea.jpg",
      },
      {
        status: "soon",
        title: "Tourism Distribution & Channel Strategy",
        desc: "How early digital adoption created strong advantages in hospitality.",
        tags: ["Distribution", "Tourism", "Adoption Strategy"],
        thumb: "/case-studies/thumbs/tourism.jpg",
      },
      {
        status: "soon",
        title: "Mobile Media & Content Monetization",
        desc: "Lessons from mobile-first media distribution and aggregation strategies.",
        tags: ["Monetization", "Content", "Distribution"],
        thumb: "/case-studies/thumbs/telco.jpg",
      },
      {
        status: "soon",
        title: "Hotel & Café Chain Omnichannel Strategy",
        desc: "Timing, storytelling, and channel synergy to uplift demand.",
        tags: ["Omnichannel", "Brand", "Growth"],
        thumb: "/case-studies/thumbs/hotels.jpg",
      },
      {
        status: "soon",
        title: "Arroma Bakery: Modern Brand & Product Storytelling",
        desc: "How presentation, offers, and content shape customer loyalty.",
        tags: ["Food Brand", "Creative", "Marketing Systems"],
        thumb: "/case-studies/thumbs/arroma.jpg",
      },
      {
        status: "soon",
        title: "Carino Ice Cream: Elevating an Artisan Brand",
        desc: "How premium food brands should position — and what to avoid.",
        tags: ["Premium Positioning", "Brand", "Retail"],
        thumb: "/case-studies/thumbs/carino.jpg",
      },
      {
        status: "soon",
        title: "Journalism That Drives Change",
        desc: "Using narrative to influence culture and creative industry direction.",
        tags: ["Narrative", "Impact", "Creative Economy"],
        thumb: "/case-studies/thumbs/journalism.jpg",
      },
      {
        status: "soon",
        title: "New Media Publishing & Virality",
        desc: "Understanding reach mechanics in early digital publishing ecosystems.",
        tags: ["New Media", "Virality", "Content Strategy"],
        thumb: "/case-studies/thumbs/lulk.jpg",
      },
      {
        status: "soon",
        title: "Wood Carving: Craft to Luxury Brand",
        desc: "Why craftsmanship needs premium branding — not daily-wage thinking.",
        tags: ["Luxury Craft", "Brand Positioning", "Cultural Value"],
        thumb: "/case-studies/thumbs/wood-carving.jpg",
      },
      {
        status: "soon",
        title: "Green Knights: Youth Environmental Mobilization",
        desc: "How digital storytelling helped mobilize community action.",
        tags: ["Community", "Social Impact", "Media"],
        thumb: "/case-studies/thumbs/green-knights.jpg",
      },
      {
        status: "soon",
        title: "Rapid Crisis Coordination Platform",
        desc: "Designing a fast system to mobilize help in urgent situations.",
        tags: ["Systems Design", "Coordination", "Impact"],
        thumb: "/case-studies/thumbs/flood-relief.jpg",
      },
    ],
    []
  );

  const live = caseStudies.filter((c) => c.status === "live");
  const soon = caseStudies.filter((c) => c.status === "soon");

  const openPrefilledForm = () => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
    const url = PREFILL_FORM_URL.replace("__EMAIL__", encodeURIComponent(email));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Case Studies - Hasitha Jayathilaka</title>
        <meta
          name="description"
          content="Selected case studies demonstrating systems thinking, growth strategy, and execution discipline."
        />
      </Head>

      <div className="min-h-screen bg-[#0F1322] text-[#F5F1E8]">
        {/* ✅ Sticky top bar (Back + quick actions) */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
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
          {/* Title */}
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-widest text-white/60">
              Portfolio
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Case Studies
            </h1>
            <p className="text-sm md:text-base text-[#F5F1E8]/75 max-w-3xl">
              Selected work demonstrating systems thinking, growth strategy, and
              execution discipline across complex teams and platforms.
            </p>
          </div>

          {/* Featured */}
          <div className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-white">Featured</h2>
              <div className="text-sm text-white/60">2 Published Case Studies</div>
            </div>

            <div className="mt-4 space-y-4">
              {live.map((cs) => (
                <a
                  key={cs.slug}
                  href={cs.slug}
                  className="group block"
                  aria-label={`Open case study: ${cs.title}`}
                >
                  <Card className="transition-colors duration-200 group-hover:bg-white/10">
                    <div className="flex flex-col sm:flex-row gap-0">
                      <div className="sm:w-[180px] md:w-[200px] shrink-0">
                        <img
                          src={cs.thumb}
                          alt={`${cs.title} thumbnail`}
                          className="h-[220px] sm:h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 p-5 md:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="live">Live</Badge>
                              <div className="text-lg font-semibold text-white">
                                {cs.title}
                              </div>
                            </div>
                            <div className="text-sm text-white/75 max-w-3xl">
                              {cs.desc}
                            </div>
                          </div>

                          <ArrowRight className="mt-1 h-5 w-5 text-white/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {cs.tags.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Coming soon */}
          <div className="mt-12">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-white">Coming soon</h2>
              <div className="text-sm text-white/60">
                {soon.length} case studies in progress
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {soon.map((cs) => (
                <Card
                  key={cs.title}
                  className="group transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex gap-4 p-5">
                    <div className="w-[92px] shrink-0">
                      <img
                        src={cs.thumb}
                        alt={`${cs.title} thumbnail`}
                        className="w-full aspect-[4/5] object-cover rounded-xl border border-white/10"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="soon">
                          <span className="inline-flex items-center gap-2">
                            <Lock className="h-3.5 w-3.5" />
                            Coming soon
                          </span>
                        </Badge>
                        <div className="text-base font-semibold text-white">
                          {cs.title}
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-white/75">
                        {cs.desc}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {cs.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <Card className="mt-12 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-white">
                  Get updates when new case studies go live
                </div>
                <p className="text-sm text-white/75 max-w-2xl">
                  Subscribe to receive a short email whenever a new case study is
                  published.
                </p>
              </div>

              <div className="w-full md:w-[420px]">
                {!submitted ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    />
                    <button
                      type="button"
                      onClick={openPrefilledForm}
                      className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium bg-[#C9A24D] text-[#0F1322] hover:bg-[#b8913f] transition-colors"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <div className="text-sm">
                      Thank you - you’re subscribed. I’ll email you when new
                      case studies go live.
                    </div>
                  </div>
                )}

                <div className="mt-2 text-xs text-white/50">
                                  </div>
              </div>
            </div>
          </Card>

          {/* ✅ Footer */}
          <footer className="pt-12 pb-10 text-sm text-white/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>© {new Date().getFullYear()} Hasitha Jayathilaka</div>
              <div className="flex flex-wrap gap-4">
                <a className="underline underline-offset-4 hover:text-white" href="/">
                  Portfolio
                </a>
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="underline underline-offset-4 hover:text-white"
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
