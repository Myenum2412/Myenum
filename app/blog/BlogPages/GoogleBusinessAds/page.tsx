import React from 'react'
import Image from 'next/image';
import NavBar from '@/app/Pages/NavBar'
import Footer from '@/app/Pages/Footer'
import { FlipText } from "@/components/magicui/flip-text";
import Blog from "@/assets/blog/MusicAds.jpeg"; // Ensure the path is correct

import { getMetadata } from "@/app/Pages/utils/metadata";
import GoogleBusinessBlogs from './GoogleBusinessBlogs';

export const generateMetadata = async () => {
  return getMetadata("spotifyAds");
};

function page() {
  return (
    <>
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      
      <div className={`w-full h-64 bg-gray-200 p-10 rounded-2xl shadow-md mt-20 relative overflow-hidden flex items-center justify-center`}>
      {/* Background Image */}
      <Image 
      src={Blog} 
      alt="Description" 
      fill 
      style={{ objectFit: "cover" }} 
      className="rounded-2xl"
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
      {/* Centered Text */}
      <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">Google Business...</FlipText>
      </div>
      
      <div className=''>
        <GoogleBusinessBlogs />
      </div>
      
      <Footer />
      </div>

    </>
  )
}

export default page