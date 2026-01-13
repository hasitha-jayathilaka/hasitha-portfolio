import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

export default function HeaderHero() {
  return (
    <div className="bg-[#0B1026] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
          {/* Top accent */}
          <div className="h-1.5 bg-gradient-to-r from-[#F6C85F] via-[#8B5CF6] to-[#F6C85F]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 lg:p-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-[#F6C85F]" />
                Culture-Tech • Game & VR IP • Storytelling
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
                Hasitha Supun Jayathilaka
              </h1>

              <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-xl">
                Founder building <span className="text-white">The Archivist</span> - a VR-led
                cultural IP that reconstructs heritage environments. Also developing creator
                platforms and partnerships that bridge art, history, and technology.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-[#F6C85F]" /> Founder
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-[#F6C85F]" /> Digital Marketing • BD
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-[#F6C85F]" /> Research-driven creator
                </span>
              </div>

              <div className="mt-8">
                <p className="text-sm text-white/60 mb-3">Ideal opportunities</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Culture-tech & tourism partnerships",
                    "Investor / sponsor demos (VR)",
                    "Speaking: innovation • storytelling • gamification",
                    "Advisory: digital growth & product strategy",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm text-white/60 mb-3">Companies</p>

                <div className="flex flex-wrap items-center gap-4">
                  {[
                    { name: "Yellow House", src: "/logos/yellow-house.png" },
                    { name: "Linseed", src: "/logos/linseed.png" },
                    { name: "ROI Firm", src: "/logos/roi-firm.png" },
                  ].map((l) => (
                    <div
                      key={l.name}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
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
                        <div className="text-xs text-white/60">Brand / Studio</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-[#F6C85F] text-[#0B1026] px-5 py-3 font-medium shadow hover:opacity-95 transition">
                  View Work
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium hover:bg-white/10 transition">
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
                {/* Glow */}
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#8B5CF6]/30 via-[#F6C85F]/20 to-transparent blur-2xl" />

                {/* Portrait */}
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] w-full relative">
                    <Image
                      src="/portrait.jpg"
                      alt="Hasitha Supun Jayathilaka"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Caption strip */}
                  <div className="border-t border-white/10 bg-[#0B1026]/60 px-5 py-4">
                    <div className="text-sm font-medium">Founder • Culture-Tech</div>
                    <div className="text-xs text-white/60">
                      Game & VR IP • Creator Platforms
                    </div>
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
