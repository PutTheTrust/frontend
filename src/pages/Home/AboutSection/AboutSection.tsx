import { FCTitle } from "../../../components";
import AboutSectionItems from "./AboutSectionItems/AboutSectionItems";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section max-width">
      <FCTitle text="What we do" />

      <h2 className="about-section__heading">
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </h2>

      <AboutSectionItems />
    </div>
  );
};

export default AboutSection;
