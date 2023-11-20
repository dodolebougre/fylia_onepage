import React from "react";

const SocialProof = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4"> Une artiste nous soutient</h2>
      <p>★★★★★</p>
      <section className="">
        <div className=""></div>
        <div className=""></div>
        <div className="flex flex-col items-center mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9">
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
                  className="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">Artiste peintre Marseillaise</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default SocialProof;
