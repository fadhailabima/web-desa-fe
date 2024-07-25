import Layout from "@/components/layout";
import CustomContainer from '@/components/customContainer';
import NavbarPadder from "@/components/navbarPadder";

export default function Home() {
  return (
    <Layout>
    <section className='bg-teal-100 h-[200vh]'>
      <NavbarPadder />
      <CustomContainer>
        <h1 className="">Home</h1>
      </CustomContainer>
    </section>
  </Layout>
  );
}
