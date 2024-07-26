import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default Layout;
