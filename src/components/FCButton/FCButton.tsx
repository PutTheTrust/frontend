import "./FCButton.css";

interface IFCButtonProps {
  text: string;
  isHero?: boolean;
}

const FCButton: React.FC<IFCButtonProps> = ({ text, isHero }) => {
  return <button className={`cta ${isHero && "cta-alt"}`}>{text}</button>;
};

export default FCButton;
