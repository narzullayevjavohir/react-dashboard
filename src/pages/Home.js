import React from "react";
import bgImg from "../images/bussnies.jpg";

const Home = () => {
  return (
    <div className="Home flex justify-around items-center h-[100vh] ">
      <h2>Hello</h2>
      <img src={bgImg} alt="bg" className="rounded-xl" />
    </div>
  );
};

export default Home;
