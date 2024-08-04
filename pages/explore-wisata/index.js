import React from "react";
import Layout from "@/components/Layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import { kategoriWisata } from "../data";
import Link from "next/link";

const ExploreWisata = () => {
  return (
    <section>
      <NavbarPadder />
      <TopBlur />
      <CustomContainer>
        <div className="px-5 py-[10vh]">
          <h1 className="text-center  text-primary text-5xl sm:text-7xl font-salsa">
            Kategori Wisata
          </h1>
          <div className="flex mt-12 justify-center">
            {kategoriWisata.map((data) => (
              <div key={data.id} className="border-2 shadow-lg p-5 rounded-lg">
                <h1>
                  <Link href={`explorwisata/${data.title}`}>{data.title}</Link>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ExploreWisata;
