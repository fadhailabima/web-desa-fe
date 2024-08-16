import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import { getBlogPublic } from "@/services/blog";
import NavbarPadder from "@/components/navbarPadder";
import Link from "next/link";
import TopBlur from "@/components/topBlur";

const Blog = () => {
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
    <section className="">
      <TopBlur />
      <NavbarPadder />
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
          {post.map((data) => (
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
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default Blog;
