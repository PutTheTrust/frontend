import Hero from "./Hero/Hero";
import { Footer, Header } from "../../components";
import AboutSection from "./AboutSection/AboutSection";
import Brand from "./Brand/Brand";
import CaseStudies from "./CaseStudies/CaseStudiesCard";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <AboutSection />
      <CaseStudies />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
