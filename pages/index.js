import Layout from "@/components/layout";
import Hero from "@/pages/section/Hero";
import TentangKami from "./section/TentangKami";
import ApaKataMereka from "./section/ApaKataMereka";
import PreviewVideo from "./section/PreviewVideo";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TentangKami />
      <ApaKataMereka />
      <PreviewVideo />
    </Layout>
  );
}
