import UpdateMap from "../section/UpdateMap";
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

const updateMap = (props) => {
  return (
    <>
      <Head>
        <title>Update Map</title>
      </Head>
      <UpdateMap {...props} />
    </>
  );
};

export default updateMap;
