import { IApiResponse } from "../../../../types/types";

import "./CaseStudyCard.css";

const CaseStudyCard: React.FC<IApiResponse> = ({
  imageUrl,
  description,
  title,
}) => {
  return (
    <>
      <div
        className="caseCard"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CaseStudyCard;
