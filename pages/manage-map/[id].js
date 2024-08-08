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
    <div className="z-30">
      <Head>
        <title>Manage Map By Kategori</title>
      </Head>
      <ManageMap {...props} />
    </div>
  );
};

export default manageMap;
