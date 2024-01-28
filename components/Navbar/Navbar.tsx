"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [borderColor, setBorderColor] = useState("white");
  const [showScrolledImage, setShowScrolledImage] = useState(false);

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
      if (window.scrollY >= 100) {
        setColor("#ffffff");
        setTextColor("#000000");
        setBorderColor("#000000");
        setShowScrolledImage(true);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setBorderColor("#ffffff");
        setShowScrolledImage(false);
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
      className="fixed left-0 top-0 w-screen z-20 text-lg first-letter border-b border-solid transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between p-3">
        <div className="mt-6 mb-6 flex ml-4 ">
          <a href="https://www.linkedin.com/company/fylia/">
            <SiLinkedin className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <a href="https://www.instagram.com/fylia.art/">
            <BsInstagram className="mr-3 text-1xl lg:text-2xl" />
          </a>
        </div>
        <div className="flex flex-col xl:ml-[300px] mr-9 text-center">
          <ScrollLink to="hero" smooth={true} duration={1500} offset={0}>
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Logo de fylia"
                src={
                  showScrolledImage
                    ? "/assets/icon/fylia black.png"
                    : "/assets/icon/fylia white.png"
                }
                height={80}
                width={80}
                className="cursor-pointer"
              />
              <p className="font-light text-sm text-center cursor-pointer">
                Feel good by art
              </p>
            </div>
          </ScrollLink>
        </div>
        <div className="text-sm font-light hidden xl:flex gap-4">
          <ScrollLink to="value" smooth={true} duration={1500} offset={-95}>
            <p className="p-2 cursor-pointer hover:underline">Nos avantages</p>
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={1500} offset={-95}>
            <p className="p-2 cursor-pointer hover:underline">Nos services</p>
          </ScrollLink>
          <ScrollLink to="question" smooth={true} duration={1500} offset={-95}>
            <p className="p-2 cursor-pointer hover:underline">
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
              className="p-4 text-4xl hover:text-gray-500 transition duration-700 ease-in-out"
              href="#value"
            >
              {" "}
              <h1>Nos avantages</h1>
            </Link>

            <Link
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 transition duration-700 ease-in-out"
              href="#services"
            >
              <h1>Nos services</h1>
            </Link>

            <Link
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 transition duration-700 ease-in-out"
              href="#question"
            >
              <h1>Des questions ?</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
