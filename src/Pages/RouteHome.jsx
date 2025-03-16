import React from "react";
import Hero from '../components/Hero/Hero';
import Programs from '../components/Programs/Programs';
import About from '../components/About/About';
import Title from "../components/Title/Title";
import Services from "../components/Services/Services";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";

function RouteHome() {
    return (
        <>
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
            <Footer/>
        </>
    );
}

export default RouteHome;