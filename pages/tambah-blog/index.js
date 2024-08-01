// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import TambahBlog from "../section/TambahBlog";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const TambahBlogPage = (props) => {
  return (
    <LayoutAdmin>
      <Head>
        <title>Tambah Blog</title>
      </Head>
      <TambahBlog {...props} />
    </LayoutAdmin>
  );
};

export default TambahBlogPage;
