"use client";
import { useState, useEffect } from "react";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { getMapByIdPublic } from "@/services/map";

const MapWithRouting = dynamic(() => import("@/components/route-map"), {
  ssr: false,
});

const routeMap = () => {
  const router = useRouter();
  const { id } = router.query;
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [lokasi, setLokasi] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (id) {
      const fetchMap = async () => {
        try {
          const data = await getMapByIdPublic(id);
          setLokasi(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchMap();
    }
  }, [id]);
  return (
    <section className="font-poppins mb-[150px]">
      <NavbarPadder />
      <TopBlur />
      <CustomContainer>
        <div className="container m-5 mx-auto w-full">
          <MapWithRouting position={position} data={lokasi} />
        </div>
      </CustomContainer>
    </section>
  );
};

export default routeMap;
