import React from "react";

const SocialProof = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4"> Une artiste nous soutient</h2>
        <p>★★★★★</p>
    <section className="relative isolate overflow-hidden bg-white bg-opacity-70 m-10 p-10 ">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.black.100),white)] opacity-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="flex flex-col items-center mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Ca me parle cette idée, j’ai très envie de m’essayer à peindre
              les souvenirs d’une personne, c‘est assez réjouissant car c’est
              surement un cadeau qui les marquera a vie“
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section></div>
  );
};

export default SocialProof;
