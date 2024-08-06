import TambahMap from "../section/TambahMap";
import LayoutAdmin from "@/components/LayoutAdmin";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
      isAdmin: true,
    },
  };
}

const tambahMap = (props) => {
  return (
    <>
      <Head>
        <title>Tambah Map</title>
      </Head>
      <TambahMap {...props} />
    </>
  );
};

export default tambahMap;
