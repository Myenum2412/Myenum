import React from 'react'
import NavBar from '../Pages/NavBar'
import Footer from '../Pages/Footer'
import BlogSelection from '../Pages/Addons/BlogAddons/BlogSelection'
import { FollowingPointerDemo } from '../Pages/Addons/BlogAddons/FollowingPointerDemo'
import { getMetadata } from "@/app/Pages/utils/metadata";

export const generateMetadata = async () => {
  return getMetadata("home");
};

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <BlogSelection children={undefined} />
      <FollowingPointerDemo />
      <Footer />
    </div>
  )
}

export default page