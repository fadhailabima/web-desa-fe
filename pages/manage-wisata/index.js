// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import ManageWisata from "../section/Wisata";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const ManageWisataPage = (props) => {
  return (
    <>
      <Head>
        <title>Manage Wisata</title>
      </Head>
      <ManageWisata {...props} />
    </>
  );
};

export default ManageWisataPage;
