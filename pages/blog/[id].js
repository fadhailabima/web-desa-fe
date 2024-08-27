import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import { getBlogsByIdPublic } from "@/services/blog";
import TopBlur from "@/components/topBlur";

const BlogPost = () => {
  const router = useRouter();

  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const postData = await getBlogsByIdPublic(id);
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

  const date = new Date(post.inputDate);
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="font-poppins">
      <div className="pt-[130px] px-5"></div>
      <TopBlur />
      <CustomContainer>
        <div className="flex flex-col justify-start items-center my-[50px] px-5">
          <h1 className="text-4xl sm:text-5xl font-medium mb-10">
            {post.title}
          </h1>
          <h2 className="text-base text-gray-500">{formattedDate}</h2>
          <h1 className="text-xl text-gray-500">Oleh : {post.titleSm}</h1>
          <img
            src={`${post.image_url}`}
            alt={post.title}
            className="w-1/2 h-auto rounded-lg my-5 mx-auto"
          />
          {/* <div className="pt-24 lg:pt-24"> */}
          <div className="text-center">
            <h2 className="text-lg mb-6 font-extrabold">{post.subtitleSm}</h2>
          </div>
          <div
            className="text-left"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* </div> */}
        </div>
      </CustomContainer>
    </section>
  );
};

export default BlogPost;
