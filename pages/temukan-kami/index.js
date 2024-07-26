import React from "react";
import Layout from "@/components/layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const TemukanKami = () => {
  return (
    <Layout>
      <section>
        <TopBlur />
        <NavbarPadder />
        <CustomContainer>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default TemukanKami;
