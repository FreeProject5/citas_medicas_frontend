import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Testimonial/>
      <Footer />
    
    </div>
  );
};

export default Landing;
