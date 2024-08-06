// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import KategoriMap from "../section/kategoriMap";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const ManageKategoriMapPage = (props) => {
  return (
    <>
      <Head>
        <title>Manage Map</title>
      </Head>
      <KategoriMap {...props} />
    </>
  );
};

export default ManageKategoriMapPage;
