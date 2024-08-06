import TambahWisata from "../section/TambahFasilitas";
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

const tambahFasilitas = (props) => {
  return (
    <>
      <Head>
        <title>Tambah Fasilitas</title>
      </Head>
      <TambahWisata {...props} />
    </>
  );
};

export default tambahFasilitas;
