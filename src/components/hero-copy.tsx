export default function HeroCopy() {
  return (
    <div className="hero-copy absolute bottom-[15svh] left-1/2 z-0 flex w-[85%] transform-[translateX(-50%)] flex-col items-center gap-6 text-center md:w-[35%]">
      <p className="text-[1.1rem] font-[450] tracking-[-0.01em]">
        An imagined archive of cities after dark, shaped by passing lights and
        long exposures.
      </p>
      <div>
        <p className="hero-callout w-max transform-[translateY(100%)] border-2 border-[#0f0f0f] px-6 py-2 text-[1.1rem] font-[450] tracking-[-0.01em] uppercase opacity-0 will-change-[transform,opacity]">
          Volume 01 / Night Studies
        </p>
      </div>
    </div>
  );
}
