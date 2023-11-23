import React from "react";
import Hero from "./components/Hero";
import Video from "./components/Paint";
import ValueProp from "./components/ValueProp";
import ValueProp2 from "./components/ValueProp2";
import ValueProp3 from "./components/ValueProp3";
import Slider from "../components/Slider";
import SocialProof from "../components/SocialProof";
import Paint2 from "./components/Contact";
import Cta2 from "./components/Cta2";

const Homepage = () => {
  return (
    <div>
      <>
        <Hero />
        <ValueProp />
        <Video />
        <ValueProp2 />
        <ValueProp3 />
        <Slider />
        <SocialProof />
        <Cta2/>
        <Paint2 />
      </>
    </div>
  );
};

export default Homepage;
