import { Counter } from "@/src/components/counter";
import HeroImages from "@/src/components/hero-images";
import IntroAnimations from "@/src/components/intro-animations";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-item">
          <span className="nav-label">Archive</span>
        </div>

        <div className="nav-item">
          <div className="brand">
            <Image width={100} height={100} src="/logo.svg" alt="" />
            <span className="brand-name">Nocturne</span>
          </div>
        </div>

        <div className="nav-item">
          <span className="nav-label">Commission</span>
        </div>
      </nav>

      <section className="hero">
        <div className="marquee">
          <div className="marquee-track">
            <div className="marquee-group">
              <h1>After Dark</h1>
              <h1 aria-hidden="true">After Dark</h1>
              <h1 aria-hidden="true">After Dark</h1>
              <h1 aria-hidden="true">After Dark</h1>
              <h1 aria-hidden="true">After Dark</h1>
            </div>
            <div className="marquee-group" aria-hidden="true">
              <h1>After Dark</h1>
              <h1>After Dark</h1>
              <h1>After Dark</h1>
              <h1>After Dark</h1>
              <h1>After Dark</h1>
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <p>
            An imagined archive of cities after dark, shaped by passing lights
            and long exposures.
          </p>
          <div className="hero-callout">
            <p>Volume 01 / Night Studies</p>
          </div>
        </div>

        <Counter />

        <HeroImages />
      </section>

      <footer>
        <p>Nocturne &copy; 2026</p>
        <p>
          Designed and developed by{" "}
          <a
            href="https://kevinkouakou.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            KEV
          </a>
        </p>
      </footer>
      <IntroAnimations />
    </>
  );
}
