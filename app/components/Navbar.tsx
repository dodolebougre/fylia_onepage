"use client";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [icon, setIcon] = useState("/assets/icon/fyliaicon.png");
  const [boxShadowBottom, setBoxShadowBottom] = useState(
    "0px 2px 5px rgba(0, 0, 0, 0.1)"
  );

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setIcon("/assets/icon/fyliablackicon.png");
        setBoxShadowBottom("0px 2px 5px rgba(0, 0, 0, 0.1)");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setIcon("/assets/icon/fyliablackicon.png");
        setIcon("/assets/icon/fyliaicon.png");
        setBoxShadowBottom("0px 2px 5px rgba(0, 0, 0, 0)");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}`, boxShadow: ` ${boxShadowBottom}` }}
      className=" fixed left-0 top-0 w-full ease-in duration-300 z-10 text-lg first-letter:"
    >
      <div className=" flex justify-between items-center p-3 text-white">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70} // Ajustez cela en fonction de votre mise en page (pour compenser la hauteur de votre barre de navigation par exemple)
          duration={500}
        >
          <img className="cursor-pointer" width={50} src={icon} alt="logo" />
        </ScrollLink>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-2 mr-2 cursor-pointer">
            <ScrollLink
              to="hero" // L'identifiant de la section cible
              spy={true}
              smooth={true}
              offset={-70} // Ajustez cela en fonction de votre mise en page (pour compenser la hauteur de votre barre de navigation par exemple)
              duration={500}
            >
              Fylia
            </ScrollLink>
          </li>
          <li className="p-2 mr-2 cursor-pointer">
            <ScrollLink
              to="video"
              spy={true}
              smooth={true}
              offset={-70} // Ajustez cela en fonction de votre mise en page (pour compenser la hauteur de votre barre de navigation par exemple)
              duration={500}
            >
              Comment ça marche ?
            </ScrollLink>
          </li>
          <li className="p-2 cursor-pointer">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50} // Ajustez cela en fonction de votre mise en page (pour compenser la hauteur de votre barre de navigation par exemple)
              duration={500}
            >
              Vous êtes un artiste ?
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#">Fylia</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#video">Comment ça marche ?</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Vous êtes un artiste ?</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
