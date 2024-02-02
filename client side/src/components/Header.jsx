import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(true);
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? null : "-100%",
      zIndex: menuOpened ? 1000 : 0, };
    }
  };
  return (
    <section className="text-white bg-[--black]">
      <div className="flexNav paddings innerWidth py-4 text-[--secondary]">
        <Link to="/">
          <img src="./logo.png" width={100} Linklt="" />
        </Link>
        <OutsideClickHandler  onOutsideClick={() => setMenuOpened(false)}>
        <div
          className="flexCenter gap-8 hover:cursor-pointer h-menu"
          style={getMenuStyles(menuOpened)}
        >
      <NavLink to="/properties">Properties</NavLink>
      <NavLink to="/contact">Contact</NavLink>
         
          <button
            type="button"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign up
          </button>
        </div>
        </OutsideClickHandler>
        <div
          className="md:hidden block hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
