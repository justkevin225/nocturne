import HeroCopy from "@/src/components/hero-copy";
import HeroImages from "@/src/components/hero-images";
import HeroMarquee from "@/src/components/hero-marquee";
import IntroOverlay from "@/src/components/intro-overlay";

export default function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      <HeroMarquee />
      <HeroCopy />
      <IntroOverlay />
      <HeroImages />
    </section>
  );
}
