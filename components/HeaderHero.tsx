import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

const THEME = {
  panel: "rgba(255,255,255,0.05)",
  panelStrong: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.10)",
  border2: "rgba(255,255,255,0.16)",
  text: "#FFFFFF",
  muted: "rgba(255,255,255,0.78)",
  muted2: "rgba(255,255,255,0.62)",
  gold: "var(--brand-gold)",
  goldHover: "var(--brand-gold-hover)",
};

export default function HeaderHero() {
  return (
    <div style={{ color: THEME.text }}>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div
          className="rounded-3xl border overflow-hidden"
          style={{
            borderColor: THEME.border,
            background: THEME.panel,
            boxShadow: "0 26px 90px rgba(0,0,0,0.75)",
          }}
        >
          <div
            className="h-1.5"
            style={{
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.0), rgba(212,175,55,0.95), rgba(240,199,94,0.95), rgba(212,175,55,0.0))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                style={{
                  borderColor: THEME.border,
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Sparkles className="h-4 w-4" style={{ color: THEME.gold as any }} />
                Fractional CMO / CGO • Culture-Tech Ambassador • Story Systems
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
                Hasitha Supun Jayathilaka
              </h1>

              <p className="mt-4 text-lg leading-relaxed max-w-xl" style={{ color: THEME.muted }}>
                I help founders, brands, and institutions build{" "}
                <span style={{ color: THEME.text, fontWeight: 700 }}>global relevance</span>{" "}
                through narrative, heritage, and technology - and I lead growth systems
                that move from{" "}
                <span style={{ color: THEME.text, fontWeight: 700 }}>
                  clarity → traction → scale
                </span>
                .
              </p>

              <p className="mt-3 text-sm max-w-xl" style={{ color: THEME.muted2 }}>
                Currently building <span style={{ color: THEME.text }}>The Archivist</span> (VR-led
                cultural IP) and developing creator platforms and licensing pathways that bridge
                art, history, and modern distribution.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Founder & Venture Builder",
                  "CMO/CGO Growth Leadership",
                  "Research-driven Cultural Storytelling",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                    style={{
                      borderColor: THEME.border,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <BadgeCheck className="h-4 w-4" style={{ color: THEME.gold as any }} /> {t}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.52)" }}>
                  Ideal opportunities
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Culture-tech & tourism partnerships",
                    "Investor / sponsor demos (XR/VR)",
                    "Speaking: innovation • storytelling • gamification",
                    "Fractional CMO/CGO leadership for growth",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-4 py-2 text-sm"
                      style={{
                        borderColor: THEME.border,
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.52)" }}>
                  Companies
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {[
                    { name: "Yellow House", src: "/logos/yellow-house.png" },
                    { name: "Linseed", src: "/logos/linseed.png" },
                    { name: "ROI Firm", src: "/logos/roi-firm.png" },
                  ].map((l) => (
                    <div
                      key={l.name}
                      className="group flex items-center gap-3 rounded-2xl border px-4 py-3"
                      style={{
                        borderColor: THEME.border,
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      <div
                        className="h-9 w-9 rounded-xl overflow-hidden flex items-center justify-center border"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: THEME.border,
                        }}
                      >
                        <Image
                          src={l.src}
                          alt={l.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-medium">{l.name}</div>
                        <div className="text-xs" style={{ color: "rgba(255,255,255,0.56)" }}>
                          Brand / Studio
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl px-5 py-3 font-semibold shadow transition"
                  style={{ background: THEME.gold as any, color: "#050505" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = THEME.goldHover as any)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = THEME.gold as any)}
                >
                  View missions
                </button>

                <button
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-2xl px-5 py-3 font-semibold border transition"
                  style={{
                    borderColor: THEME.border2,
                    background: "rgba(255,255,255,0.04)",
                    color: THEME.text,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
                  }
                >
                  Contact
                </button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div
                  className="absolute -inset-6 rounded-[2rem] blur-2xl"
                  style={{
                    background:
                      "radial-gradient(600px 420px at 60% 40%, rgba(212,175,55,0.26), rgba(0,0,0,0) 70%)",
                  }}
                />

                <div
                  className="relative rounded-[2rem] border overflow-hidden"
                  style={{
                    borderColor: THEME.border,
                    background: THEME.panelStrong,
                    boxShadow: "0 22px 70px rgba(0,0,0,0.75)",
                  }}
                >
                  <div className="aspect-[4/5] w-full relative">
                    <Image
                      src="/portrait.jpg"
                      alt="Hasitha Supun Jayathilaka"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="border-t px-5 py-4"
                    style={{
                      borderColor: THEME.border,
                      background: "rgba(0,0,0,0.55)",
                    }}
                  >
                    <div className="text-sm font-semibold">
                      Fractional CMO / CGO • Culture-Tech
                    </div>
                    <div className="text-xs" style={{ color: THEME.muted2 }}>
                      Narrative architecture • Distribution systems • Partnerships
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: THEME.border,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: THEME.gold as any }} />
                    Based in Sri Lanka • working globally (remote)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
