import React from "react";
import CustomContainer from "@/components/customContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { apakatamereka } from "../data";

const ApaKataMereka = () => {
  return (
    <section className="my-[39px] mx-5">
      <CustomContainer>
        <h1 className="text-5xl text-primary font-medium text-center">
          Apa Kata Mereka
        </h1>
        <p className="text-center text-xl font-normal my-4">
          Review dari beberapa orang yang pernah kunjung ke Desa Punjulharjo
        </p>
        <div className="max-w-[275px] sm:max-w-[500px] mx-auto my-[30px]">
          <Carousel>
            <CarouselContent>
              {apakatamereka.map((data) => (
                <CarouselItem key={data.key}>
                  <div className="border-2 py-6 px-5 rounded-lg">
                    <div className="flex items-center ">
                      <img
                        src={data.foto}
                        alt="profile picture"
                        className="w-[75px] rounded-full"
                      />
                      <div className="ml-5">
                        <p className="text-2xl font-medium">{data.nama}</p>
                        <p className="text-xl font-medium opacity-75">
                          {data.status}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base">{data.review}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ApaKataMereka;
