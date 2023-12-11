import "./FCTitle.css";

interface IFCTitle {
  text: string;
}

const FCTitle: React.FC<IFCTitle> = ({ text }) => {
  return (
    <div className="title">
      <div className="title__line" />

      <p className="title__text">{text}</p>
    </div>
  );
};

export default FCTitle;
