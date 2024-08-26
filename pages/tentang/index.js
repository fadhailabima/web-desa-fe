import React from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";

const tentang = () => {
  return (
    <section className="font-poppins mb-[150px]">
      <NavbarPadder />
      <TopBlur />
      <CustomContainer>
        <div className="px-5">
          <div className="text-center my-12">
            <h1 className="text-2xl capitalize">Tentang Desa Punjulharjo</h1>
            <h1 className="text-4xl font-medium my-8 capitalize text-primary">
              Kenali lebih jauh tentang Desa Punjulharjo!
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="my-5 lg:my-0 lg:max-w-[50%]">
              <h1 className="text-3xl my-5 capitalize font-medium">
                Tentang Desa
              </h1>
              <p className="text-base leading-[160%]">
                Desa Punjulharjo adalah destinasi wisata yang menarik dengan
                potensi pengembangan yang sangat besar. Keberadaan situs
                sejarah, keindahan alam, dan kekayaan budaya menjadikan desa ini
                sebagai tempat yang unik dan layak untuk dikunjungi.
              </p>
              <div className="flex flex-wrap my-5 gap-12">
                <div>
                  <h1 className="text-3xl text-primary">
                    {" "}
                    Secara geografis, desa ini berada di
                  </h1>
                  <h2 className="text-xl">
                    111°00'-111°30' Bujur Timur (BT) dan 6°30'-7°1774.
                  </h2>
                </div>
              </div>
            </div>
            <div className="ml-5">
              <img
                className="rounded-lg"
                src="https://pub-42bc368a5a10428f9e8d9eca4d5331e4.r2.dev/63a949811f5c8.jpg"
                alt="foto about"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse my-12">
            <div className="lg:min-w-[35%]">
              <img
                src="/boat.jpeg"
                alt="boat"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="lg:max-w-[65%] lg:ml-5 py-5">
              <h1 className="text-3xl font-medium my-2">
                Sejarah Desa Punjulharjo
              </h1>
              <p className="text-base my-4 border-primary border-l-8 pl-5">
                Desa Punjulharjo adalah bukti nyata bahwa Indonesia memiliki
                kekayaan sejarah dan budaya yang sangat luar biasa. Penemuan
                perahu kuno telah membuka mata dunia akan pentingnya wilayah
                Nusantara dalam sejarah peradaban maritim. Dengan potensi wisata
                yang sangat besar, Desa Punjulharjo diharapkan dapat menjadi
                salah satu destinasi wisata sejarah yang paling populer di
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default tentang;
