"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      img: "/assets/image/paint_village.png",
      profil: "/assets/image/personne_1.png",
      name: "Hervé",
      lastName: "Jardel",
      age: "76 ans",
      quote:
        "“ Mon père était scaphandrier. Un jour il est rentré à la maison, il m’a dit qu’il s’était endormi au fond de l’eau, qu’il n’avait jamais vu un bleu aussi beau...”",
    },
    {
      img: "/assets/image/paint_mariage.png",
      profil: "/assets/image/personne_1.png",
      name: "name",
      lastName: "lastname",
      age: "age",
      quote: "Nouvelle citation",
    },
    {
      img: "/assets/image/paint_blue.png",
      profil: "/assets/image/personne_1.png",
      name: "Nom",
      lastName: "Prénom",
      age: "27",
      quote: "Nouvelle citation 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1300px] h-[720px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full rounded-1xl bg-center bg-cover duration-500"
      >
        <div className="bg-white bg-opacity-80 flex flex-col justify-center absolute top-1/2 transform -translate-y-1/2 p-6 ml-10 rounded-1xl items-center">
          <img
            className="w-40"
            src={slides[currentIndex].profil}
            alt={slides[currentIndex].lastName}
          />
          <h2 className="text-3xl">
            {slides[currentIndex].name}{" "}
            <strong>{slides[currentIndex].lastName}</strong>
          </h2>
          <h3 className="text-2xl">{slides[currentIndex].age}</h3>
          <p className="w-40 text-center leading-tight mt-4">
            {slides[currentIndex].quote}
          </p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
