import Image from "next/image";

const heroImages = [
  { src: "/night1.jpg", alt: "Traffic and the Los Angeles skyline at night" },
  { src: "/night2.jpg", alt: "A Prague tram passing in a long exposure" },
  { src: "/night3.jpg", alt: "Light trails leading into a city at night" },
  { src: "/night4.jpg", alt: "The illuminated Atlanta skyline at night" },
  { src: "/night5.jpg", alt: "San Francisco skyline at blue hour" },
  { src: "/night6.jpg", alt: "Traffic light trails through a city at night" },
];

export default function HeroImages() {
  return (
    <div className="hero-img-wrapper absolute top-1/2 left-1/2 z-10 aspect-4/5 w-[60%] max-w-62.5 transform-[translate(-50%,-50%)] overflow-hidden md:w-[20%]">
      {heroImages.map(({ src, alt }) => (
        <div
          className="hero-img absolute top-1/2 left-1/2 h-full w-full transform-[translate(-50%,-50%)] [clip-path:polygon(50%_50%,50%_50%,50%_50%,50%_50%)] will-change-[clip-path]"
          key={src}
        >
          <Image
            width={1920}
            height={1080}
            src={src}
            alt={alt}
            className="h-full w-full transform-[scale(2)] object-cover will-change-transform"
          />
        </div>
      ))}
    </div>
  );
}
