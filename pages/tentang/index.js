import React from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";

const tentang = () => {
  return (
    <Layout>
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
                  Tentang kami
                </h1>
                <p className="text-base leading-[160%]">
                  Desa Wisata Punjulharjo adalah destinasi wisata di Kabupaten
                  Pati, Jawa Tengah, yang menawarkan keindahan alam serta
                  kekayaan budaya lokal. Desa ini terkenal dengan pemandangan
                  sawah yang asri, situs bersejarah, dan kerajinan tangan
                  tradisional. Pengunjung dapat menikmati kehidupan pedesaan
                  yang autentik, berinteraksi dengan penduduk setempat, dan
                  mengikuti berbagai kegiatan budaya seperti membatik dan
                  belajar kuliner tradisional. Punjulharjo tidak hanya menjadi
                  tempat rekreasi, tetapi juga pusat edukasi budaya yang
                  mendukung kelestarian warisan tradisional dan pengembangan
                  ekonomi lokal.
                </p>
                <div className="flex flex-wrap my-5 gap-12">
                  <div>
                    <h1 className="text-3xl text-primary">1000</h1>
                    <h2 className="text-xl">Tahun Berdiri</h2>
                  </div>
                  <div>
                    <h1 className="text-3xl text-primary">50.000+</h1>
                    <h2 className="text-xl">Penduduk</h2>
                  </div>
                  <div>
                    <h1 className="text-3xl text-primary">2</h1>
                    <h2 className="text-xl">Tahun Berdiri</h2>
                  </div>
                </div>
              </div>
              <div className="ml-5">
                <img
                  className="rounded-lg"
                  src="/about-picture.jpg"
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
                  Desa Punjulharjo, yang terletak di Kabupaten Pati, Jawa
                  Tengah, memiliki sejarah panjang yang berkaitan dengan
                  perkembangan wilayah pesisir Jawa. Konon, desa ini telah ada
                  sejak zaman kerajaan Mataram, dengan penduduknya yang awalnya
                  hidup dari pertanian dan perikanan. Seiring waktu, Desa
                  Punjulharjo berkembang menjadi pusat kerajinan tangan dan
                  budaya tradisional, mencerminkan kekayaan adat dan sejarah
                  lokal. Pengaruh budaya Jawa sangat kental di desa ini,
                  terlihat dari tradisi seni dan kearifan lokal yang masih
                  dipertahankan hingga kini. Meskipun tidak ada catatan pasti
                  mengenai tanggal berdirinya, Desa Punjulharjo tetap dikenal
                  sebagai bagian penting dari sejarah Kabupaten Pati dan wilayah
                  sekitarnya.
                </p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default tentang;
