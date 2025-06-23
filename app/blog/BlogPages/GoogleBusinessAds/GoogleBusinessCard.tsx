import React from "react";
import Image from "next/image";
import GbMAdsImage from "@/assets/blog/GbM.png";
import { PinContainer } from "@/components/ui/3d-pin";

export const GoogleBusinessCard = () => {
  return (

    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="Google Business" href="/blog/BlogPages/GoogleBusinessAds">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Google Business 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Reach the Right Audience with Spotify
            </span>
          </div>
          <div className="w-full h-20 mt-4">
            <Image
              src={GbMAdsImage}
              alt="Google Business Myenum"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br to-blue-500 from-transparent" />
        </div>
      </PinContainer>
    </div>

);
};
