const footerTextClassName =
  "text-[0.85rem] font-[450] tracking-[-0.01em] md:text-[1.1rem]";

export default function SiteFooter() {
  return (
    <footer className="absolute bottom-0 left-0 z-20 flex w-full items-end justify-between gap-6 p-8 md:p-12">
      <p className={footerTextClassName}>KODE IS FUN &copy; 2026</p>
      <p className={`${footerTextClassName} text-right`}>
        by{" "}
        <a
          href="https://kevinkouakou.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative whitespace-nowrap after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-250 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
        >
          KEV
        </a>
      </p>
    </footer>
  );
}
