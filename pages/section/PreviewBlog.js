import React, { useEffect, useState } from "react";
import CustomContainer from "@/components/customContainer";
import Link from "next/link";
import { getBlogPublic } from "@/services/blog";

const PreviewBlog = () => {
  const [post, setPost] = useState([]);

  const getBlogData = async () => {
    const res = await getBlogPublic();
    if (res) {
      setPost(res);
    } else {
      console.log("Failed to get videos");
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <section className="my-[75px] mx-5">
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
          {post.length > 0 ? (
            post.slice(0, 3).map((data) => (
              <div
                key={data.id}
                className="border-2 p-7 rounded-lg flex items-center flex-col gap-3"
              >
                <img
                  src={`${data.image_url}`}
                  alt="image thumbnail"
                  className="max-w-[100%] h-[270px] rounded-lg"
                />
                <h1 className="text-2xl font-medium">{data.title}</h1>
                <p className="text-lg">{data.titleSm}</p>
                <Link
                  href={`blog/${data.id}`}
                  className="text-md mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg hover:opacity-90"
                >
                  Baca Lebih Lanjut
                </Link>
              </div>
            ))
          ) : (
            <h2 className="text-center text-2xl col-span-full">Tidak ada blog.</h2>
          )}
        </div>
        {post.length > 3 && (
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="text-2xl py-2 px-6 font-medium bg-primary text-white rounded-lg hover:opacity-90"
            >
              Lihat Semua Blog
            </Link>
          </div>
        )}
      </CustomContainer>
    </section>
  );
};

export default PreviewBlog;
