import React from 'react'
import CustomContainer from "@/components/customContainer";
import { FaSailboat } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { TbChisel } from "react-icons/tb";

const TentangKami = () => {
  return (
    <section className='py-[39px] px-5 font-poppins'>
      <CustomContainer>
        <div className='text-center'>
          <h1 className='text-5xl text-primary font-medium'>Tentang Kami</h1>
          <p className='text-base mb-[113px] mt-[39px] max-w-[669px] mx-auto leading-[180%]'>Kami adalah sebuah desa yang terletak di pesisir utara Jawa Tengah, tepatnya di Kecamatan Rembang, Kabupaten Rembang. Desa kami menawarkan pengalaman wisata unik yang memadukan kekayaan budaya lokal dengan keindahan alam pesisir.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-max gap-[20px]'>
          <div className='text-center flex flex-col items-center'>
            <FaSailboat className='text-[47.5px] mb-[24px] text-primary'/>
            <p className='max-w-[275px]'>Situs arkeologi Perahu Kuno, peninggalan bersejarah yang menjadi bukti kejayaan maritim nusantara.</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <MdOutlineWbSunny className='text-[47.5px] mb-[24px] text-primary'/>
            <p className='max-w-[275px]'>Pantai yang asri dengan pemandangan matahari terbenam yang memukau.</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <IoFastFood className='text-[47.5px] mb-[24px] text-primary'/>
            <p className='max-w-[275px]'>Kuliner khas pesisir yang lezat dan autentik.</p>
          </div>
          <div className='text-center flex flex-col items-center'>
            <TbChisel className='text-[47.5px] mb-[24px] text-primary'/>
            <p className='max-w-[275px]'>Kerajinan tangan lokal yang mencerminkan kearifan budaya setempat.</p>
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default TentangKami