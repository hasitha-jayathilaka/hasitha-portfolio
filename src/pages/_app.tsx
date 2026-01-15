import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[color:var(--foreground)]">
      {/* Global spotlight/vignette so every page looks like the hero */}
      <div
        className="min-h-screen"
        style={{
          background:
            "radial-gradient(1200px 700px at 20% -10%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(900px 600px at 90% 0%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(900px 700px at 50% 110%, rgba(0,0,0,0.75), rgba(0,0,0,0) 55%), var(--background)",
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
