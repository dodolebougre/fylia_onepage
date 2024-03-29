import React from "react";
import Image from "next/image";

const ParcoursClient = () => {
  return (
    <div
      id="parcours"
      className="mb-10 text-black bg-gradient-to-r  from-white via-slate-100 to-white  flex flex-col items-center justify-center xl:flex-row pt-10 text-center"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Les étapes
      </h1>
      <div className="md:w-[1200px] w-[400px] mb-10 mt-10">
        <section className="xl:flex-row justify-center items-center flex flex-col ">
          <div className="xl:text-right text-center xl:mr-10 mr-0 relative group text-white xl:mb-0 mb-10">
            <div
              className="border border-black 
      "
            >
              <Image
                alt="Formulaire à remplir par l'entreprise"
                src="https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={400}
                className="h-[400px] cursor-pointer"
                style={{ filter: "brightness(0.7)" }}
              />
            </div>
            <div className=" absolute flex justify-center items-center group-hover:invisible z-10 cursor-pointer group inset-0 text-center flex-col text-3xl">
              <h2>Etape 1</h2>
              <p className="mt-2 rotate-[-90deg]">☞</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center p-10 text-2xl cursor-pointer duration-700 ease-in-out ">
              <p className="font-light invisible group-hover:visible">
                Remplissez notre <strong> formulaire de contact </strong>et
                décrivez votre besoin.
              </p>
            </div>
          </div>

          <div className=" xl:text-right text-center xl:mr-10 mr-0 relative group text-white xl:mb-0 mb-10">
            <div className="border border-black ">
              <Image
                alt="Formulaire"
                src="https://images.unsplash.com/photo-1613483811511-72729fa16112?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={400}
                className="h-[400px] cursor-pointer"
                style={{ filter: "brightness(0.7)" }}
              />
            </div>
            <div className=" absolute flex justify-center items-center group-hover:invisible z-10 cursor-pointer group inset-0 text-center flex-col text-3xl">
              <h2>Etape 2</h2>
              <p className="mt-2 rotate-[-90deg]">☞</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center p-10 text-2xl cursor-pointer duration-700 ease-in-out">
              <p className="font-light invisible group-hover:visible">
                Nous vous contactons pour vous présenter nos
                <strong> artistes et vous proposer des prestations</strong>{" "}
                parfaitement adaptées à votre entreprise.
              </p>
            </div>
          </div>
          <div className=" xl:text-right text-center xl:mr-10 mr-0 relative group text-white xl:mb-0 mb-10">
            <div className="border border-black">
              <Image
                alt="Evenement Fylia"
                src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=3069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={400}
                className="h-[400px] cursor-pointer"
                style={{ filter: "brightness(0.7)" }}
              />
              <div className=" absolute flex justify-center items-center group-hover:invisible z-10 cursor-pointer group inset-0 text-center flex-col text-3xl">
                <h2>Etape 3</h2>
                <p className="mt-2 rotate-[-90deg]">☞</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center p-10 text-2xl cursor-pointer duration-700 ease-in-out">
                <p className="font-light invisible group-hover:visible">
                  En collaboration avec vous,{" "}
                  <strong>nous perfectionnons</strong> ces propositions pour{" "}
                  <strong>créer un événement ou une prestation</strong> qui
                  correspond pleinement à vos attentes.
                </p>
              </div>
            </div>
          </div>
          <div className="xl:text-right text-center relative group text-white xl:mb-0 mb-10">
            <div
              className="border border-black
      "
            >
              <Image
                alt="entreprise comblé grâce a notre offre B2B"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={380}
                className="h-[400px] cursor-pointer"
                style={{ filter: "brightness(0.7)" }}
              />
            </div>
            <div className=" absolute flex justify-center items-center group-hover:invisible z-10 cursor-pointer group inset-0 text-center flex-col text-3xl">
              <h2>Etape 4</h2>
              <p className="mt-2 rotate-[-90deg]">☞</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center p-10 text-2xl cursor-pointer duration-700 ease-in-out">
              <p className="font-light invisible group-hover:visible">
                Nous fixons une date et le tour est joué.{" "}
                <strong>Place à l’artiste!</strong>
              </p>
            </div>
          </div>
        </section>
        <button
          className="font-light border  hover:bg-black hover:text-white border-black  p-4  m-10 duration-700 ease-in-out transition hover:scale-105"
          data-tally-open="3X0d7j"
          data-tally-layout="modal"
        >
          Je me lance ☞
        </button>
      </div>
    </div>
  );
};

export default ParcoursClient;
