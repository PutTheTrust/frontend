import web from "../assets/icon-web-dev.svg";
import app from "../assets/icon-appdev.svg";
import blockchain from "../assets/icon-blockchain.svg";
import ux from "../assets/icon-ux.svg";

const aboutItems = [
  {
    id: "1",
    title: "Web development",
    description:
      "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    image: web,
  },
  {
    id: "2",
    title: "User experience & design",
    description:
      "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
    image: ux,
  },
  {
    id: "3",
    title: "Mobile app development",
    description:
      "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    image: app,
  },
  {
    id: "4",
    title: "Blockchain solutions",
    description:
      "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    image: blockchain,
  },
];

export default aboutItems;
