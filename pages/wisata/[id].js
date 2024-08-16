import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import { getFacilitiesByIdPublic } from "@/services/wisata";
import TopBlur from "@/components/topBlur";

const WisataPost = () => {
  const router = useRouter();
  const { id, wisataId } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const postData = await getFacilitiesByIdPublic(id);
          setPost(postData);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };
      fetchPost();
    }
  }, [id]);

  // Handle the case where the post is not found
  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <section className="font-poppins">
      <div className="pt-[130px] px-5"></div>
      <TopBlur />
      <CustomContainer>
        <div className="flex flex-col justify-start items-center my-[50px] px-5">
          <h1 className="text-4xl sm:text-5xl font-medium">{post.title}</h1>
          <img
            src={`${post.image_url}`}
            alt={post.title}
            className="w-full h-auto rounded-lg my-12"
          />
          <div className="pt-24 lg:pt-24">
            <div className="text-center">
              <h1 className="titleSm">{post.subtitleSm}</h1>
            </div>
            <div
              className="text-left"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WisataPost;
