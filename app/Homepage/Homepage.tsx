import React from "react";
import Hero from "./components/Hero";
import Video from "./components/Paint";
import ValueProp from "./components/ValueProp";
import ValueProp2 from "./components/ValueProp2";
import ValueProp3 from "./components/ValueProp3";
import Slider from "../components/Slider";
import SocialProof from "../components/SocialProof";
import Paint2 from "./components/Paint2";

const Homepage = () => {
  return (
    <div>
      <>
        <Hero />
        <Video />
        <ValueProp />
        <ValueProp2 />
        <ValueProp3 />
        <Slider />
        <SocialProof />
        <Paint2 />
      </>
    </div>
  );
};

export default Homepage;
