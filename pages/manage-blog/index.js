// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import ManageBlog from "../section/Blog";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const ManageBlogPage = (props) => {
  return (
    <>
      <Head>
        <title>Manage Blog</title>
      </Head>
      <ManageBlog {...props} />
    </>
  );
};

export default ManageBlogPage;
