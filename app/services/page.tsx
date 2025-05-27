import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import ServicesSelection from '../Pages/Addons/Services/ServicesSelection'
import { getMetadata } from "@/app/Pages/utils/metadata";

export const generateMetadata = async () => {
  return getMetadata("services");
};

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <ServicesSelection children={undefined} />
      <Footer />
    </div>
  )
}

export default page