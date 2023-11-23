import React from "react";

const SocialProof = () => {
  return (
    <div className="text-white flex flex-col items-center m-10">
      <h2 className="text-center text-2xl mb-3 md:text-2xl lg:text-3xl max-w-[400px] md:max-w-[600px] lg:max-w-[700px] font-semibold "
        style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}> Des artistes nous suivent</h2>
      <p>★★★★★</p>
      <section className="">
        <div className=""></div>
        <div className=""></div>
        <div className="flex flex-col items-center mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="flex flex-col  bg-opacity-10 bg-white rounded p-4 backdrop-blur text-2xl text-center max-w-[400px] m-10 shadow duration-300 transform hover:scale-110">
            <blockquote className="text-xl ">
              <p>
                “Cette idée me parle, j’ai très envie de m’essayer à peindre
                les souvenirs d’une personne, c‘est assez réjouissant car c’est
                surement un cadeau qui les marqueras à vie“
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="/assets/image/pdpmarido.png"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <p className="font-bold">Marido </p>
                <svg
                  viewBox="0 0 2 2"
                  width="2"
                  height="2"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="">Artiste peintre Marseillaise</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default SocialProof;
