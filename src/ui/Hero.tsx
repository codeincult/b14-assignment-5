import HeroContent from "../features/hero/HeroContent";
import HeroImage from "../features/hero/HeroImage";

function Hero() {
  return (
    <div>
      <div className="container -mt-12.5 items-center justify-between mx-auto px-8 flex gap-5">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
}

export default Hero;
