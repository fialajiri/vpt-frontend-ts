import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section__container">
      <div className="hero-section__box">
        <h1 className="headingPrimary">
          Jsme koalicí nezávislých kandidátů, KDU-ČSL, Zelených a Pirátů
        </h1>
      </div>
      <div className="hero-section__image-box u-margin-top-big">
        <Image
          className="hero-section_image"
          src="/images/hero-single.jpg"
          alt="členové Volby pro Teplice"
          height={680}
          width={1000}
        />
      </div>
    </section>
  );
};

export default HeroSection;
