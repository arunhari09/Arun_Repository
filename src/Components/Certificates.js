import React from "react";
import Slider from "react-slick";
import "./Certificates.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Header";
import Footer from "./Footer";

// 🖼️ Replace these with your actual image imports or URLs
import cert1 from "../Images/cert1.png";
import cert2 from "../Images/cert2.png";
import cert3 from "../Images/cert3.png";

const Certificates = () => {
  const certificates = [cert1, cert2, cert3]; // Add more as needed

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="certificates-page">
      <Header />

      <div className="certificates-container">
        <h2 className="certificates-title">My Certificates</h2>
        <Slider {...settings}>
          {certificates.map((image, index) => (
            <div key={index} className="certificate-slide">
              <img src={image} alt={`Certificate ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Certificates;

