import React from "react";
import Image from "next/image";
const Proofbar = () => {
  return (
    <div
      id="parcours"
      className="mb-10 flex flex-col items-center justify-center xl:flex-row pt-5 text-center md:mt-0 m-[-40px]"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px] p-10">
        Ils nous soutiennent
      </h1>
      <div className="xl:w-[1200px] md:w-[600px]  w-[360px]">
        <section className="justify-center items-center flex">
          <div
            className="flex md:gap-[60px]  xl:gap-[100px] gap-[30px]
      "
          >
            <Image
              alt="emlyon"
              src="/assets/icon/emlyon.png"
              width={120}
              height={30}
              className="xl:w-[150px] md:w-[80px] w-[60px]"
            />
            <Image
              alt="emlyon"
              src="/assets/icon/bpifrance.png"
              width={120}
              height={200}
              className="xl:w-[150px] md:w-[80px] w-[60px]"
            />
            <Image
              alt="emlyon"
              src="/assets/icon/pepite.png"
              width={120}
              height={200}
              className="xl:w-[150px] md:w-[80px] w-[60px]"
            />
            <Image
              alt="emlyon"
              src="/assets/icon/laruche.png"
              width={120}
              height={20}
              className="xl:w-[150px] md:w-[80px] w-[60px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proofbar;
