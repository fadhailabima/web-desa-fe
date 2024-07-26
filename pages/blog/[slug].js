import { useRouter } from "next/router";
import Layout from "@/components/layout";
import CustomContainer from "@/components/customContainer";
import { kumpulanblog } from "../data";
import TopBlur from "@/components/topBlur";

export async function getStaticPaths() {
  // Generate paths for each blog post based on the slug
  const paths = kumpulanblog.map((blog) => ({
    params: { slug: blog.judul.toLowerCase().replace(/ /g, "-") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the blog post that matches the slug
  const blog = kumpulanblog.find(
    (post) => post.judul.toLowerCase().replace(/ /g, "-") === params.slug
  );

  return {
    props: {
      blog,
    },
  };
}

const BlogPost = ({ blog }) => {
  const router = useRouter();

  // Handle the case where the post is not found
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section className="font-poppins">
        <div className="pt-[130px] px-5"></div>
        <TopBlur />
        <CustomContainer>
          <div className="flex flex-col justify-start items-center my-[50px] px-5">
            <h1 className="text-4xl sm:text-5xl font-medium">{blog.judul}</h1>
            <img
              src={`${blog.thumbnail}`}
              alt={blog.judul}
              className="w-full h-auto rounded-lg my-12"
            />
            <div className="mt-4 text-left">
              {blog.artikel.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg mb-4 leading-[180%]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default BlogPost;
