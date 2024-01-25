"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <section
      id="creation"
      className="xl:p-12 items-center flex xl:flex-row flex-col justify-center text-black mb-20"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px] xl:mb-0 mb-10">
        Exemples
      </h1>
      <div className="flex flex-col items-center text-center justify-center">
        <div className="flex flex-col items-center justify-center border border-black xl:w-[1200px] md:w-[600px] w-[400px]">
          <div className="w-[100%]">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              className="flex justify-center items-center "
            >
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.licdn.com/dms/image/D4E22AQEiMUwPF-QZFA/feedshare-shrink_1280/0/1703695651581?e=1709164800&v=beta&t=hLiOWaFC8yDZ8HfjNM6xkNXkbXLLw5cMguqzO67Ozew"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] p-10"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.licdn.com/dms/image/D4E22AQEiMUwPF-QZFA/feedshare-shrink_1280/0/1703695651581?e=1709164800&v=beta&t=hLiOWaFC8yDZ8HfjNM6xkNXkbXLLw5cMguqzO67Ozew"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] p-10"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.licdn.com/dms/image/D4E22AQEiMUwPF-QZFA/feedshare-shrink_1280/0/1703695651581?e=1709164800&v=beta&t=hLiOWaFC8yDZ8HfjNM6xkNXkbXLLw5cMguqzO67Ozew"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] p-10"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <button
          data-tally-open="mOGBWY"
          data-tally-layout="modal"
          className=" flex p-4 mb-10 border font-light hover:bg-black hover:text-white border-black m-10 text-center"
        >
          Je veux la même chose ! ☞
        </button>
      </div>
    </section>
  );
}
