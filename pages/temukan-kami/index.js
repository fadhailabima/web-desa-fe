"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import dynamic from "next/dynamic";
import { getKategoriMapPublic, getAllMap } from "@/services/map";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MapsPublic = dynamic(() => import("@/components/mapsPublic"), {
  ssr: false,
});

const temukanKami = () => {
  const [lokasi, setLokasi] = useState([]);
  const [kategoriMap, setKategoriMap] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState("all");
  const getKategoriData = async () => {
    const res = await getKategoriMapPublic();
    if (res) {
      setKategoriMap(res);
    } else {
      console.log("Failed to get videos");
    }
  };

  const getAllMapData = async () => {
    const res = await getAllMap();
    if (res) {
      setLokasi(res);
    } else {
      console.log("Failed to get all map data");
    }
  };

  useEffect(() => {
    getKategoriData();
    getAllMapData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedKategori(event.target.value);
  };

  useEffect(() => {
    console;
  }, []);

  const filteredLokasi =
    selectedKategori === "all"
      ? lokasi
      : lokasi.filter((l) => {
          return Number(l.catlocs_id) === Number(selectedKategori);
        });
  return (
    <section className="font-poppins mb-[150px]">
      <NavbarPadder />
      <TopBlur />
      <CustomContainer>
        <div className="container z-30 m-5 mx-auto w-full">
          {filteredLokasi.length > 0 ? (
            <>
              <Select onChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {kategoriMap.map((kategori, index) => (
                    <SelectItem key={index} value={kategori.id}>
                      {kategori.kategori_lokasi}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <MapsPublic data={filteredLokasi} />
            </>
          ) : (
            <h2 className="text-center text-2xl">Tidak ada titik lokasi.</h2>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default temukanKami;
