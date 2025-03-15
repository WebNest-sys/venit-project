import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title
          subTitle="Staffing Services"
          title="Our Capabilites and domain expertise"
        />
        <Services />
        <Title subTitle="Our Partners" />
        <Partners />
      </div>
    </div>
  );
};

export default App;
