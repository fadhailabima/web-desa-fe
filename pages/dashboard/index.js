// pages/dashboard.js
import React from "react";
import LayoutAdmin from "@/components/LayoutAdmin";
import Dashboard from "../section/Dashboard";
import Head from "next/head";

export async function getServerSideProps(context) {
  return {
    props: {
      isAdmin: true,
    },
  };
}

const DashboardPage = (props) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard {...props} />
    </>
  );
};

export default DashboardPage;
