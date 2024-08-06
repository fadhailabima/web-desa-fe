import "@/styles/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LayoutAdmin from "../components/LayoutAdmin";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const mainPages = ["/"];

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (mainPages.includes(url)) {
        // Do something else here
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (mainPages.includes(router.pathname)) {
      // Do something else here
    }
  }, [router.pathname]);

  // if (isAdminPage) {
  //   return (
  //     <LayoutAdmin includeHeader={!isDashboardPage}>
  //       <Component {...pageProps} />
  //     </LayoutAdmin>
  //   );
  // }

  const renderLayout = () => {
    const LayoutWrapper = pageProps.isAdmin ? LayoutAdmin : Layout;
    return (
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    );
  };

  return renderLayout();
}
