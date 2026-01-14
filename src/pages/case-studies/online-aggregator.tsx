import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Layers,
  Workflow,
  CheckCircle2,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
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
        "rounded-2xl border border-white/10 bg-white/5 shadow-sm",
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
    <button className={cls} onClick={onClick}>
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
        <div className="text-xs uppercase tracking-widest text-white/60">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-3xl md:text-4xl font-semibold text-white">{title}</h1>
      {desc ? <p className="text-[#F5F1E8]/75 max-w-3xl">{desc}</p> : null}
    </div>
  );
}

export default function OnlineAggregatorCaseStudy() {
  const email = "hasitha@theroifirm.com";
  const linkedIn = "https://www.linkedin.com/in/hsjayathilaka/";
  const calendly =
    "https://calendly.com/hasitha-theroifirm/intro-call-hasitha-jayathilaka";

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

  // Images (place these in: public/case-studies/aggregator/)
  const images = [
    {
      src: "/case-studies/aggregator/hero.jpg",
      alt: "Growth strategy - overview visual",
      caption: "A systems view of growth: teams, workflows, and accountability.",
    },
    {
      src: "/case-studies/aggregator/process.jpg",
      alt: "Lead flow / nurturing workflow",
      caption: "CRM-like operating model: lead routing, nurturing, and handovers.",
    },
    {
      src: "/case-studies/aggregator/platform.jpg",
      alt: "Platform utilization / operational alignment",
      caption: "Connecting marketing, sales, operations, and IT into one flow.",
    },
  ];

  return (
    <>
      <Head>
        <title>Case Study - Holistic Growth Strategy for an Online Aggregator</title>
        <meta
          name="description"
          content="How I applied a Nexialist systems-thinking approach to orchestrate marketing, sales, operations, IT, and quality control into a coordinated growth strategy for a national online aggregator."
        />
      </Head>

      <div className="min-h-screen bg-[#0F1322] text-[#F5F1E8]">
        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
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
          {/* ✅ Same structure as Senaka (two-column layout, no gaps) */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT: Content flow */}
            <div className="w-full lg:flex-1 space-y-8">
              {/* Hero */}
              <div className="space-y-6">
                <SectionTitle
                  eyebrow="Case Study"
                  title="Holistic Growth Strategy for a National Online Aggregator"
                  desc="A Nexialist (systems-thinking) approach to growth: aligning marketing, sales, operations, IT, and human capital so the organization functions as one coordinated platform - not disconnected teams."
                />

                <div className="flex flex-wrap gap-2">
                  <Badge>Growth Strategy</Badge>
                  <Badge>Systems Thinking</Badge>
                  <Badge>Operations × Marketing</Badge>
                  <Badge>Lead Nurturing</Badge>
                  <Badge>Quality Control</Badge>
                  <Badge>Product Onboarding</Badge>
                  <Badge>Cross-functional Execution</Badge>
                </div>

                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/60">
                        Organization
                      </div>
                      <div className="mt-1 font-medium">
                        Online Service Aggregator
                      </div>
                      <div className="text-sm text-white/70">
                        Anonymized for portfolio safety
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/60">
                        My role
                      </div>
                      <div className="mt-1 font-medium">
                        Full-time, cross-functional
                      </div>
                      <div className="text-sm text-white/70">
                        Growth + operations orchestration
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/60">
                        Focus
                      </div>
                      <div className="mt-1 font-medium">Coordination at scale</div>
                      <div className="text-sm text-white/70">
                        Utilization, flow, accountability
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Visuals (Lightbox) */}
              <Card className="p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">
                      Visuals
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                                          </div>
                  </div>
                  <div className="text-xs text-white/50 hidden sm:block">
                    Click any image to preview
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {images.map((img) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => {
                        setLightboxSrc(img.src);
                        setLightboxAlt(img.alt || "Image preview");
                      }}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
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

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/60">
                  {images.map((img) => (
                    <div key={img.alt} className="leading-relaxed">
                      {img.caption}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Context */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Context
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  The components existed - coordination didn’t
                </h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  The organization had already assembled the building blocks for
                  growth: advertising, digital platforms, sales teams, customer
                  support, partner networks, and internal technology. The
                  challenge was turning these parallel systems into a single
                  coordinated platform.
                </p>
              </Card>

              {/* Challenge */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Challenge
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Under-utilization caused by fragmentation
                </h2>

                <ul className="mt-3 text-sm text-white/75 leading-relaxed list-disc pl-5 space-y-2">
                  <li>
                    Campaigns and lead sources were active, but follow-up and
                    ownership were not consistently visible end-to-end.
                  </li>
                  <li>
                    Marketing, sales, operations, and IT were solving problems
                    in their own lanes instead of a shared system.
                  </li>
                  <li>
                    Quality control and customer experience were difficult to
                    standardize without clear workflows and feedback loops.
                  </li>
                  <li>
                    New product launches and onboarding needed a repeatable
                    integration process to avoid operational drift.
                  </li>
                  <li>
                    Core operational issues (process gaps, utilization, handover
                    friction) needed to be fixed to unlock reliable growth.
                  </li>
                </ul>
              </Card>

              {/* Nexialist View */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Nexialist view
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Growth emerges from system alignment
                </h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  A Nexialist approach treats the company as a living system.
                  Growth is not the output of one department - it emerges from
                  the interaction between marketing, sales, operations,
                  technology, human capital, customer experience, and partners.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Marketing ↔ Sales</Badge>
                  <Badge>Sales ↔ Ops</Badge>
                  <Badge>Ops ↔ IT</Badge>
                  <Badge>IT ↔ CX</Badge>
                  <Badge>HR ↔ Performance</Badge>
                  <Badge>Partners ↔ Service</Badge>
                </div>
              </Card>

              {/* Approach */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Approach
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Build the operating model, then scale tactics
                </h2>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Workflow className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          1) CRM-like workflow without replacing the stack
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          I didn’t deploy a new enterprise CRM. Instead, I
                          structured a CRM-like workflow so existing tools and
                          teams could operate as one traceable system - routing,
                          ownership, follow-ups, and outcome visibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Layers className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          2) Lead nurturing + accountability design
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          Defined how leads move across teams: capture → qualify
                          → engage → resolve. Each stage had clear ownership and
                          follow-up discipline to reduce drop-offs and “lost
                          context.”
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          3) Campaign utilization, not just campaign execution
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          Managed and optimized marketing across channels - but
                          with a focus on utilization: ensuring lead flow,
                          follow-up readiness, and operational capacity matched
                          what campaigns were generating.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          4) Quality control + feedback loops
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          Introduced practical QC and escalation routines so the
                          service experience became consistent - and issues
                          could be tracked, resolved, and prevented from
                          repeating.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          5) New product onboarding + launches
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          Researched, shaped, and supported new offerings - and
                          ensured launches were integrated into the same
                          operational spine (sales readiness, support paths,
                          partner handling, and tracking).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 mt-0.5 text-[#C9A24D]" />
                      <div>
                        <div className="font-medium text-white">
                          6) Cross-team synergy (HR, ops, IT, sales)
                        </div>
                        <p className="mt-2 text-sm text-white/75">
                          Growth became a coordination exercise: defining roles,
                          expectations, and accountability across people and
                          systems - so performance didn’t depend on heroics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Outcome */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Outcome
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  From parallel activity to coordinated growth
                </h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  The organization moved toward a coordinated operating model:
                  clearer lead flow, stronger accountability, improved
                  utilization of marketing efforts, and a more consistent
                  customer experience - enabling growth to be supported by
                  architecture rather than ad hoc effort.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Better utilization</Badge>
                  <Badge>Structured follow-up</Badge>
                  <Badge>Visible accountability</Badge>
                  <Badge>QC routines</Badge>
                  <Badge>Launch readiness</Badge>
                  <Badge>Cross-team alignment</Badge>
                </div>
              </Card>

              {/* Why this mattered */}
              <Card className="p-7">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  Why this mattered
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Sustainable growth comes from architecture
                </h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  In service platforms, growth is limited by coordination:
                  response, follow-up, quality, handovers, and internal
                  visibility. Aligning marketing, sales, operations, IT, and
                  human capital into a shared system makes growth predictable
                  and repeatable.
                </p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  This case study is intentionally framed around the operating
                  model and thinking approach - because that’s what transfers
                  across industries and scales with complexity.
                </p>
              </Card>
            </div>

            {/* RIGHT: Sidebar */}
            <aside className="w-full lg:w-[360px] xl:w-[380px] space-y-4 lg:sticky lg:top-24">
              <Card className="p-6">
                <div className="text-sm font-medium">Executive summary</div>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  The organization had most growth components already in place -
                  campaigns, people, platforms, partners - but they were not
                  operating as one connected system. My work focused on
                  orchestration: aligning workflows, accountability, quality
                  control, and launch readiness so growth efforts could be
                  utilized reliably.
                </p>

                <div className="mt-5 grid gap-2">
                  <Button
                    href={`mailto:${email}?subject=Case%20Study%20Enquiry%20—%20Growth%20Strategy%20%2F%20Operating%20Model`}
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
                <div className="text-sm font-medium">What this proves</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li className="flex gap-2">
                    <Layers className="h-4 w-4 mt-0.5 text-[#C9A24D]" />
                    Systems thinking applied in a real organization
                  </li>
                  <li className="flex gap-2">
                    <Target className="h-4 w-4 mt-0.5 text-[#C9A24D]" />
                    Campaign utilization through operational readiness
                  </li>
                  <li className="flex gap-2">
                    <Workflow className="h-4 w-4 mt-0.5 text-[#C9A24D]" />
                    CRM-like accountability without stack disruption
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-[#C9A24D]" />
                    QC + process discipline for long-term reliability
                  </li>
                  <li className="flex gap-2">
                    <Users className="h-4 w-4 mt-0.5 text-[#C9A24D]" />
                    Cross-functional leadership (marketing, ops, IT)
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="text-sm font-medium">Engage</div>
                <p className="mt-2 text-sm text-white/75">
                  If you need a growth strategy that aligns teams, workflows,
                  and systems into a coordinated engine:
                </p>

                <div className="mt-4 grid gap-2">
                  <Button
                    href={`mailto:${email}?subject=Enquiry%20—%20Growth%20Strategy%20%2F%20Systems%20Design`}
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
                <div className="text-sm font-medium">Next case studies</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li>• Digital distribution & monetization system for a creator</li>
                  <li>• Building a VR demo from zero (learning + shipping)</li>
                </ul>
              </Card>

              {/* Disclaimer */}
              <Card className="p-6">
                <div className="text-sm font-medium">Disclaimer & Context</div>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  This case study is presented for portfolio and professional
                  reference purposes only. It reflects my work approach,
                  systems thinking, and execution methodology while working as a
                  full-time team member within a larger organization.
                </p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  Company identity, internal data, and proprietary processes are
                  intentionally anonymized. This page does not imply ownership,
                  endorsement, or ongoing affiliation.
                </p>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  The purpose of this case study is to demonstrate how I think
                  and how I structure growth strategy - not to disclose or claim
                  the organization’s intellectual property.
                </p>
              </Card>
            </aside>
          </div>

          {/* ✅ Lightbox overlay */}
          {lightboxSrc ? (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Image preview"
              onClick={() => setLightboxSrc(null)}
            >
              <div
                className="relative max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0F1322] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightboxSrc(null)}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
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

          <footer className="pt-12 pb-10 text-sm text-white/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>© {new Date().getFullYear()} Hasitha Jayathilaka</div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="/"
                >
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
