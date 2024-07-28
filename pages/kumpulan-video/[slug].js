import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import { kumpulanvideo } from "../data";
import TopBlur from "@/components/topBlur";

export async function getStaticPaths() {
  // Generate paths for each video post based on the slug
  const paths = kumpulanvideo.map((video) => ({
    params: { slug: video.judul.toLowerCase().replace(/ /g, "-") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the video post that matches the slug
  const video = kumpulanvideo.find(
    (post) => post.judul.toLowerCase().replace(/ /g, "-") === params.slug
  );

  return {
    props: {
      video,
    },
  };
}

const VideoPost = ({ video }) => {
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
            <h1 className="text-4xl sm:text-5xl font-medium">{video.judul}</h1>
            <video
              controls
              src={video.video}
              className="w-full h-auto rounded-lg my-12"
            />
            <div className="mt-4 text-left">
              {video.artikel.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg mb-4 leading-[180%]"
                >
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

export default VideoPost;
