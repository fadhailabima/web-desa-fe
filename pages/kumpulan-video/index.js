import React from 'react'
import Layout from "@/components/layout";
import CustomContainer from '@/components/customContainer';
import NavbarPadder from "@/components/navbarPadder";

const KumpulanVideo = () => {
  return (
    <Layout>
      <section className='bg-teal-100 h-[200vh]'>
        <NavbarPadder />
        <CustomContainer>
          <h1 className="">KumpulanVideo</h1>
        </CustomContainer>
      </section>
    </Layout>
  )
}

export default KumpulanVideo