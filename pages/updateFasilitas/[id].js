import UpdateFasilitas from "../section/UpdateFasilitas";
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

const updateFasilitas = (props) => {
  return (
    <>
      <Head>
        <title>Update Fasilitas</title>
      </Head>
      <UpdateFasilitas {...props} />
    </>
  );
};

export default updateFasilitas;
