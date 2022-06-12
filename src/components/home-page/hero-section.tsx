import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section__container">
      <div className="hero-section__box">
        <h1 className="headingPrimary">
          Jsme koalicí nezávislých kandidátů, Zelených, KDU-ČSL a Pirátů
        </h1>
      </div>
      <div className="hero-section__image u-margin-top-big">
        <Image
          src="/images/hero-single.jpg"
          alt="členové Volby pro Teplice"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
