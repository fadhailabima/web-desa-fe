import Hero from "@/pages/section/Hero";
import TentangKami from "./section/TentangKami";
import ApaKataMereka from "./section/ApaKataMereka";
import PreviewVideo from "./section/PreviewVideo";
import PreviewBlog from "./section/PreviewBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <TentangKami />
      <ApaKataMereka />
      <PreviewVideo />
      <PreviewBlog />
    </>
  );
}