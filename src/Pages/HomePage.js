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
        <h1 className="heading">Let's Make Your Event Amazing</h1>
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
      <h1 className="heading">Welcome To The Chic Celebrations</h1>
      <div className="about-dance">
        <div>
          <div className="link">
            <NavLink to="/coreography">
              <img src={image} alt="Coreography"  className="image"/>
              <p className="paragraph">Coreography</p>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/makeup">
              <img src={makeup} alt="Makeup" className="image" />
              <p className="paragraph"> Makeup Artists</p>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="/coreography">
              <img src={costume} alt="Desiners" className="image" />
              <p className="paragraph">Costume Desiners</p>
            </NavLink>
          </div>
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
