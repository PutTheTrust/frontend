import aboutItems from "../../../../constants/aboutItems";
import AboutSectionCard from "../AboutSectionCard/AboutSectionCard";

import "./AboutSectionItems.css";

const AboutSectionItems = () => {
  return (
    <div className="aboutSection">
      {aboutItems.map((item) => (
        <AboutSectionCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AboutSectionItems;
