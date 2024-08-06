// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import TambahKategoriMap from "../section/TambahKategoriMap";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const TambahKategoriMapPage = (props) => {
  return (
    <>
      <Head>
        <title>Tambah Kategori Map</title>
      </Head>
      <TambahKategoriMap {...props} />
    </>
  );
};

export default TambahKategoriMapPage;
