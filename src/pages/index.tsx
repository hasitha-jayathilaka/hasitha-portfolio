// src/pages/index.tsx
import HeaderHero from "../../components/HeaderHero";
import React from "react";
import Head from "next/head";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Briefcase, Building2, Globe, Sparkles } from "lucide-react";
import EnquiryModal from "../../components/EnquiryModal";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Ventures", href: "#ventures" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Briefcase,
    title: "Fractional CMO / Growth Lead",
    tags: ["Positioning", "GTM", "Content systems", "Partnerships"],
    body: "Senior growth leadership without the full-time hire. Ideal for founders and teams who need clarity, traction, and repeatable distribution.",
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
    body: "Product vision and creative direction for games, XR, Web3, and interactive learning experiences where story and systems must align.",
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
    body: "Structuring IP ownership, licensing models, and collaboration pathways with institutions, studios, and creator networks.",
    outcomes: [
      "Licensing frameworks",
      "Creator onboarding & economics",
      "Partnership pitch assets",
      "Governance & delivery structure",
    ],
  },
];

type EducationItem = {
  title: string;
  institution: string;
  status?: string;
  logos?: string[];
};

const academicEducation: EducationItem[] = [
  {
    title: "BA (Hons) Motion Graphics and Animation",
    institution:
      "Academy of Design, Sri Lanka (AOD), affiliated awarding partner Northumbria University",
    status: "Currently following",
    logos: ["/logos/aod-logo.png", "/logos/northumbria-logo.png"],
  },
  {
    title: "Diploma in Translation and Interpretation",
    institution: "University of Kelaniya",
    logos: ["/logos/kelaniya-logo.png"],
  },
];

type WipoItem = {
  title: string;
  meta: string;
  logos?: string[];
};

const wipoCertifications: WipoItem[] = [
  {
    title:
      "WIPO Mediation and Arbitration Workshop for Intellectual Property and Technology Disputes",
    meta: "June 2 to 4, 2026, Online",
    logos: ["/logos/wipo-logo.png", "/logos/wipo-adr-logo.png"],
  },
  {
    title: "Specialized Course on Intellectual Property and Sports Entrepreneurship",
    meta: "July 2026",
    logos: ["/logos/wipo-logo.png", "/logos/itc-logo.png"],
  },
  {
    title: "IP Panorama 2.0",
    meta: "April 2026, with KIPA",
    logos: ["/logos/wipo-logo.png", "/logos/kipa-logo.png"],
  },
  {
    title: "WIPO Scale Up Your IP Program for Deep-Tech Ventures",
    meta: "2025, representing Yellow House Productions",
    logos: ["/logos/wipo-logo.png"],
  },
  {
    title: "WIPO IPMC, Advertising",
    meta: "2026, representing Yellow House Productions",
    logos: ["/logos/wipo-logo.png"],
  },
  {
    title: "WIPO x ITU IPMC Workshop: From AI Innovation to Strategic IP Management",
    meta: "2026, representing Linseed",
    logos: ["/logos/wipo-logo.png", "/logos/itu-logo.png"],
  },
];

type PublicationItem = {
  title: string;
  meta: string;
  href: string;
  logo: string;
};

const publications: PublicationItem[] = [
  {
    title:
      "Playing Against Forgetting: Digital Archiving of Sri Lanka's Traditional Games as Living Cultural Heritage",
    meta: "ITRA Book of Abstracts 2026, page 53",
    href: "https://static1.squarespace.com/static/67e5af988387dd1d93802b38/t/6a62af5c18b11516d9c17be1/1784852318058/Book_of_Abstracts_ITRA_2026.pdf",
    logo: "/logos/itra-logo.png",
  },
];

type PressItem = {
  outlet: string;
  logo: string;
  href: string;
};

const pressFeatures: PressItem[] = [
  {
    outlet: "Daily News",
    logo: "/logos/daily-news-logo.png",
    href: "https://dailynews.lk/2026/07/02/features/1019450/reimagining-heritage-in-the-digital-age/",
  },
  {
    outlet: "Daily Mirror",
    logo: "/logos/daily-mirror-logo.png",
    href: "https://www.dailymirror.lk/print/business-news/Yellow-House-Productions-unveils-HELIXRA/273-345956",
  },
  {
    outlet: "Ada Derana",
    logo: "/logos/ada-derana-logo.png",
    href: "https://bizenglish.adaderana.lk/yellow-house-partners-with-nanotek-to-advance-sri-lankas-culture-tech-sector/",
  },
  {
    outlet: "Ceylon Today",
    logo: "/logos/ceylon-today-logo.png",
    href: "/press/ceylon-today-antarctica-2013.pdf",
  },
];

type Venture = {
  title: string;
  role: string;
  body: string;
  href?: string;
  cta?: string;
};

const ventures: Venture[] = [
  {
    title: "Yellow House Productions",
    role: "Founder · Studio Lead",
    body: "Culture-tech game and VR studio building The Archivist - immersive reconstructions of real historical environments for entertainment, education, and cultural tourism.",
    href: "https://thearchivistgame.art/",
    cta: "Visit project",
  },
  {
    title: "Linseed",
    role: "Founder · Platform Architect",
    body: "Creator-licensing and asset economy platform enabling monetization, IP protection, and collaborative production pipelines for studios, artists, and institutions.",
  },
  {
    title: "The ROI Firm",
    role: "Founder · Growth & Strategy",
    body: "Consulting and digital growth partner for 25+ businesses - helping teams build distribution, content systems, and measurable marketing impact.",
    href: "https://theroifirm.com/",
    cta: "Visit firm",
  },
];

type WorkItem = {
  title: string;
  type: string;
  body: string;
  chips: string[];
  linkLabel?: string;
  href?: string;
};

const work: WorkItem[] = [
  {
    title: "The Archivist - VR World Reveal",
    type: "XR / Culture-Tech",
    body: "A working VR prototype showcasing reconstructed environments inspired by Arles (1888) - designed for investor demos and institutional collaboration.",
    chips: ["Unreal", "Quest", "World-building"],
    linkLabel: "Watch / view",
    href: "https://youtu.be/kFBZ_071SHU",
  },
  {
    title: "Growth Systems for Multi-Industry Brands",
    type: "Fractional / Consulting",
    body: "Positioning, content engines, and conversion pathways delivered across hospitality, finance, media, and creator brands.",
    chips: ["Positioning", "Content", "Performance"],
    linkLabel: "See case studies",
    href: "/case-studies",
  },
  {
    title: "Creator Licensing & IP Workflows",
    type: "Platform / IP",
    body: "Designing practical licensing models and creator pipelines that reduce friction and unlock monetization for assets and knowledge.",
    chips: ["Licensing", "Economics", "Governance"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-xs text-[color:var(--muted-2)]">
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
        "rounded-2xl border border-[var(--border)] bg-[var(--surface-1)]",
        className
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
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
  download,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-colors";
  const solid =
    "text-black shadow-sm hover:opacity-95";
  const outline =
    "border border-[var(--border-strong)] bg-transparent text-[color:var(--foreground)] hover:bg-[var(--surface-2)]";
  const cls = cn(base, variant === "solid" ? solid : outline, className);

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={target}
        rel={rel}
        {...(download ? { download: true } : {})}
        style={
          variant === "solid"
            ? { background: "var(--brand-gold)" }
            : undefined
        }
        onMouseEnter={(e) => {
          if (variant === "solid") e.currentTarget.style.background = "var(--brand-gold-hover)";
        }}
        onMouseLeave={(e) => {
          if (variant === "solid") e.currentTarget.style.background = "var(--brand-gold)";
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={cls}
      onClick={onClick}
      style={variant === "solid" ? { background: "var(--brand-gold)" } : undefined}
      onMouseEnter={(e) => {
        if (variant === "solid") e.currentTarget.style.background = "var(--brand-gold-hover)";
      }}
      onMouseLeave={(e) => {
        if (variant === "solid") e.currentTarget.style.background = "var(--brand-gold)";
      }}
    >
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
        <div className="text-xs uppercase tracking-widest text-[color:var(--muted-3)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--foreground)]">
        {title}
      </h2>
      {desc ? (
        <p className="text-[color:var(--muted)] max-w-2xl">{desc}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const email = "hasitha@theroifirm.com";
  const linkedIn = "https://www.linkedin.com/in/hsjayathilaka/";
  const calendly =
    "https://calendly.com/hasitha-theroifirm/intro-call-hasitha-jayathilaka";

  const twoPagerUrl = "/two-pager.pdf";

  const [enquiryOpen, setEnquiryOpen] = React.useState(false);
  const [enquiryDefault, setEnquiryDefault] = React.useState<
    | "Fractional CMO / Growth Lead"
    | "Creative & Product Strategy"
    | "Venture & IP Architecture"
    | "Other"
  >("Fractional CMO / Growth Lead");

  function openEnquiry(type: typeof enquiryDefault) {
    setEnquiryDefault(type);
    setEnquiryOpen(true);
  }

  return (
    <>
      <Head>
        <title>Hasitha Jayathilaka - Culture-Tech Founder / Fractional CMO</title>
        <meta
          name="description"
          content="Culture-Tech Founder · Fractional CMO/CGO · Founder building The Archivist and Linseed."
        />
      </Head>

      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Sticky Top Nav */}
        <header
          className="sticky top-0 z-50 border-b border-[var(--border)] backdrop-blur"
          style={{
            background: "rgba(5,5,5,0.72)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] flex items-center justify-center">
                <Globe className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Hasitha Jayathilaka</div>
                <div className="text-xs text-[color:var(--muted-2)]">
                  Culture-Tech Founder · Fractional CMO/CGO
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-[color:var(--muted-2)] hover:text-[color:var(--foreground)] transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button onClick={() => openEnquiry("Fractional CMO / Growth Lead")}>
                Work with me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <HeaderHero />

        {/* Enquiry Modal */}
        <EnquiryModal
          open={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          defaultType={enquiryDefault}
        />

        <main className="mx-auto max-w-6xl px-4">
          {/* Work */}
          <section id="work" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Selected"
              title="Missions that demonstrate scope"
              desc="Examples that show how I blend strategy, story, and execution across culture-tech, platforms, and growth."
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
                    <div className="text-xs uppercase tracking-widest text-[color:var(--muted-3)]">
                      {w.type}
                    </div>
                    <div className="mt-2 text-lg font-semibold">{w.title}</div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.chips.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-[color:var(--muted)]">{w.body}</p>

                    {w.linkLabel && w.href ? (
                      <a
                        href={w.href}
                        target={w.href.startsWith("http") ? "_blank" : undefined}
                        rel={w.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-5 inline-flex items-center text-sm underline underline-offset-4 hover:text-[color:var(--foreground)]"
                      >
                        {w.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
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
                      <s.icon className="h-4 w-4" style={{ color: "var(--brand-gold)" }} />{" "}
                      {s.title}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-[color:var(--muted)]">{s.body}</p>

                    <div className="mt-5 text-sm">
                      <div className="font-semibold mb-2">Typical outcomes</div>
                      <ul className="space-y-1 text-[color:var(--muted)] list-disc pl-5">
                        {s.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-5"
                      onClick={() => {
                        const t =
                          s.title.includes("Fractional")
                            ? "Fractional CMO / Growth Lead"
                            : s.title.includes("Creative")
                            ? "Creative & Product Strategy"
                            : "Venture & IP Architecture";
                        openEnquiry(t);
                      }}
                    >
                      Enquire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Behind the work"
              title="A life shaped by culture, technology & leadership"
              desc="A visual narrative - from public storytelling and cultural immersion to field research, disciplined practice, community leadership, venture building, and global engagement."
            />

            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                {
                  img: "01.jpg",
                  title: "Tech Podcast Guest Interview",
                  caption:
                    "Sharing ideas on culture-tech, storytelling, and building real products.",
                },
                {
                  img: "02.jpg",
                  title: "Immersion in Contemporary Art",
                  caption:
                    "Learning from Sri Lanka’s art scene to inform authentic digital world-building.",
                },
                {
                  img: "03.jpg",
                  title: "Field Research: Pre-Brahmi Inscriptions (3rd c. BCE)",
                  caption:
                    "Hands-on documentation work from an archaeological heritage site (as society secretary).",
                },
                {
                  img: "04.jpg",
                  title: "Cultural Exchange & Diplomacy",
                  caption:
                    "Gifting indigenous Veddah bows - heritage as living dialogue.",
                },
                {
                  img: "05.jpg",
                  title: "Kyudo Demonstration",
                  caption:
                    "Precision, calm, and ritual - values I carry into leadership.",
                },
                {
                  img: "06.jpg",
                  title: "Founder: Green Knights Beach Clean-Up",
                  caption:
                    "Mobilizing volunteers for environmental impact through community-led action.",
                },
                {
                  img: "07.jpg",
                  title: "Product Launch: Per-Day Motor Insurance App",
                  caption:
                    "Led marketing and growth for a product that changed how insurance was accessed.",
                },
                {
                  img: "08.jpg",
                  title: "Yellow House Team at Infotel 2025",
                  caption:
                    "Presenting immersive tech and cultural R&D on a national stage.",
                },
                {
                  img: "09.jpg",
                  title: "International Antarctica Expedition (2013)",
                  caption:
                    "Climate leadership perspective that shapes my work today.",
                },
                {
                  img: "10.jpg",
                  title: "Keynote: Digital News Platform Launch",
                  caption:
                    "Speaking at the intersection of media, technology, and public narrative.",
                },
              ].map((item) => (
                <div
                  key={item.img}
                  className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-1)]"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <img
                    src={`/gallery/${item.img}`}
                    alt={`${item.title} - ${item.caption}`}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <div className="text-xs font-semibold text-[color:var(--foreground)]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-[color:var(--muted-2)] leading-snug">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ventures */}
          <section id="ventures" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Ventures"
              title="What I’m building"
              desc="A venture studio approach: build IP, build platforms, build distribution - then scale through partnerships."
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
                    <div className="mt-1 text-sm text-[color:var(--muted-2)]">{v.role}</div>
                    <p className="mt-4 text-sm text-[color:var(--muted)]">{v.body}</p>

                    {v.href && v.cta ? (
                      <a
                        href={v.href}
                        target={v.href.startsWith("http") ? "_blank" : undefined}
                        rel={v.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-5 inline-flex items-center text-sm underline underline-offset-4 hover:text-[color:var(--foreground)]"
                      >
                        {v.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
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
                  title="A systems + story founder"
                  desc="I bridge cultural research, creative direction, and business execution - turning narrative into distribution and distribution into durable brand equity."
                />
              </div>
              <div className="md:col-span-7">
                <Card className="p-6 md:p-7">
                  <div className="space-y-4 text-sm text-[color:var(--muted)]">
                    <p>
                      My work spans game development, VR, marketing, and venture building -
                      with a focus on projects where culture, narrative, and product must align.
                      I’ve supported 25+ businesses through growth strategy, and I’m currently
                      building a research-driven cultural IP ecosystem around immersive worlds,
                      creator pipelines, and licensing.
                    </p>
                    <p>
                      Alongside the ventures, I’m developing the{" "}
                      <span className="text-[color:var(--foreground)] font-semibold">
                        Yellow House Reference Library
                      </span>{" "}
                      (2,000+ books) as part of a research center designed to empower innovators
                      and change-makers.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {[
                        "Institutional collaboration",
                        "Product + growth strategy",
                        "Immersive storytelling",
                      ].map((k) => (
                        <div
                          key={k}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-3"
                          style={{ boxShadow: "var(--shadow-card)" }}
                        >
                          <div className="text-xs uppercase tracking-widest text-[color:var(--muted-3)]">
                            Focus
                          </div>
                          <div className="font-semibold mt-1">{k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Education & Credentials */}
          <section id="education" className="py-14 md:py-20">
            <SectionTitle
              eyebrow="Education & Credentials"
              title="Academic background, training, and published work"
              desc="Formal education, institutional training, and the frameworks and papers that come out of the work."
            />

            <div className="mt-8 space-y-10">
              <div>
                <div className="text-sm font-semibold text-[color:var(--foreground)] mb-4">
                  Academic Education
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {academicEducation.map((item) => (
                    <Card key={item.title} className="p-6">
                      {item.status ? (
                        <div className="text-xs uppercase tracking-widest text-[color:var(--muted-3)] mb-2">
                          {item.status}
                        </div>
                      ) : null}
                      <div className="text-lg font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm text-[color:var(--muted-2)]">
                        {item.institution}
                      </div>
                      {item.logos ? (
                        <div className="mt-4 flex items-center gap-4">
                          {item.logos.map((logo) => (
                            <img
                              key={logo}
                              src={logo}
                              alt=""
                              className="h-10 w-auto object-contain opacity-90"
                            />
                          ))}
                        </div>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-[color:var(--foreground)] mb-4">
                  ARRA Framework
                </div>
                <Card className="p-6">
                  <div className="text-lg font-semibold">Founder, ARRA Framework</div>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    A personal framework developed from 2012 to 2026, published openly
                    and used as the ethical foundation across the ventures.
                  </p>
                  <a
                    href="https://arraframework.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center text-sm underline underline-offset-4 hover:text-[color:var(--foreground)]"
                  >
                    Visit arraframework.org <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Card>
              </div>

              <div>
                <div className="text-sm font-semibold text-[color:var(--foreground)] mb-4">
                  WIPO Training and Certifications
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {wipoCertifications.map((item) => (
                    <Card key={item.title} className="p-6">
                      <div className="text-base font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm text-[color:var(--muted-2)]">
                        {item.meta}
                      </div>
                      {item.logos ? (
                        <div className="mt-4 flex items-center gap-4">
                          {item.logos.map((logo) => (
                            <img
                              key={logo}
                              src={logo}
                              alt=""
                              className="h-10 w-auto object-contain opacity-90"
                            />
                          ))}
                        </div>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-[color:var(--foreground)] mb-4">
                  Papers Published
                </div>
                <div className="grid grid-cols-1 gap-5">
                  {publications.map((item) => (
                    <Card key={item.title} className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={item.logo}
                          alt=""
                          className="h-10 w-auto object-contain opacity-90 mt-1"
                        />
                        <div>
                          <div className="text-base font-semibold">{item.title}</div>
                          <div className="mt-1 text-sm text-[color:var(--muted-2)]">
                            {item.meta}
                          </div>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center text-sm underline underline-offset-4 hover:text-[color:var(--foreground)]"
                          >
                            Read the paper <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-[color:var(--foreground)] mb-4">
                  Press and Media Features
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {pressFeatures.map((item) => (
                    <a key={item.outlet} href={item.href} target="_blank" rel="noreferrer" className="group">
                      <Card className="p-5 h-full flex flex-col items-center justify-center text-center transition-colors group-hover:bg-[var(--surface-2)]">
                        <img
                          src={item.logo}
                          alt={item.outlet}
                          className="h-10 w-auto object-contain opacity-90"
                        />
                        <div className="mt-3 text-xs text-[color:var(--muted-2)]">
                          {item.outlet}
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-14 md:py-20">
            <div
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-1)] p-7 md:p-10"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-3">
                  <SectionTitle
                    eyebrow="Contact"
                    title="Let’s explore a fit"
                    desc="If you’re hiring for a senior role or want fractional leadership, I can help you move from narrative → traction → scale."
                  />
                  <div className="text-sm text-[color:var(--muted)] space-y-1">
                    <div>
                      Email: <span className="text-[color:var(--foreground)]">{email}</span>
                    </div>
                    <div>
                      Location:{" "}
                      <span className="text-[color:var(--foreground)]">
                        Sri Lanka (remote/global)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <Card className="p-6">
                    <div className="text-sm font-semibold">Quick actions</div>
                    <div className="grid gap-2 mt-4">
                      <Button
                        href={`mailto:${email}?subject=Opportunity%20for%20Hasitha%20Jayathilaka`}
                        className="w-full"
                      >
                        Email me
                      </Button>

                      <Button
                        variant="outline"
                        href={linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        LinkedIn
                      </Button>

                      <Button variant="outline" href={twoPagerUrl} download className="w-full">
                        Download Two-Pager (PDF)
                      </Button>

                      <Button
                        variant="outline"
                        href={calendly}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        Book a call (Calendly)
                      </Button>
                    </div>

                    <p className="text-xs text-[color:var(--muted-2)] mt-4">
                      For service enquiries, you can also use the “Enquire” buttons above to send
                      a tagged message.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-10 text-sm text-[color:var(--muted-2)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Hasitha Jayathilaka</div>
              <div className="flex flex-wrap gap-4">
                <a className="underline underline-offset-4 hover:text-[color:var(--foreground)]" href="#work">
                  Work
                </a>
                <a className="underline underline-offset-4 hover:text-[color:var(--foreground)]" href="#services">
                  Services
                </a>
                <a className="underline underline-offset-4 hover:text-[color:var(--foreground)]" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
