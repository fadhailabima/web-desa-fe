import React from "react";
import { useRouter } from "next/router";
import CustomContainer from "@/components/customContainer";
import TopBlur from "@/components/topBlur";
import { kategoriWisata } from "../data";
import { kumpulanblog } from "../data";
import Link from "next/link";

export async function getStaticPaths() {
  // Generate paths for each category based on the slug
  const paths = kategoriWisata.map((category) => ({
    params: { slug: category.title.toLowerCase().replace(/ /g, "-") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the category that matches the slug
  const category = kategoriWisata.find(
    (cat) => cat.title.toLowerCase().replace(/ /g, "-") === params.slug
  );

  return {
    props: {
      category,
    },
  };
}

const BlogCategory = ({ category }) => {
  const router = useRouter();

  // Handle the case where the category is not found
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section className="font-poppins">
      <div className="pt-[130px]"></div>
      <TopBlur />
      <CustomContainer>
        <div className="px-5">
          <h1 className="text-4xl sm:text-5xl font-salsa font-medium text-center">
            {category.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-[10px] py-12">
            {kumpulanblog.map((data) => (
              <div
                key={data.id}
                className="border-2 p-7 rounded-lg flex items-center flex-col gap-3"
              >
                <img
                  src={`${data.thumbnail}`}
                  alt="image thumbnail"
                  className="max-w-[100%] h-[270px] rounded-lg"
                />
                <h1 className="text-2xl font-medium">{data.judul}</h1>
                <p className="text-lg">{data.deskripsi}</p>
                <Link
                  href={`blog/${data.judul.toLowerCase().replace(/ /g, "-")}`}
                  className="text-md mt-2 inline-block py-2 px-6 bg-primary text-white rounded-lg hover:opacity-90"
                >
                  Baca Lebih Lanjut
                </Link>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BlogCategory;
