import Hero from "@/src/components/hero";
import IntroAnimations from "@/src/components/intro-animations";
import SiteFooter from "@/src/components/site-footer";
import SiteHeader from "@/src/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <SiteFooter />
      <IntroAnimations />
    </>
  );
}
