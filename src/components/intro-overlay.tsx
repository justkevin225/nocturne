const digits = Array.from({ length: 10 }, (_, digit) => digit);

export default function IntroOverlay() {
  return (
    <div className="hero-overlay absolute inset-0 z-[2] bg-[#0f0f0f] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
      <div className="absolute bottom-[10svh] left-1/2 flex h-[1.65rem] transform-[translateX(-50%)] overflow-hidden">
        {[0, 1].map((column) => (
          <div className="digit-col flex flex-col" key={column}>
            {digits.map((digit) => (
              <span
                className="flex h-[1.65rem] shrink-0 items-center justify-center text-2xl font-[450] leading-none tracking-[-0.02em] text-white"
                key={digit}
              >
                {digit}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
