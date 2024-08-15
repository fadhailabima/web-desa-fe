import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import { getVideoAll } from "@/services/video";
import NavbarPadder from "@/components/navbarPadder";
import Link from "next/link";
import TopBlur from "@/components/topBlur";
import VideoPlayer from "@/components/VideoPlayer";

const KumpulanVideo = () => {
  const [video, setVideo] = useState([]);
  const getVideoData = async () => {
    const res = await getVideoAll();
    if (res) {
      setVideo(res);
    } else {
      console.log("Failed to get videos");
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <section className="">
      <TopBlur />
      <NavbarPadder />
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">
          Kumpulan Video
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
          {video.map((data) => (
            <div
              key={data.id}
              className="border-2 p-7 rounded-lg flex items-center flex-col gap-3"
            >
              <VideoPlayer
                src={`${data.video}`}
                className="max-w-[100%] h-[270px] rounded-lg"
              />
              <h1 className="text-2xl font-medium">{data.title}</h1>
              <p className="text-lg">{data.titleSm}</p>
              <Link
                href={`kumpulan-video/${data.id}`}
                className="text-md mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg hover:opacity-90"
              >
                Lihat Lebih Lanjut
              </Link>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default KumpulanVideo;
