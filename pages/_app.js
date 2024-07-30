import "@/styles/globals.css";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  if (isAdminPage) {
    return (
      <LayoutAdmin>
        <Component {...pageProps} />
      </LayoutAdmin>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}