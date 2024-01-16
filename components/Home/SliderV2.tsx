"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Slider() {
  return (
    <section
      id="creation"
      className="xl:p-12 items-center flex xl:flex-row flex-col justify-center text-black mb-20"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px] xl:mb-0 mb-10">
        Nos créations
      </h1>
      <div className="flex flex-col items-center justify-center border border-black">
        <div className="flex xl:flex-row flex-col xl:w-[1200px] md:w-[600px] w-[400px]">
          <div className="w-[100%] mt-10 mb-10">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]"
            >
              <SwiperSlide className="flex items-center justify-center border border-black">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/413084476_259135373691982_3727507002503070248_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=2uL2iHzO6bwAX_nap-N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSTGMHimMtgdQZrp6ogiGd5ydqWe9KHZnsMWXQQ9qlaoA&oe=65C4F66A"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="xl:w-[500px] w-[300px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center border border-black">
                <Image
                  src="https://media.discordapp.net/attachments/1176824010663796818/1194279021333201007/supernoval_99898_an_oil_painting_of_a_light_chestnut_woman_kiss_67782711-0b4c-4526-8104-6645ca31c266.png?ex=65afc603&is=659d5103&hm=1ab828168bc4028596f7fd43da686dec1327728c5336f4c4b37ded30b43d6feb&=&format=webp&quality=lossless&width=990&height=990"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center border border-black">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/418288039_745596870772507_5864450958970391388_n.png?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=I7zxEgWAtnoAX9gOuvq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSdSLJuECt6y_I0-Wmjo4T1jSDjyMfqtrHOsvA7Ko8YkQ&oe=65C4F131"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center border border-black">
                <Image
                  src="https://media.discordapp.net/attachments/1176824010663796818/1194326738365325352/supernoval_99898_pastel_colors_minimal_details_happy_tempera_go_80019093-a321-4992-ae94-eafa830cb30b.png?ex=65aff273&is=659d7d73&hm=ec61ac552a777b6cff3ccc0af34d714543e1b1c5b26d7e36e7d328a76e593dc2&=&format=webp&quality=lossless&width=990&height=990"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center border border-black">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/417352740_384651054224958_6483564182429762538_n.png?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=BbccnuXuE9UAX_iHgar&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTqsBGE7rE5Rwn7s3vfHcFGmEWputPCrsOYDkbehghgBA&oe=65C4DF15"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]"
                />
              </SwiperSlide>
            </Swiper>
            <p className="text-center font-light mt-5">
              Souvenir de <strong>Noa Mallet</strong> <br /> "Ma soeur avec
              Tigrou" <br /> 09/01/2024
            </p>
          </div>
        </div>
        <button
          data-tally-open="mOGBWY"
          data-tally-layout="modal"
          className="flex p-4 mb-10 border font-light border-black text-black hover:bg-black hover:text-white"
        >
          Je veux la même chose ! ☞
        </button>
      </div>
    </section>
  );
}
