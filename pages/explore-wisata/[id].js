import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CustomContainer from "@/components/customContainer";
import TopBlur from "@/components/topBlur";
import { getWisataPublic } from "@/services/wisata";
import Link from "next/link";

const BlogCategory = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [namaKategori, setNamaKategori] = useState("");

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const postData = await getWisataPublic(id);
          setPost(postData.facilities);
          setNamaKategori(postData.kategori);
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
      <div className="pt-[130px]"></div>
      <TopBlur />
      <CustomContainer>
        <div className="px-5">
          <h1 className="text-4xl sm:text-5xl font-salsa font-medium text-center">
            {namaKategori}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
            {post.length > 0 ? (
              post.map((data) => (
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
                  <p className="text-lg">{data.subtitleSm}</p>
                  <Link
                    href={`/wisata/${data.id}?wisataId=${id}`}
                    className="text-md mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg hover:opacity-90"
                  >
                    Baca Lebih Lanjut
                  </Link>
                </div>
              ))
            ) : (
              <h2 className="text-center text-2xl col-span-full">Tidak ada {namaKategori}.</h2>
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BlogCategory;
