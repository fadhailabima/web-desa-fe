// Layout.js
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isSpecialPage = [
    "/login",
    "/dashboard",
    "/video",
    "/manage-blog",
    "/manage-wisata",
    "/tambahKategori",
    "/kategori-map",
    "/tambahKategoriMap",
    "/tambah-blog"
  ].includes(router.pathname);

  return (
    <>
      {!isSpecialPage && <Navbar />}
      <main>{children}</main>
      {!isSpecialPage && <Footer />}
    </>
  );
};

export default Layout;
