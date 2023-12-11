import { FCButton } from "../../../components";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content max-width">
        <h1>Live with Confidence</h1>
        <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
        <div>
          <FCButton text="View project" isHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;
