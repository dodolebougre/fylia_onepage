"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [borderColor, setBorderColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);

    // Toggle overflow-x: hidden on the body when mobile menu is open
    if (!nav) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setBorderColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setBorderColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
        borderBottom: `1px solid ${borderColor}`,
      }}
      className="fixed left-0 top-0 w-screen z-20 text-lg first-letter border-b border-solid"
    >
      <div className="flex items-center justify-between p-3">
        <div className="mt-6 mb-6 flex ml-4 ">
          <a href="https://www.linkedin.com/company/fylia/">
            <SiLinkedin className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <a href="https://www.instagram.com/fylia.art/">
            <BsInstagram className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <p className="lg:text-3xl text-2xl mt-[-5px]">🇫🇷</p>
        </div>
        <div className="flex flex-col text-center xl:ml-[300px] mr-18">
          <ScrollLink to="hero" smooth={true} duration={1500} offset={0}>
            <div>
              <h1 className="text-4xl cursor-pointer">fylia</h1>
              <p className="font-light text-sm cursor-pointer">
                Impression premium
              </p>
            </div>
          </ScrollLink>
        </div>
        <div className="text-sm font-light hidden xl:flex gap-4">
          <ScrollLink to="parcours" smooth={true} duration={1500} offset={-50}>
            <p className="p-2 cursor-pointer hover:underline transition-transform duration-300">
              Les étapes à suivre
            </p>
          </ScrollLink>
          <ScrollLink to="creation" smooth={true} duration={1500} offset={-100}>
            <p className="p-2 cursor-pointer hover:underline transition-transform duration-300">
              Nos créations
            </p>
          </ScrollLink>
          <ScrollLink to="question" smooth={true} duration={1500} offset={-50}>
            <p className="p-2 transition-transform duration-300 cursor-pointer hover:underline">
              Des questions ?
            </p>
          </ScrollLink>
        </div>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block xl:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "xl:hidden fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center h-screen bg-black w-full text-white transition-transform ease-in duration-300"
              : "xl:hidden fixed left-full right-0 bottom-0 flex flex-col justify-center items-center h-screen bg-black text-white transition-transform ease-in duration-300 w-full"
          }
        >
          <div className="flex flex-col justify-center text-center items-center text-white">
            <Link
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
              href="#parcours"
            >
              Les étapes à suivre
            </Link>

            <Link
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
              href="#creation"
            >
              Nos créations
            </Link>

            <Link
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
              href="#question"
            >
              Des questions ?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
