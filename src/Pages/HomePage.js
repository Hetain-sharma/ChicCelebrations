import PageNav from "./Pagenav";
import Footer from "./footer";
import { useRef, useEffect } from "react";
import image from "./Dance.jpeg";
import makeup from "./Makeup.jpeg";
import costume from "./costume.jpeg";

import "../CSS/HomePage.css";
import { NavLink } from "react-router-dom";
export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("autoplay prevented : ", error);
      });
    }
  });
  return (
    <div className="main">
      <PageNav />
      <div className="slide">
        <h1 className="heading">
          From Dance Moves to Dream Looks—We've Got You Covered!
        </h1>
      </div>
      <div className="video-div">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/1f91a268a90f420b8e1959343ae041b2.mp4"
          width="100%"
          height="50%"
          loop
          muted
          ref={videoRef}
        />
      </div>
      <div className="homepage-info">
        <h1 className="heading">
          {" "}
          Transform your special day into an unforgettable experience! Whether
          it's a wedding, engagement, or any occasion worth celebrating, we
          bring the magic to your doorstep. Our expert dance instructors will
          help you shine on the dance floor, while our professional costume
          designers and makeup artists add the finishing touches to make your
          event extraordinary. Let us handle the details so you can focus on
          making memories
        </h1>
      </div>
      <div className="about-dance">
        <div className="link">
          <div className="link-info">
            <h1 className="text-info">
              Let our expert choreographers turn your special moment into a
              captivating performance. Whether it's a wedding or any grand
              occasion, we'll help you shine with dance routines crafted just
              for you.
            </h1>
            <NavLink to="/coreography">
              <p className="text-para"> Know More..</p>
            </NavLink>
          </div>
          <img src={image} alt="Coreography" className="image" />
        </div>
        <div className="link">
          <img src={makeup} alt="makeup" className="image" />
          <div className="link-info">
            <h1 className="text-info">
              Let our expert makeup artists elevate your beauty with flawless,
              long-lasting looks perfect for any special occasion. From subtle
              elegance to bold glamour, we ensure you'll look and feel
              extraordinary on your big day.
            </h1>
            <NavLink to="/makeup">
              <p className="text-para"> Know More..</p>
            </NavLink>
          </div>
        </div>
        <div className="link">
          <div className="link-info">
            <h1 className="text-info">
              Our skilled costume designers craft custom outfits that perfectly
              capture your style and theme. Whether it's traditional or modern,
              we create stunning looks tailored to make your special day
              unforgettable.
            </h1>
            <NavLink to="/costume">
              <p className="text-para"> Know More..</p>
            </NavLink>
          </div>
          <img src={costume} alt="Costume designs" className="image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
/*
import React, { useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Auto-play was prevented
        console.error('Auto-play prevented: ', error);
      });
    }
  }, []);

  return (
    <video ref={videoRef} autoPlay muted>
      <source src="your_video_file.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
*/
