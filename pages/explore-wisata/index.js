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
          <div className="flex flex-wrap mt-12 justify-center gap-5 ">
            {kategoriWisata.map((data) => (
              <div
                key={data.id}
                className="border-2 shadow-lg p-5 rounded-lg cursor-pointer hover:text-primary"
              >
                <Link href={`explore-wisata/${data.title.toLowerCase().replace(/ /g, "-")}`}>
                  <h1 className="text-xl">{data.title}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ExploreWisata;
