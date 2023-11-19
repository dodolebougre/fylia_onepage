import Proofbar from "../../components/Proofbar";
import React from "react";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <div id="hero">
      <div
        className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover object-cover"
        style={{
          backgroundImage:
            'url("/assets/image/zyro-image final.png")',
        }}
      >
        <div className="p-5 text-white text-center">
          <h1 className="text-6xl tracking-tighter sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl mb-5">
            Transformez vos souvenirs en œuvre d’art
          </h1>
          <p className="max-w-2xl mx-auto text-xl tracking-tighter sm:text-1.5xl md:text-2xl lg:text-3xl mb-9">
            Plongez dans votre souvenir le plus précieux grâce à une expérience
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
