const headingClassName =
  "whitespace-nowrap pr-[0.5em] text-[clamp(6rem,12vw,14rem)] font-semibold leading-[1.25] tracking-[-0.01em] transform-[translateY(100%)] will-change-transform";

const groups = [0, 1];
const repetitions = [0, 1, 2, 3, 4];

export default function HeroMarquee() {
  return (
    <div className="pointer-events-none absolute top-[45%] left-0 z-0 w-full transform-[translateY(-75%)] overflow-hidden">
      <div className="marquee-track flex w-max will-change-transform">
        {groups.map((group) => (
          <div
            className={`${group === 0 ? "marquee-group " : ""}flex w-max flex-none`}
            aria-hidden={group === 1 ? true : undefined}
            key={group}
          >
            {repetitions.map((index) => (
              <h1
                className={headingClassName}
                aria-hidden={group > 0 || index > 0 ? true : undefined}
                key={index}
              >
                After Dark
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
