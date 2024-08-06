import React, { useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <main>{props.children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default Layout;
