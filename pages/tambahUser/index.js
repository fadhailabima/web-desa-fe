// pages/dashboard.js
import React from "react";
import TambahUser from "../section/TambahUser";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const TambahUserPage = (props) => {
  return (
    <>
      <Head>
        <title>Tambah User</title>
      </Head>
      <TambahUser {...props} />
    </>
  );
};

export default TambahUserPage;
