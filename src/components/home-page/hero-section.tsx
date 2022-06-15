import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section__container">
      <div className="hero-section__heading">
        <span className="hero-section__heading--volba">Volba{'\u00A0'}</span>
        <span className="hero-section__heading--pro">pro!{'\u00A0'}</span>
        <span className="hero-section__heading--teplice">Teplice</span>
      </div>
      <div className="hero-section__image-box ">
        <Image
          className="hero-section_image"
          src="/images/hero-image-cut.jpg"
          alt="členové Volby pro Teplice"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-section__box">
        <h1 className="headingPrimary">
          Jsme koalicí nezávislých kandidátů, KDU-ČSL, Zelených a Pirátů
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
