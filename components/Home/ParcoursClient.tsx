import React from "react";
import Image from "next/image";

const ParcoursClient = () => {
  return (
    <div
      id="parcours"
      className="mb-10 text-white bg-[#0a2f59]  flex flex-col items-center justify-center xl:flex-row pt-5 text-center"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Parcours
      </h1>
      <div className="md:max-w-[1200px] max-w-[400px] mb-10">
        <section className="xl:flex-row justify-center items-center flex flex-col">
          <div className="mt-10 w-[270px] xl:text-right text-center xl:mr-10 mr-0">
            <div
              className="border border-black
      "
            >
              <Image
                alt="A la montagne"
                src="https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1193603191032524840/amis_qui_campent.jpg?ex=65b68b18&is=65a41618&hm=f30fcb9e5db5a67ecfce600de8840474c55dca3e54daec6088b23fd302c7fbab&=&format=webp&width=690&height=990"
                width={500}
                height={360}
                className="h-[360px]"
              />
            </div>
            <h1 className="text-xl mt-3">Etape 1</h1>
            <p className="font-light">
              Je sélectionne une photo, un style, un format et le support de ma
              future impression.
            </p>
          </div>

          <div className=" mt-16 w-[270px]  xl:text-right text-center xl:mr-10 mr-0">
            <div className="border border-black ">
              <Image
                alt="Artiste peintre"
                src="https://images.unsplash.com/photo-1621609764710-57a57cb444f5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={360}
                className="h-[360px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 2</h1>
            <p className="font-light">
              Nous utilisons l'intelligence artificielle pour génerer les
              propositions, et faisons appel à nos designers pour les
              personnaliser.
            </p>
          </div>
          <div className="mt-10 min-w-[270px] w-[270px]  xl:text-right text-center xl:mr-10 mr-0">
            <div
              className="border border-black 
      "
            >
              <Image
                alt="Proposition de tableau"
                src="https://media.discordapp.net/attachments/1176824010663796818/1193604361570500629/supernoval_99898_A_painting_in_the_style_of_calligraphy-inspire_d0134a45-657b-4fbe-a99b-8b9e60220d32.png?ex=65b68c2f&is=65a4172f&hm=27f6367f22f7caf5c344004c95b82184bca31763296d267c365960970229f8ee&=&format=webp&quality=lossless&width=688&height=990"
                width={500}
                height={600}
                className="h-[360px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 3</h1>
            <p className="font-light">
              4 propositions sont faites par rapports à vos choix, et sont
              envoyées sur votre boite mail.
            </p>
          </div>
          <div className="mt-10 w-[270px] xl:text-right text-center">
            <div
              className="border border-black
      "
            >
              <Image
                alt="contact avec artiste"
                src="https://images.unsplash.com/photo-1616422403639-282145aa3e73?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                className="h-[360px]"
              />
            </div>
            <h1 className="text-xl  mt-3">Etape 4</h1>
            <p className="font-light">
              Si une proposition vous plait, nous l'imprimons sur le support de
              votre choix et la faisons livrer chez vous.
            </p>
          </div>
        </section>
        <button
          className="font-light border p-4 hover:bg-white hover:text-black m-10"
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
