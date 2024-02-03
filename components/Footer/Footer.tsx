"use client";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { StrictMode } from "react";
import RGPD from "./RGPD";
import CGV from "./CGV";
import Paiement from "./Paiement";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-10 flex flex-col mt-1xl  text-black border-top border-black font-light">
      <section className="flex xl:flex-row flex-col lg:justify-between">
        <div className="flex flex-col items-center m-3 ">
          <h1 className="text-5xl">fylia</h1>

          <div className="mt-6 mb-6 flex ml-4">
            <a href="https://www.linkedin.com/company/fylia/">
              <SiLinkedin className="mr-3 text-2xl " />
            </a>
            <a href="https://www.instagram.com/fylia.art/">
              <BsInstagram className="mr-3 text-2xl " />
            </a>
            <a href="https://www.tiktok.com/@fylia.art">
              <PiTiktokLogo className="mr-3 text-2xl " />
            </a>
          </div>
        </div>
        <div className="xl:flex xl:text-start text-center gap-20 justify-center">
          <div className="mb-5 xl:w-[170px] flex flex-col items-center xl:items-start">
            <h2 className=" font-bold text-2xl">Solution</h2>
            <Link href="#">
              <p className="hover:font-normal  transition duration-700 ease-in-out">
                Fylia
              </p>
            </Link>
            <Link href="#parcours">
              <p className="hover:font-normal  transition duration-700 ease-in-out">
                Nos avantages
              </p>
            </Link>
            <Link href="#services">
              <p className="hover:font-normal  transition duration-700 ease-in-out">
                Nos services
              </p>
            </Link>
            <Link href="#question">
              <p className="hover:font-normal  transition duration-700 ease-in-out">
                Des questions ?
              </p>
            </Link>
          </div>
          <div className="mb-5">
            <h2 className=" font-bold text-2xl">Contact</h2>
            <div className="flex items-center justify-center xl:justify-start">
              <CiMail />
              <p className="ml-2"> moncontact@fylia.fr</p>
            </div>
            <div className="flex items-center justify-center xl:justify-start">
              <BsTelephone />
              <p className="ml-2">0628979548</p>
            </div>
          </div>
          <div className="mb-5 xl:w-[200px] flex flex-col xl:items-start items-center">
            <h2 className="font-bold text-2xl">Sécurité</h2>
            <StrictMode>
              <CGV />
            </StrictMode>
            <StrictMode>
              <RGPD />
            </StrictMode>
            <StrictMode>
              <Paiement />
            </StrictMode>
          </div>
        </div>
      </section>
      <section>
        <hr className="my-5 border-t border-black w-full" />
        <div className="text-center">
          <p className="">© All right reserved by Fylia</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
