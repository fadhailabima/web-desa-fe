import React from "react";
import CustomContainer from "./customContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="p-5 font-poppins bg-white z-20">
      <CustomContainer>
        <div className="flex justify-between flex-wrap">
          <div className="md:max-w-[25%] mt-12 md:mt-0">
            <div className="flex">
              <img
                src="/rembang-logo.png"
                alt="logo kabupaten rembang"
                className="w-[31px] h-[40px]"
              />
              <img
                src="/kkn-logo.png"
                alt="logo kkn"
                className="w-[31px] py-[5px] ml-[5px]"
              />
            </div>
            <div className="mt-5">
              <p className="text-[16px]">
                8C57+JW8, Jetakbelah, Punjulharjo, Kec. Rembang, Kabupaten
                Rembang, Jawa Tengah 59219
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-12 md:mt-0">
            <h1 className="text-2xl my-2 font-normal">Halaman</h1>
            <Link href="/" className="text-xl my-2 opacity-65 font-normal hover:underline">Beranda</Link>
            <Link href="/tentang" className="text-xl my-2 opacity-65 font-normal hover:underline">Tentang</Link>
            <Link href="/kumpulan-video" className="text-xl my-2 opacity-65 font-normal hover:underline">Kumpulan Video</Link>
            <Link href="/blog" className="text-xl my-2 opacity-65 font-normal hover:underline">Blog</Link>
            <Link href="/temukan-kami" className="text-xl my-2 opacity-65 font-normal hover:underline">Temukan Kami</Link>
          </div>
          <div className="mt-12 md:mt-0">
            <h1 className="text-2xl">Informasi Tambahan</h1>
            <div className="">
              <Link href="https://gallery.desawisatapunjulharjo.com/" target="_" className="mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg">Situs Perahu Kuno</Link>
              <h1 className="py-3">Lokasi Kami</h1>
              <iframe
                className="rounded-lg max-w-[325px] min-h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.45726407609!2d111.40586525813086!3d-6.694598892813016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7723d0842b4577%3A0x5027a76e355dc20!2sPunjulharjo%2C%20Rembang%2C%20Rembang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1721948477626!5m2!1sen!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <h1>Copy Right © Desgined by <Link className="hover:underline" href="https://github.com/aliflikescoding" target="_">Aliflikescoding</Link></h1>
      </CustomContainer>
    </section>
  );
};

export default Footer;
