import logo from "../../assets/logo.svg";
import menu from "../../assets/icon-menu.svg";

import "./Header.css";
import navItems from "../../constants/navItems";
import { FCButton } from "..";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="header__inner flex items-center justify-between max-width">
        <img src={logo} alt="logo" />

        <button
          onClick={() => setIsOpen(true)}
          className="header__menu hide-for-desktop"
        >
          <img src={menu} alt="menu" />
        </button>

        <nav className="hide-for-mobile">
          <ul className="header__nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hide-for-mobile">
          <FCButton text="Let's Talk" />
        </div>
      </div>

      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
