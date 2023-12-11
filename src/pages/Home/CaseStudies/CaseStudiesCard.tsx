import { useEffect, useState } from "react";
import { FCTitle } from "../../../components";

import "./CaseStudiesCard.css";
import { IApiResponse } from "../../../types/types";
import CaseStudyCard from "./CaseStudiesCard/CaseStudyCard";

const CaseStudies = () => {
  const [studies, setCaseStudies] = useState<IApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchStudies = async () => {
      try {
        const response = await fetch(
          "https://socialmediaserver.co.za/challenge"
        );
        const data = await response.json();
        console.log(data);
        setCaseStudies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudies();
  }, []);
  return (
    <section className="studies max-width">
      <FCTitle text="Case Studies" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="studies__items">
          {/* Using index as the key because api response has no identifier */}
          {studies.map((item, index) => (
            <CaseStudyCard
              key={index}
              description={item.description}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
