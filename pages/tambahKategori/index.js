// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import TambahKategori from "../section/TambahKategori";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const TambahKategoriPage = (props) => {
  return (
    <>
      <Head>
        <title>Tambah Kategori</title>
      </Head>
      <TambahKategori {...props} />
    </>
  );
};

export default TambahKategoriPage;
