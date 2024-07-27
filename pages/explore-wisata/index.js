import React from 'react';
import Layout from "@/components/layout";
import CustomContainer from '@/components/customContainer';
import NavbarPadder from "@/components/navbarPadder";
import TopBlur from "@/components/topBlur";
import { wisata } from '../data';

const ExploreWisata = () => {
  return (
    <Layout>
      <section>
        <NavbarPadder />
        <TopBlur />
        <CustomContainer>
          <div className='px-5'>
            {wisata.map((data) => (
              <div key={data.id} className='flex border-2 my-12 p-8 rounded-lg shadow-xl'>
                <div className='max-w-[50%]'>
                  <h1 className='text-3xl font-medium my-3'>{data.title}</h1>
                  <p className='text-base leading-[160%]'>{data.description}</p>
                </div>
                <div className='w-full ml-3'>
                  <img className='w-full rounded-lg' src={data.image} alt='wisata image' />
                </div>
              </div>
            ))}
          </div>
        </CustomContainer>
      </section>
    </Layout>
  );
};

export default ExploreWisata;
