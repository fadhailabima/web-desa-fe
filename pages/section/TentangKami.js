import React from "react";
import CustomContainer from "@/components/customContainer";
import { FaSailboat } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { TbChisel } from "react-icons/tb";

const TentangKami = () => {
  return (
    <section className="py-[39px] px-5 font-poppins">
      <CustomContainer>
        <div className="text-center">
          <h1 className="text-5xl text-primary font-medium">Tentang Kami</h1>
          <p className="text-base mb-[113px] mt-[39px] max-w-[669px] mx-auto leading-[180%]">
            Desa Punjulharjo adalah sebuah desa yang terletak di Kecamatan
            Rembang, Kabupaten Rembang, Jawa Tengah. Desa ini semakin dikenal
            sebagai destinasi wisata yang menarik, terutama karena keindahan
            alamnya yang masih asri dan kekayaan budaya lokalnya yang unik. Team
            KKN-T Undip Unisvet Melakukan petualangan seru membangun desa
            bersama! Dari kampus ke desa, kami datang membawa semangat
            perubahan. Punjulharjo, desa yang menginspirasi kami untuk terus
            belajar dan berkarya.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 auto-rows-max gap-[20px]">
          <div className="text-center flex flex-col items-center">
            <FaSailboat className="text-[47.5px] mb-[24px] text-primary" />
            <p className="max-w-[275px]">
              Situs perahu kuno adalah jendela masa lalu yang memungkinkan kita
              mengintip kehidupan maritim di zaman dahulu. Dengan mempelajari
              situs ini, kita dapat lebih menghargai warisan budaya maritim dan
              menjaga kelestariannya untuk generasi mendatang.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <MdOutlineWbSunny className="text-[47.5px] mb-[24px] text-primary" />
            <p className="max-w-[275px]">
              Pantai Karang Jahe Surga tersembunyi di Rembang dengan pesona alam
              yang memukau. Pantai ini menawarkan keindahan yang khas dengan
              pasir putih lembut, deburan ombak yang tenang, dan pemandangan
              matahari terbenam yang spektakuler.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TentangKami;
