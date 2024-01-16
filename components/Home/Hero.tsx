import React from "react";
import Swap from "./Swap";

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className="xl:bg-fixed bg-center bg-cover object-cover"
          style={{
            backgroundImage:
              'url("https://media.discordapp.net/attachments/1196351224044326933/1196488392792359013/supernoval_99898_a_cosy_living_room_with_a_colorful_wall_full_o_1d6f86e5-8f3e-4b59-be1a-8270c624e652.webp?ex=65b7cfa6&is=65a55aa6&hm=672fc23cb149185c86608d54e08f5bc143095f8236d9e7856fc32f40a686917e&=&format=webp&width=1766&height=990")',
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
            Votre photo préférée en poster
          </h1>
          <h2 className="max-w-2xl mx-auto text-xl tracking-normal sm:text-2xs md:text-1xl lg:text-2xl mb-9 font-light ">
            Des impressions murales entièrement personnalisées. Donnez à vos
            photos des allures d'oeuvre d'art.
          </h2>
          <button
            className="font-light border p-4 hover:bg-white hover:text-black"
            data-tally-open="mOGBWY"
            data-tally-layout="modal"
          >
            Personnalisez votre poster ☞
          </button>
        </div>
        <Swap />
      </div>
    </div>
  );
};

export default Hero;
