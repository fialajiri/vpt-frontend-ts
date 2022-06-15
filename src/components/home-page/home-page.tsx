import HeroSection from "./hero-section";
import Coalition from "./coalition-section";
import Accomplishement from "./accomplishement-section";
import Program from "./program-section";
import PastElection from "./past-election-section";
import FutureElection from "./future-election-section";

const HomePage: React.FC = () => {
  return (
    <div className="home-page__container">
      <HeroSection />
      <Coalition />
      <Accomplishement />
      <Program />
      <PastElection />
      <FutureElection />
    </div>
  );
};

export default HomePage;
