import React from "react";
import Nav from "../Navbar/Nav";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";

const Main = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <NavigateButtons />
      <ProductSection />
    </div>
  );
};

export default Main;
