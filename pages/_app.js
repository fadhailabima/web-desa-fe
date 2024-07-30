import "@/styles/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LayoutAdmin from "../components/LayoutAdmin";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // if (isAdminPage) {
  //   return (
  //     <LayoutAdmin includeHeader={!isDashboardPage}>
  //       <Component {...pageProps} />
  //     </LayoutAdmin>
  //   );
  // }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
