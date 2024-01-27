"use client";
import { GoArrowDown } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";

const Swap = () => {
  return (
    <div>
      <ScrollLink to="value" smooth={true} duration={1000} offset={-95}>
        <button className="border animate-bounce border-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl  cursor-pointer text-white duration-700 transform hover:bg-white hover:text-black hover:scale-105 transition ease-in-out absolute mt-10 ml-[-20px]">
          <GoArrowDown></GoArrowDown>
        </button>
      </ScrollLink>
    </div>
  );
};

export default Swap;
