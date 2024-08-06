// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import ManageUser from "../section/ManageUser";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const ManageUserPage = (props) => {
  return (
    <>
      <Head>
        <title>Manage User</title>
      </Head>
      <ManageUser {...props} />
    </>
  );
};

export default ManageUserPage;
