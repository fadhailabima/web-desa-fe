import React from "react";
import Layout from "@/components/layout";
import CustomContainer from "@/components/customContainer";
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";

const temukanKami = () => {
  return (
    <Layout>
      <section className="font-poppins mb-[150px]">
        <NavbarPadder />
        <TopBlur />
        <CustomContainer>
          <div>tes</div>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default temukanKami;
