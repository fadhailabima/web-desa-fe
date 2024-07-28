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
    <LayoutAdmin includeHeader={false}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard {...props} />
    </LayoutAdmin>
  );
};

export default DashboardPage;