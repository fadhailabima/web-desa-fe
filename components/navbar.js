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
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <section
      className={`font-poppins px-5 z-30 transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-white shadow-md"
          : "fixed top-0 left-0 w-full"
      }`}
    >
      <CustomContainer>
        <div className="flex justify-between">
          <div className="flex pt-[21px] pb-[23px]">
            <img
              src="/rembang-logo.png"
              alt="logo kabupaten rembang"
              className="w-[61px]"
            />
            <img
              src="/kkn-logo.png"
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
              href="/tentang"
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
            <Sheet>
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
                        src="/rembang-logo.png"
                        alt="logo kabupaten rembang"
                        className="w-[61px]"
                      />
                      <img
                        src="/kkn-logo.png"
                        alt="logo kkn"
                        className="w-[61px] ml-[30px] py-[10px]"
                      />
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoHome />
                        <Link href="/" className="ml-2">
                          Beranda
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <FaInfoCircle />
                        <Link href="/tentang" className="ml-2">
                          Tentang
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <BiSolidVideos />
                        <Link href="/kumpulan-video" className="ml-2">
                          Kumpulan Video
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoIosDocument />
                        <Link href="/blog" className="ml-2">
                          Blog
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex my-4 font-medium items-center text-2xl text-primary bg-gray-100 px-4 py-2 rounded-lg">
                        <IoIosDocument />
                        <Link href="/temukan-kami" className="ml-2">
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
