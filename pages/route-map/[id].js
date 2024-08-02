
import LayoutAdmin from "@/components/LayoutAdmin";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

const RouteMap = dynamic(() => import("@/pages/section/RouteMap"), { ssr: false });

export async function getServerSideProps(context) {
    const { id } = context.params;

    return {
        props: {
          id,
          isAdmin: true,
        },
    };
}

const routeMap = (props) => {
  return (
    <>
      <LayoutAdmin>
        <Head>
          <title>Rute Map</title>
        </Head>
        <RouteMap {...props} />
      </LayoutAdmin>
    </>
  );
};

export default routeMap;
