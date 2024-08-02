// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import TambahVideo from "../section/TambahVideo";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const TambahVideoPage = (props) => {
  return (
    <LayoutAdmin>
      <Head>
        <title>Tambah Video</title>
      </Head>
      <TambahVideo {...props} />
    </LayoutAdmin>
  );
};

export default TambahVideoPage;
