import React, { useEffect, useState } from "react";
import CustomContainer from "./customContainer";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";
import { IoIosMap } from "react-icons/io";
import { IoIosImages } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
  };

  return (
    <section
      className={`font-poppins px-5 z-30 transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-white shadow-md"
          : "fixed top-0 left-0 w-full"
      }`}
    >
      <CustomContainer>
        <div className="flex justify-between" style={{ zIndex: "500" }}>
          <div className="flex pt-[21px] pb-[23px]">
            <img
              src="https://pub-266a9ebc4feb4ee1bbca8fde3e6a8744.r2.dev/WhatsApp%20Image%202024-08-27%20at%2023.44.31.jpeg"
              alt="logo kabupaten rembang"
              className="w-[121px]"
            />
            <img
              src="https://pub-42bc368a5a10428f9e8d9eca4d5331e4.r2.dev/logo%20kkn%20punjulharjo%201%20foto.png"
              alt="logo kkn"
              className="w-[61px] ml-[30px] py-[10px]"
            />
          </div>
          <div
            className={`hidden lg:block ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            <Link
              href="/"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Beranda
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/tentang"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Tentang
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/explore-wisata"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Explore Wisata
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/kumpulan-video"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Video
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Blog
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/temukan-kami"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Temukan Kami
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger className="pt-[51px] pb-[50px]">
                <div
                  className={`text-2xl py-1 px-2 ${
                    isSticky ? "text-black" : "text-white"
                  }`}
                >
                  <GiHamburgerMenu />
                </div>
              </SheetTrigger>
              <SheetContent side="top" className="h-[100vh] overflow-scroll">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex pt-[21px] pb-[23px]">
                      <img
                        src="https://pub-266a9ebc4feb4ee1bbca8fde3e6a8744.r2.dev/WhatsApp%20Image%202024-08-27%20at%2023.44.31.jpeg"
                        alt="logo kabupaten rembang"
                        className="w-[71px]"
                      />
                      <img
                        src="https://pub-42bc368a5a10428f9e8d9eca4d5331e4.r2.dev/logo%20kkn%20punjulharjo%201%20foto.png"
                        alt="logo kkn"
                        className="w-[61px] ml-[30px] py-[10px]"
                      />
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoHome />
                        <Link
                          href="/"
                          onClick={() => handleMenuClick("/")}
                          className="ml-2"
                        >
                          Beranda
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <FaInfoCircle />
                        <Link
                          href="/tentang"
                          onClick={() => handleMenuClick("/tentang")}
                          className="ml-2"
                        >
                          Tentang
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoIosImages />
                        <Link
                          href="/explore-wisata"
                          onClick={() => handleMenuClick("/explore-wisata")}
                          className="ml-2"
                        >
                          Explore Wisata
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <BiSolidVideos />
                        <Link
                          href="/kumpulan-video"
                          onClick={() => handleMenuClick("/kumpulan-video")}
                          className="ml-2"
                        >
                          Video
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoIosDocument />
                        <Link
                          href="/blog"
                          onClick={() => handleMenuClick("/blog")}
                          className="ml-2"
                        >
                          Blog
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoIosMap />
                        <Link
                          href="/temukan-kami"
                          onClick={() => handleMenuClick("temukan-kami")}
                          className="ml-2"
                        >
                          Temukan Kami
                        </Link>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Navbar;
