"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1616853787961-ce0d7e64665a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhaW50JTIwcGV0fGVufDB8fDB8fHww",
      profil: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZlbnR1cmllciUyMHByb2ZpbHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Timothé",
      lastName: "Lastella",
      age: "39 ans",
      quote:
        "“Un ecureil ma tout donné wallaa”",
    },
    {
      img: "https://images.unsplash.com/photo-1695151842277-0e7cddae4157?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwYWludCUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      profil: "https://images.unsplash.com/photo-1597614468437-c3b759575358?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHlvdW5nfGVufDB8fDB8fHww",
      name: "Elisa",
      lastName: "Latelie",
      age: "32 ans",
      quote: "Un mariage marquant, et touchant qui a fini en drame...",
    },
    {
      img: "https://images.unsplash.com/photo-1596468138838-0f34c2d0773b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhaW50fGVufDB8fDB8fHww",
      profil: "https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlldXh8ZW58MHx8MHx8fDA%3D",
      name: "Hérvé",
      lastName: "Jardel",
      age: "57 ans",
      quote: "“ Mon père était scaphandrier. Un jour il est rentré à la maison, il m’a dit qu’il s’était endormi au fond de l’eau, qu’il n’avait jamais vu un bleu aussi beau...”",
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
        <div className="bg-white bg-opacity-80 flex flex-col justify-center absolute top-1/2 transform -translate-y-1/2 p-6 ml-14 rounded-1xl items-center w-60 h-[350px] text-center">
          <img
            className="w-20 h-20 object-cover shadow "
            src={slides[currentIndex].profil}
            alt={slides[currentIndex].lastName}
          />
          <h2 className="text-3xl mt-2">
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