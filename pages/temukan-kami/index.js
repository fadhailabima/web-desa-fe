"use client";
import { useState, useEffect } from "react";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import dynamic from "next/dynamic";
import { getKategoriMapPublic, getAllMap } from "@/services/map";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const handleSelectChange = (value) => {
    setSelectedKategori(value);
  };

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Pilih Kategori Lokasi</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={() => handleSelectChange("all")}
                    style={{
                      fontWeight:
                        selectedKategori === "all" ? "bold" : "normal",
                    }}
                  >
                    Semua Kategori
                  </DropdownMenuItem>
                  {kategoriMap.map((kategori, index) => (
                    <DropdownMenuItem
                      key={index}
                      onSelect={() => handleSelectChange(kategori.id)}
                      style={{
                        fontWeight:
                          selectedKategori === kategori.id ? "bold" : "normal",
                      }}
                    >
                      {kategori.kategori_lokasi}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="my-5">
                <MapsPublic data={filteredLokasi} />
              </div>
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
