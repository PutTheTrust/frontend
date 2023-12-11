import { Dispatch, SetStateAction } from "react";

import navItems from "../../../constants/navItems";
import { FCButton } from "../..";

import logo from "../../../assets/logo.svg";
import close from "../../../assets/icon-close.svg";

import "./MobileSidebar.css";

interface IMobileSidebar {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileSidebar: React.FC<IMobileSidebar> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${!isOpen && "close"}`}>
      <div>
        <div className="sidebar__top">
          <div>
            <img className="sidebar__top-logo" src={logo} alt="logo" />
          </div>

          <button onClick={() => setIsOpen(false)}>
            <img src={close} alt="close" />
          </button>
        </div>

        <nav className="sidebar__nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <FCButton text="Let's Talk" />
    </div>
  );
};

export default MobileSidebar;
