import Dashboard from "../section/Dashboard";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const dashboard = (props) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard {...props} />
    </>
  );
};

export default dashboard;
