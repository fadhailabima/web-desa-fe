import React, { useEffect, useState } from "react";
import CustomContainer from "@/components/customContainer";
import Link from "next/link";
import { getVideoAll } from "@/services/video";
import VideoPlayer from "@/components/VideoPlayer";

const PreviewVideo = () => {
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
    <section className="my-[75px] mx-5">
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">
          Kumpulan Video
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
          {video.length > 0 ? (
            video.slice(0, 3).map((data) => (
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
                  className="text-lg mt-2 inline-block py-2 px-6 bg-primary text-white rounded-md hover:opacity-90"
                >
                  Lihat Lebih Lanjut
                </Link>
              </div>
            ))
          ) : (
            <h2 className="text-center text-2xl col-span-full">Tidak ada kumpulan video.</h2>
          )}
        </div>
        {video.length > 3 && (
          <div className="flex justify-center">
            <Link
              href="/kumpulan-video"
              className="text-2xl py-2 px-6 font-medium bg-primary text-white rounded-lg hover:opacity-90"
            >
              Lihat Semua Video
            </Link>
          </div>
        )}
      </CustomContainer>
    </section>
  );
};

export default PreviewVideo;
