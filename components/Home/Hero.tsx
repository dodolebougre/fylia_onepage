"use client";
import React from "react";
import Swap from "./Swap";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className="xl:bg-fixed bg-center bg-cover object-cover bg-[#215A69]"
          style={{
            backgroundImage:
              'url("https://media.discordapp.net/attachments/1176884287925145653/1199255001676132454/supernoval_99898_a_coworking_space_with_lot_of_painting_colored_48e0fb64-ea30-4474-b907-5fb18d08ddcd.png?ex=65c1e041&is=65af6b41&hm=0af6bed162aca9a349ceaa60666946a280dbb1dddb427b6f099821d3c6812670&=&format=webp&quality=lossless&width=1766&height=990")',
            filter: "brightness(0.4)",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1, // Assure que l'arrière-plan est en dessous des autres éléments
          }}
        ></div>
        <div className="p-5 text-white text-center">
          <h1
            className="text-4xl tracking-tighter md:text-6xl lg:text-7xl mb-5"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Un espace de travail idéal grâce <br />
            <Typewriter
              options={{
                strings: [
                  "à nos prestations",
                  "à nos artistes",
                  "à l'art sur mesure",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <h2 className="max-w-2xl mx-auto text-2xs tracking-normal sm:text-2xs md:text-lg lg:text-xl mb-9 font-light">
            Nous vous mettons en relation avec l'artiste parfait, pour dynamiser
            et mettre en avant vos équipes et vos valeurs à travers une
            experience unique.
          </h2>
          <ScrollLink to="services" smooth={true} duration={1500} offset={-95}>
            <button className="font-light border p-4 duration-700 transform hover:bg-white hover:text-black hover:scale-105 transition ease-in-out">
              Nos services ☞
            </button>
          </ScrollLink>
        </div>
        <Swap />
      </div>
    </div>
  );
};

export default Hero;
