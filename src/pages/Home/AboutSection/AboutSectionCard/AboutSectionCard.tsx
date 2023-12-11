import "./AboutSectionCard.css";

interface IAboutSectionCardProps {
  image: string;
  title: string;
  description: string;
}

const AboutSectionCard: React.FC<IAboutSectionCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />

      <div className="card__text">
        <h3 className="card__title">{title}</h3>

        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default AboutSectionCard;
