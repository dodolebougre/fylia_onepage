import Proofbar from "../../components/Proofbar";
import React from "react";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex items-center justify-center h-screen lg:mb-11  md:mb-11 sm:mb-11 mb-[-120px] ">
        {/* Div pour l'arrière-plan avec le filtre de luminosité */}
        <div
          className="md:bg-fixed bg-center bg-cover object-cover"
          style={{
            backgroundImage: 'url("/assets/image/image site.png")',
            filter: "brightness(0.4)",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1, // Assure que l'arrière-plan est en dessous des autres éléments
          }}
        ></div>

        <div className="p-5 text-white text-center relative z-9 ">
          <h1
            className="text-6xl tracking-tighter sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl mb-5"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Transformez vos souvenirs en œuvre d’art
          </h1>
          <p className="max-w-2xl mx-auto text-xl tracking-tighter sm:text-1.5xl md:text-2xl lg:text-3xl mb-9">
            Revivez votre souvenir le plus précieux grâce à une expérience
            unique mêlant <strong>son et image</strong>. Avec Fylia des artistes{" "}
            <strong>donnent vie</strong> à tous vos récits.
          </p>
          <Button />
        </div>
      </div>
      <Proofbar />
    </div>
  );
};

export default Hero;
