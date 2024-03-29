import React from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ValueProp2 = () => {
  return (
    <div
      id="services"
      className="mb-10 text-black bg-white flex flex-col items-center justify-center xl:flex-row pt-10 pb-10"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Nos services
      </h1>
      <div className="xl:w-[1200px] md:w-[600px]  w-[360px]">
        <section className="xl:flex-row justify-center items-center flex flex-col border border-black mt-10">
          <div
            className="flex flex-col xl:text-left p-10 text-center max-w-[600px]
      "
          >
            <h2 className="xl:text-6xl text-4xl ">Tableaux personnalisés</h2>
            <p className="text-2xl xl:text-1xl mt-4 font-light ">
              Une offre adaptée à vos besoins !
            </p>
            <ul className="text-1xl xl:text-lg mt-3 font-light">
              <li>Représentez votre identité ✓</li>
              <li>Créez votre propre galerie ✓</li>
            </ul>
            <div className="flex flex-col xl:items-start items-center mt-6">
              <button
                data-tally-open="nWzX6j"
                data-tally-layout="modal"
                className="border p-3 text-center hover:bg-black hover:text-white border-black font-light transition ease-in-out duration-700 hover:scale-105"
              >
                Réalisez votre oeuvre sur mersure ☞
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-[600px] duration-300">
            <div className="flex flex-row p-1">
              <div className="border border-black overflow-hidden inline-block mr-1  ">
                <Image
                  src="https://images.unsplash.com/photo-1584661156681-540e80a161d3?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={371}
                  height={500}
                  alt="P"
                  className="transition duration-700 hover:scale-110 ease-in-out"
                />
              </div>
              <div className="overflow-hidden inline-block  border border-black ">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/417914170_427981869563399_7874365926759799778_n.png?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=g51ita4fHYIAX9slJDO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT8moIYLjAwVQ-CXTAdYsucDG3EI6Qb4K9TEIqtvpvS8g&oe=65DB60CD"
                  width={348}
                  height={500}
                  alt="Bureaux"
                  className="transition duration-700 hover:scale-110 ease-in-out scale-105"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="xl:flex-row justify-center items-center flex flex-col max-w-[1200px] border border-t-0 border-black xl:gap-40 ">
          <div className="z-10 border border-black inline-block m-1">
            <ReactCompareSlider
              className="xl:w-[595px] xl:h-[400px]"
              boundsPadding={0}
              itemOne={
                <ReactCompareSliderImage
                  alt="Image one"
                  src="/assets/image/ENtreprise sans fresque.png"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  alt="Image two"
                  src="/assets/image/ENtreprise avec fresque.png"
                />
              }
              keyboardIncrement="5%"
              position={50}
            />
          </div>
          <div className="flex flex-col xl:text-right text-center p-8 max-w-[600px]">
            <h2 className="xl:text-6xl text-4xl">Des fresques sur-mesure</h2>
            <p className="text-2xl mt-4 font-light">
              Une prestation entièrement personnalisable
            </p>
            <ul className="text-1xl xl:text-lg md:text-lg mt-3 font-light">
              <li>Transformez vos espaces de travail ✓</li>
              <li>Partagez votre histoire et vos valeurs ✓</li>
            </ul>
            <div className="flex flex-col xl:items-end items-center mt-6">
              <button
                className="transition ease-in-out duration-700 hover:scale-105 border p-3 font-light text-center hover:bg-black hover:text-white border-black"
                data-tally-open="wbdXMg"
                data-tally-layout="modal"
              >
                Réalisez votre fresque ☞
              </button>
            </div>
          </div>
        </section>
        <section className="xl:flex-row justify-center items-center flex flex-col border border-black border-t-0">
          <div
            className="flex flex-col xl:text-left p-10 text-center max-w-[600px]
      "
          >
            <h2 className="xl:text-6xl text-4xl max-w-[600px] ">
              Faites participer vos employés !
            </h2>
            <p className="text-2xl xl:text-1xl mt-4 font-light ">
              Un séminaire organisé de A à Z
            </p>
            <ul className="text-1xl xl:text-lg mt-3 font-light">
              <li>Fédérez vos employés autour de nos services artistiques ✓</li>
              <li>Proposez un moyen de partage novateur et engagé ✓</li>
            </ul>
            <div className="flex flex-col xl:items-start items-center mt-6">
              <button
                data-tally-open="wkEX41"
                data-tally-layout="modal"
                className="border p-3 text-center hover:bg-black hover:text-white border-black font-light transition ease-in-out duration-700 hover:scale-105"
              >
                Organisez votre team-building ☞
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-[600px]">
            <div className="flex flex-row p-1">
              <div className="border border-black overflow-hidden inline-block  ">
                <Image
                  src="https://images.unsplash.com/photo-1646066490248-27b984261e3c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={600}
                  height={500}
                  alt="P"
                  className="transition-transform duration-700 hover:scale-110 ease-in-out"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ValueProp2;
