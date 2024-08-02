import ManageMap from "../section/ManageMap";
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

const manageMap = (props) => {
  return (
    <>
      <LayoutAdmin>
        <Head>
          <title>Manage Map By Kategori</title>
        </Head>
        <ManageMap {...props} />
      </LayoutAdmin>
    </>
  );
};

export default manageMap;
