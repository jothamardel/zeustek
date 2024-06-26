"use client";

import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

// import Modal from "../utils/Modal";
import network from "../images/network.jpg";
// import herovid from "../images/herovid.mp4";

function Explainer() {
  const [videoModalOpen, setVideoModalOpen] = useState(true);

  return (
    <section id="section4">
      <div className="w-full bg-black sm:px-4 ">
        <div className=" md:py-20 md:h-screen  relative ">
          {/* <div className="absolute w-full h-full top-0 left-0 z-20 bg-black opacity-20" /> */}

          <video
            id="explainer-video"
            className="w-full md:h-full md:absolute top-0 left-0 herobackground object-cover mt-10"
            autoPlay={true}
            loop
            muted
            // controls
          >
            <source src="https://res.cloudinary.com/dnrsomsds/video/upload/v1714940933/sokcvygha8pkhnvnz4xg.mp4" />
          </video>
          <div className="relative w-full h-full ">
            <div className="flex items-end justify-center h-full">
              <h2 className=" md:text-4xl text-center text-white md:font-extrabold">
                Empowering Market Women |<br />
                <p className="text-2xl sm:text-lg">
                  Navigating the Digital Frontier of Economic Transformation
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explainer;
