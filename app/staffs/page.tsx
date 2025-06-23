import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import { getMetadata } from "@/app/Pages/utils/metadata";
import { DraggableCardDemo } from '@/app/Pages/Addons/StaffsAddons/DraggableCardDemo';

export const generateMetadata = async () => {
  return getMetadata("home");
};

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <div className="w-full h-screen flex items-center justify-center mt-[200px]">
        <DraggableCardDemo />
      </div>
      <Footer />
    </div>
  )
}

export default page