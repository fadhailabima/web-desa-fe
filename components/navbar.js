import React from "react";
import CustomContainer from "./customContainer";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="font-poppins px-5">
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
          <div className="hidden lg:block">
            <Link
              href="/"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group  transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Beranda
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/tentang"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group  transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Tentang
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/kumpulan-video"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group  transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Kumpulan Video
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group  transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Blog
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/temukan-kami"
              className="mr-[25px] pt-[51px] pb-[50px] inline-block relative group  transition-colors duration-300 ease-in-out hover:text-primary"
            >
              Temukan Kami
              <span className="absolute bottom-10 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="block lg:hidden"></div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Navbar;
