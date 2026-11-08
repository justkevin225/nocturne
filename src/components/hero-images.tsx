import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="hero-img-wrapper">
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night1.jpg"
          alt="Traffic and the Los Angeles skyline at night"
        />
      </div>
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night2.jpg"
          alt="A Prague tram passing in a long exposure"
        />
      </div>
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night3.jpg"
          alt="Light trails leading into a city at night"
        />
      </div>
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night4.jpg"
          alt="The illuminated Atlanta skyline at night"
        />
      </div>
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night5.jpg"
          alt="San Francisco skyline at blue hour"
        />
      </div>
      <div className="hero-img">
        <Image
          width={1920}
          height={1080}
          src="/night6.jpg"
          alt="Traffic light trails through a city at night"
        />
      </div>
    </div>
  );
};

export default HeroImages;
