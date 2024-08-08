import UpdateVideo from "../section/UpdateVideo";
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

const updateVideo = (props) => {
  return (
    <>
      <Head>
        <title>Update Video</title>
      </Head>
      <UpdateVideo {...props} />
    </>
  );
};

export default updateVideo;
