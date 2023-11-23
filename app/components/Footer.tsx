import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-3 flex flex-col items-center mt-1xl lg:justify-between lg:flex-row md:justify-between md:flex-row text-white">
      <div className="flex flex-col items-center m-3 ">
        <div className="w-20">
          <img
            src="/assets/icon/fyliaicon.png"
            alt="Votre logo"
            className="w-full"
          />
        </div>
        <div className="mt-6 mb-6 flex ml-4 ">
          <a href="https://www.linkedin.com/company/fylia/">
            <SiLinkedin className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <a href="https://www.instagram.com/fylia.app/">
            <BsInstagram className="mr-3 text-1xl lg:text-2xl" />
          </a>
          <BsYoutube className="mr-3 text-1xl lg:text-2xl" />
          <FaFacebookF className="mr-3 text-1xl lg:text-2xl" />
        </div>
      </div>
      <div className="lg:flex lg:text-start md:flex md:text-start text-center">
        <div className="mb-5 md:mr-20 lg:mr-20">
          <h2 className=" font-bold text-2xl">Solution</h2>
          <Link href="#">
            <p>Fylia</p>
          </Link>
          <Link href="#video">
            <p>Notre teaser</p>
          </Link>
          <Link href="#contact">
            <p>Nous contacter</p>
          </Link>
        </div>
        <div className="mb-5 md:mr-10 lg:mr-10">
          <h2 className=" font-bold text-2xl">Contact</h2>
          <p className="">moncontact@fylia.fr</p>
          <p className="">dorian.boatti@fylia.fr</p>
          <p className="">luc.malfatti@fylia.fr</p>
          <p className="">valentin.jeannest@fylia.fr</p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold text-2xl">Sécurité</h2>
          <p className="">© All right reserved by Fylia</p>
          <p className=" cursor-pointer">Termes & Conditions</p>
          <p className=" cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
