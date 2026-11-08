"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP, CustomEase, SplitText);
CustomEase.create("introHop", "0.8, 0, 0.02, 1");

const openClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
const closedClip = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

export default function IntroAnimations() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let active = true;
    document.fonts.ready.then(() => {
      if (active) setFontsReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useGSAP(
    () => {
      if (!fontsReady) return;

      const overlay = document.querySelector<HTMLElement>(".hero-overlay");
      const wrapper = document.querySelector<HTMLElement>(".hero-img-wrapper");
      const images = Array.from(
        document.querySelectorAll<HTMLElement>(".hero-img"),
      );
      const columns = overlay?.querySelectorAll<HTMLElement>(".digit-col");
      const track = document.querySelector<HTMLElement>(".marquee-track");
      const group = track?.querySelector<HTMLElement>(".marquee-group");

      if (
        !overlay ||
        !wrapper ||
        !track ||
        !group ||
        !columns ||
        columns.length !== 2 ||
        images.length !== 6
      ) {
        return;
      }

      const finalImagePosition = "translate(-50%, -75%) scale(1.3)";
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(images, { clipPath: openClip });
        gsap.set(overlay, { clipPath: closedClip });
        gsap.set(wrapper, { transform: finalImagePosition });
        gsap.set(".marquee-track h1", { y: 0 });
        gsap.set(".hero-callout", { y: 0, opacity: 1 });
        return;
      }

      const digitHeight = columns[0]
        .querySelector("span")
        ?.getBoundingClientRect().height;
      const groupWidth = group.getBoundingClientRect().width;
      if (!digitHeight || !groupWidth) return;

      SplitText.create(".hero-copy > p, footer p, header div .logo", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
      });

      const marqueeTween = gsap.to(track, {
        xPercent: -50,
        duration: groupWidth / 90,
        repeat: -1,
        ease: "none",
        paused: true,
      });

      const intro = gsap.timeline({ delay: 0.5 });

      images.forEach((image, index) => {
        intro.to(
          image,
          {
            clipPath: openClip,
            duration: 1.5,
            ease: "introHop",
          },
          index * 0.5,
        );
      });

      [27, 42, 68, 99].forEach((value, index) => {
        const at = 0.5 + index * 0.75;
        intro.to(
          columns[0],
          {
            y: -Math.floor(value / 10) * digitHeight,
            duration: 0.75,
            ease: "introHop",
          },
          at,
        );
        intro.to(
          columns[1],
          {
            y: -(value % 10) * digitHeight,
            duration: 0.75,
            ease: "introHop",
          },
          at,
        );
      });

      // The last image ends at 4s; the counter ends at 3.5s.
      intro.addLabel("unveil", 4);
      intro.to(
        overlay,
        {
          clipPath: closedClip,
          duration: 1.2,
          ease: "introHop",
        },
        "unveil",
      );
      intro.to(
        wrapper,
        {
          transform: finalImagePosition,
          duration: 1,
          ease: "introHop",
        },
        "unveil",
      );

      intro.addLabel("reveal", "unveil+=0.65");
      intro.call(() => marqueeTween.play(), undefined, "reveal");

      const reveal = { y: 0, duration: 1, ease: "introHop" };
      intro.to(".marquee-track h1", { ...reveal }, "reveal");
      intro.to("header img", { ...reveal }, "reveal+=0.125");
      intro.to(".hero-copy > p .line", { ...reveal }, "reveal+=0.25");
      intro.to(".hero-callout", { ...reveal, opacity: 1 }, "reveal+=0.375");
      intro.to("footer .line", { ...reveal }, "reveal+=0.5");

      const observer = new ResizeObserver(() => {
        const width = group.getBoundingClientRect().width;
        if (!width) return;
        const progress = marqueeTween.progress();
        marqueeTween.duration(width / 90).progress(progress);
      });
      observer.observe(group);

      return () => observer.disconnect();
    },
    { dependencies: [fontsReady], revertOnUpdate: true },
  );

  return null;
}
