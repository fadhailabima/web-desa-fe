import UpdateBlog from "../section/UpdateBlog";
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

const updateBlog = (props) => {
  return (
    <>
      <Head>
        <title>Update Blog</title>
      </Head>
      <UpdateBlog {...props} />
    </>
  );
};

export default updateBlog;
