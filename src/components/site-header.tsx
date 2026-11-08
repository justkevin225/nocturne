import Image from "next/image";

export default function SiteHeader() {
  return (
    <header>
      <div className="overflow-hidden pointer-events-none absolute top-8 left-1/2 z-1 h-10 w-10 -translate-x-1/2 md:top-12">
        <Image
          fill
          sizes="40px"
          src="/logo.svg"
          alt=""
          className="object-contain line"
        />
      </div>
    </header>
  );
}
