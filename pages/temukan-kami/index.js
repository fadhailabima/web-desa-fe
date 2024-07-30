import React from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const temukanKami = () => {
  const position = [-6.1753924, 106.8271528];
  return (
    <Layout>
      <section className="font-poppins mb-[150px]">
        <NavbarPadder />
        <TopBlur />
        <CustomContainer>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "500px" , width: "100%"}}><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' /><Marker position={position}><Popup><p className="text-center">Kantor Pusat</p></Popup></Marker></MapContainer>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default temukanKami;
