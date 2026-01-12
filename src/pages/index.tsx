import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  Layers,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Ventures", href: "#ventures" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const pills = [
  "Culture-Tech",
  "Game & XR",
  "Fractional CMO",
  "Product Strategy",
  "IP & Licensing",
  "Creator Economy",
];

const highlights = [
  { icon: Sparkles, title: "Build cultural IP", body: "Immersive worlds where art, history, and narrative become explorable experiences." },
  { icon: Layers, title: "Build platforms", body: "Licensing, creator monetization, and IP workflows for scalable digital ecosystems." },
  { icon: Users, title: "Scale ventures", body: "Positioning, go-to-market, and growth systems for early-stage and scaling teams." },
];

const services = [
  {
    icon: Briefcase,
    title: "Fractional CMO / Growth Lead",
    tags: ["Positioning", "GTM", "Content systems", "Partnerships"],
    body: "Senior marketing leadership without the full-time hire. Ideal for founders who need clarity, traction, and repeatable distribution.",
    outcomes: [
      "Sharper positioning & narrative",
      "Go-to-market plan + channel strategy",
      "Content & community engine",
      "Measurement + iteration cadence",
    ],
  },
  {
    icon: Sparkles,
    title: "Creative & Product Strategy",
    tags: ["IP design", "UX", "Monetization", "Roadmaps"],
    body: "Product vision and creative direction for games, XR, Web3, and interactive learning experiences.",
    outcomes: [
      "Product strategy & roadmap",
      "Experience flow + UX direction",
      "Narrative + world-building alignment",
      "Monetization & retention logic",
    ],
  },
  {
    icon: Building2,
    title: "Venture & IP Architecture",
    tags: ["Licensing", "Ecosystems", "Creator pipeline", "Institutional"],
    body: "Structuring IP ownership, licensing models, and collaboration pathways with institutions and creator networks.",
    outcomes: [
      "Licensing frameworks",
      "Creator onboarding & economics",
      "Partnership pitch assets",
      "Governance & delivery structure",
    ],
  },
];

const ventures = [
  {
    title: "Yellow House Productions",
    role: "Founder · Studio Lead",
    body: "Culture-tech game and VR studio building The Archivist — immersive reconstructions of real historical environments for entertainment, education, and cultural tourism.",
    href: "https://thearchivistgame.com/",
    cta: "Visit project",
  },
  {
    title: "Linseed",
    role: "Founder · Platform Architect",
    body: "Creator-licensing and asset economy platform enabling monetization, IP protection, and collaborative production pipelines for studios, artists, and institutions.",
    href: "#",
    cta: "See overview",
  },
  {
    title: "The ROI Firm",
    role: "Founder · Growth & Strategy",
    body: "Consulting and digital growth partner for 25+ businesses—helping teams build distribution, content systems, and measurable marketing impact.",
    href: "https://theroifirm.com/",
    cta: "Visit firm",
  },
];

const work = [
  {
    title: "The Archivist — VR World Reveal",
    type: "XR / Culture-Tech",
    body: "A working VR prototype showcasing reconstructed environments inspired by Arles (1888) — designed for investor demos and institutional collaboration.",
    chips: ["Unreal", "Quest", "World-building"],
    linkLabel: "Watch / view",
    href: "#",
  },
  {
    title: "Growth Systems for Multi-Industry Brands",
    type: "Fractional / Consulting",
    body: "Positioning, content engines, and conversion pathways delivered across hospitality, finance, media, and creator brands.",
    chips: ["Positioning", "Content", "Performance"],
    linkLabel: "See case style",
    href: "#",
  },
  {
    title: "Creator Licensing & IP Workflows",
    type: "Platform / IP",
    body: "Designing practical licensing models and creator pipelines that reduce friction and unlock monetization for assets and knowledge.",
    chips: ["Licensing", "Economics", "Governance"],
    linkLabel: "Explore",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

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

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5 shadow-sm", className)}>
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
  const solid = "bg-white text-black hover:bg-white/90";
  const outline = "border border-white/15 bg-transparent text-white hover:bg-white/10";
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
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-2", align === "center" && "text-center")}>
      {eyebrow ? (
        <div className="text-xs uppercase tracking-widest text-white/60">{eyebrow}</div>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      {desc ? <p className="text-white/70 max-w-2xl">{desc}</p> : null}
    </div>
  );
}

export default function Home() {
  const email = "youremail@example.com"; // <-- CHANGE THIS
  const linkedIn = "#"; // <-- CHANGE THIS

  return (
    <>
      <Head>
        <title>Hasitha Jayathilaka — Portfolio</title>
        <meta name="description" content="Founder · Culture-Tech Venture Architect · Fractional CMO" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Top nav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl border border-white/15 flex items-center justify-center">
                <Globe className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Hasitha Jayathilaka</div>
                <div className="text-xs text-white/60">Founder · Culture-Tech · Fractional CMO</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="hidden sm:inline-flex"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact
              </Button>
              <Button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
                Work with me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4">
          {/* Hero */}
          <section className="py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <motion.div
                className="md:col-span-7 space-y-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <div className="flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <Badge key={p}>{p}</Badge>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                  I build immersive cultural IP, creator platforms, and growth systems.
                </h1>

                <p className="text-white/70 text-lg max-w-2xl">
                  Founder of Yellow House Productions and The ROI Firm. Building <span className="text-white font-medium">The Archivist</span> (game +
                  VR-led cultural IP) and <span className="text-white font-medium">Linseed</span> (creator licensing & IP economy). Available for fractional
                  leadership and strategic roles.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}>
                    View work <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book a call
                  </Button>
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {highlights.map((h, i) => (
                    <motion.div key={h.title} custom={i} variants={fadeUp}>
                      <Card className="p-5">
                        <div className="flex items-center gap-2 font-medium">
                          <h.icon className="h-4 w-4" /> {h.title}
                        </div>
                        <div className="mt-2 text-sm text-white/70">{h.body}</div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <Card className="rounded-3xl overflow-hidden p-6 md:p-7">
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-widest text-white/60">Currently building</div>
                      <div className="text-lg font-semibold">The Archivist · Linseed</div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="space-y-3">
                      <div className="text-sm text-white/70">Ideal opportunities</div>
                      <div className="flex flex-wrap gap-2">
                        {["Fractional CMO", "Head of XR", "Product Strategy", "Partnerships", "Creative Tech"].map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="space-y-3">
                      <div className="text-sm font-medium">Fast links</div>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <a className="underline underline-offset-4 hover:text-white" href="https://thearchivistgame.com/" target="_blank" rel="noreferrer">
                          The Archivist
                        </a>
                        <a className="underline underline-offset-4 hover:text-white" href="https://theroifirm.com/" target="_blank" rel="noreferrer">
                          The ROI Firm
                        </a>
                        <a className="underline underline-offset-4 hover:text-white" href={linkedIn} target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    <Button href={`mailto:${email}?subject=Opportunity%20for%20Hasitha%20Jayathilaka`} className="w-full">
                      Reach out <Mail className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-white/60">
                      Tip: Replace this card with a short 30–45s showreel embed (YouTube/Vimeo) for stronger conversions.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Selected"
              title="Work that demonstrates scope"
              desc="A few examples that show how I blend strategy, story, and execution across culture-tech, platforms, and growth."
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {work.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Card className="p-6 h-full">
                    <div className="text-xs uppercase tracking-widest text-white/60">{w.type}</div>
                    <div className="mt-2 text-lg font-semibold">{w.title}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.chips.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white/70">{w.body}</p>
                    <a href={w.href} className="mt-5 inline-flex items-center text-sm underline underline-offset-4 hover:text-white">
                      {w.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section id="services" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Engagement"
              title="How I support teams"
              desc="Designed for founders, studios, and institutions that need senior leadership, clear strategy, and momentum."
            />

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <s.icon className="h-4 w-4" /> {s.title}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-white/70">{s.body}</p>

                    <div className="mt-5 text-sm">
                      <div className="font-medium mb-2">Typical outcomes</div>
                      <ul className="space-y-1 text-white/70 list-disc pl-5">
                        {s.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-5"
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Enquire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Ventures */}
          <section id="ventures" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Ventures"
              title="What I’m building"
              desc="A venture studio approach: build IP, build platforms, build distribution — then scale through partnerships."
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {ventures.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Card className="p-6 h-full">
                    <div className="text-lg font-semibold">{v.title}</div>
                    <div className="mt-1 text-sm text-white/70">{v.role}</div>
                    <p className="mt-4 text-sm text-white/70">{v.body}</p>
                    <a
                      href={v.href}
                      target={v.href.startsWith("http") ? "_blank" : undefined}
                      rel={v.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-5 inline-flex items-center text-sm underline underline-offset-4 hover:text-white"
                    >
                      {v.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="py-14 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <SectionTitle
                  eyebrow="About"
                  title="Founder with a systems + story mindset"
                  desc="I bridge creative direction with business execution — turning cultural research, partnerships, and technology into real products."
                />
              </div>
              <div className="md:col-span-7">
                <Card className="p-6 md:p-7">
                  <div className="space-y-4 text-sm text-white/70">
                    <p>
                      My work spans game development, VR, marketing, and venture building — with a focus on projects where culture, narrative, and product must align.
                      I’ve supported 25+ businesses through growth strategy, and I’m currently building a research-driven cultural IP ecosystem around immersive worlds,
                      creator pipelines, and licensing.
                    </p>
                    <p>
                      Alongside the ventures, I’m developing the <span className="text-white font-medium">Yellow House Reference Library</span> (2,000+ books) as part of
                      a research center designed to empower innovators and change-makers.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {["Institutional collaboration", "Product + growth strategy", "Immersive storytelling"].map((k) => (
                        <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white">
                          <div className="text-xs uppercase tracking-widest text-white/60">Focus</div>
                          <div className="font-medium mt-1">{k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-14 md:py-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-3">
                  <SectionTitle
                    eyebrow="Contact"
                    title="Let’s explore a fit"
                    desc="If you’re hiring for a senior role or want fractional leadership, I can help you move from narrative → traction → scale."
                  />
                  <div className="text-sm text-white/70 space-y-1">
                    <div>Email: <span className="text-white">{email}</span></div>
                    <div>Location: <span className="text-white">Sri Lanka (remote/global)</span></div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <Card className="p-6">
                    <div className="text-sm font-medium">Quick actions</div>
                    <div className="grid gap-2 mt-4">
                      <Button href={`mailto:${email}?subject=Opportunity%20for%20Hasitha%20Jayathilaka`} className="w-full">
                        Email me
                      </Button>
                      <Button variant="outline" href={linkedIn} target="_blank" rel="noreferrer" className="w-full">
                        LinkedIn
                      </Button>
                      <Button variant="outline" href="#" target="_blank" rel="noreferrer" className="w-full">
                        Download one-pager (add link)
                      </Button>
                    </div>
                    <p className="text-xs text-white/60 mt-4">
                      Optional: add Calendly and replace “Book a call” links with your scheduling URL.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-10 text-sm text-white/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Hasitha Jayathilaka</div>
              <div className="flex flex-wrap gap-4">
                <a className="underline underline-offset-4 hover:text-white" href="#work">Work</a>
                <a className="underline underline-offset-4 hover:text-white" href="#services">Services</a>
                <a className="underline underline-offset-4 hover:text-white" href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
