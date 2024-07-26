import React from "react";
import CustomContainer from "@/components/customContainer";
import { kumpulanvideo } from "../data";
import Link from "next/link";

const PreviewVideo = () => {
  return (
    <section className="my-[75px] mx-5">
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">
          Kumpulan Video
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
          {kumpulanvideo.slice(0, 3).map((data) => (
            <div key={data.id} className="border-2 p-7 rounded-lg flex items-center flex-col gap-3">
              <img src={`${data.thumbnail}`} alt="image thumbnail" className="max-w-[100%] h-[270px] rounded-lg"/>
              <h1 className="text-2xl font-medium">{data.judul}</h1>
              <p className="text-lg">{data.deskripsi}</p>
              <Link href="" className="text-lg mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg hover:opacity-90">Lihat Lebih Lanjut</Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/kumpulan-video" className="text-3xl py-2 px-6 font-medium bg-primary text-white rounded-lg hover:opacity-90">Lihat Semua Video</Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PreviewVideo;
