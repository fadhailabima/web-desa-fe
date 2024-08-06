// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import Video from "../section/Video";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const ManageVideoPage = (props) => {
  return (
    <>
      <Head>
        <title>Manage Video</title>
      </Head>
      <Video {...props} />
    </>
  );
};

export default ManageVideoPage;
