"use client"
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface Slide {
  img: string;
  profil: string;
  name: string;
  lastName: string;
  age: string;
  quote: string;
}

function App() {
  const slides: Slide[] = [
    {
      img: "https://images.unsplash.com/photo-1578926078693-4eb3d4499e43?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profil:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZlbnR1cmllciUyMHByb2ZpbHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Timothé",
      lastName: "Lastella",
      age: "39 ans",
      quote: "“Le plus beau voyage de ma vie dans le nord ouest de la France ...”",
    },
    {
      img: "/assets/image/provence.png",
      profil:
        "https://images.unsplash.com/photo-1597614468437-c3b759575358?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHlvdW5nfGVufDB8fDB8fHww",
      name: "Elisa",
      lastName: "Latelie",
      age: "32 ans",
      quote: "“Ce petit village du sud de la France qui me rappelle les bons moments passés avec ma famille...”",
    },
    {
      img: "/assets/image/bleu.png",
      profil:
        "https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlldXh8ZW58MHx8MHx8fDA%3D",
      name: "Hervé",
      lastName: "Jardel",
      age: "57 ans",
      quote:
        "“Mon père était scaphandrier. Un jour il est rentré à la maison, il m’a dit qu’il n’avait jamais vu un bleu aussi beau...”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2
        className="text-center text-2xl md:text-2xl lg:text-3xl max-w-[400px] md:max-w-[600px] lg:max-w-[700px] font-semibold text-white mb-[-30px]text-center"
        style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5) " }}
      >
        ✦ Nos artistes au service de vos souvenirs ✦
      </h2>
    <div className="max-w-[1300px] h-[700px] w-full py-16 px-4 relative group">
  
      {/* Slider Container */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
          transition: "background-image 0.5s ease-in-out",
        }}
        className="w-full h-full rounded-1xl bg-center bg-cover rounded shadow"
      >
        {/* Slide Content */}
        <div className="bg-white text-black bg-opacity-80 flex flex-col justify-center absolute top-1/2 transform -translate-y-1/2 p-6 ml-14 rounded-1xl items-center w-60 h-[570px] text-center shadow">
          <img
            className="w-20 h-20 object-cover shadow rounded"
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
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Slide Indicators */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-white" : "text-gray-500"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div></div>
  );
}

export default App;

