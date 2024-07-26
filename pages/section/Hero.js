import React, { useState, useEffect } from "react";
import CustomContainer from "@/components/customContainer";
import Link from "next/link";
import NavbarPadder from "@/components/navbarPadder";
import { hero } from "../data";

const Hero = () => {
  const [isVideo, setIsVideo] = useState(true);

  useEffect(() => {
    // Check if the hero.video value is empty or not and update state accordingly
    if (hero.video === "") {
      setIsVideo(false);
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <section className="font-poppins relative">
      <CustomContainer>
        <div className="sm:hidden block">
          <NavbarPadder />
        </div>
        <div className="flex items-center justify-center flex-col py-[25vh] sm:py-[35vh] text-white relative text-center">
          <h1 className="text-5xl sm:text-7xl tracking-[0.15em] font-salsa">
            Desa Wisata Punjulharjo
          </h1>
          <h2 className="text-xl sm:text-4xl my-[25px] sm:my-[50px]">
            Di mana warisan budaya bertemu keindahan alam pedesaan
          </h2>
          <Link
            href="https://gallery.desawisatapunjulharjo.com/"
            target="_blank"
            className="text-xl sm:text-2xl font-semibold mt-2 inline-block py-3 px-6 bg-primary text-white rounded-lg hover:opacity-90"
          >
            Situs Perahu Kuno
          </Link>
        </div>
        <div className="-z-10 absolute inset-0 object-cover w-full h-full bg-black opacity-15"></div>
        {isVideo ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="-z-20 absolute inset-0 object-cover w-full h-full"
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          <>
            <img
              src="/background.png"
              className="-z-20 absolute inset-0 object-cover w-full h-full"
            />
          </>
        )}
      </CustomContainer>
    </section>
  );
};

export default Hero;
