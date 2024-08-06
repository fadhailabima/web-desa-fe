import ManageFasilitas from "../section/ManageWisata";
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

const manageFasilitas = (props) => {
  return (
    <>
      <Head>
        <title>Manage Fasilitas</title>
      </Head>
      <ManageFasilitas {...props} />
    </>
  );
};

export default manageFasilitas;
