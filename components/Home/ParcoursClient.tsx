import React from "react";
import Image from "next/image";

const ParcoursClient = () => {
  return (
    <div
      id="parcours"
      className="mb-10 text-black bg-gradient-to-r  from-white via-slate-100 to-white  flex flex-col items-center justify-center xl:flex-row pt-5 text-center"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Etapes à suivre
      </h1>
      <div className="md:max-w-[1200px] max-w-[400px] mb-10">
        <section className="xl:flex-row justify-center items-center flex flex-col">
          <div className="mt-10 w-[270px] xl:text-right text-center xl:mr-10 mr-0">
            <div
              className="border border-black 
      "
            >
              <Image
                alt="Formulaire à remplir par l'entreprise"
                src="https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={200}
                className="h-[400px]"
              />
            </div>
            <h1 className="text-xl mt-3">Etape 1</h1>
            <p className="font-light">
              Vous remplissez le <strong> formulaire d'inscription </strong>pour
              prendre contact avec nous.
            </p>
          </div>

          <div className=" mt-16 w-[270px]  xl:text-right text-center xl:mr-10 mr-0">
            <div className="border border-black ">
              <Image
                alt="Formulaire"
                src="https://images.unsplash.com/photo-1613483811511-72729fa16112?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={380}
                className="h-[400px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 2</h1>
            <p className="font-light">
              Nous vous mettons avec <strong>l'artiste parfait</strong> en amont
              en identifiant, le type de l'entreprise, son image et son
              implantation.
            </p>
          </div>
          <div className="mt-10 w-[270px]  xl:text-right text-center xl:mr-10 mr-0">
            <div
              className="border border-black 
      "
            >
              <Image
                alt="Evenement Fylia"
                src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=3069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={380}
                className="h-[400px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 3</h1>
            <p className="font-light">
              Nous trouvons une date commune entre l'entreprise et l'artiste et
              mettons en place l'evenement clé en main.
            </p>
          </div>
          <div className="mt-16 w-[270px] xl:text-right text-center">
            <div
              className="border border-black
      "
            >
              <Image
                alt="entreprise comblé grâce a notre offre B2B"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={270}
                height={380}
                className="h-[400px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 4</h1>
            <p className="font-light">
              Vous repartez avec votre oeuvre sur mesure (fresque, tableau ...)
              confectionné à l'image de votre entreprise.
            </p>
          </div>
        </section>
        <button
          className="font-light border bg-gradient-to-r hover:text-black hover:from-white border-black from-blue-600 via-blue-500 to-blue-600 text-white  p-4  m-10"
          data-tally-open="mOGBWY"
          data-tally-layout="modal"
        >
          Je me lance ☞
        </button>
      </div>
    </div>
  );
};

export default ParcoursClient;
