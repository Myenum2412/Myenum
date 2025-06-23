import React from 'react';
import NavBar from '../Pages/NavBar';
import Footer from '../Pages/Footer';
import BlogSelection from '../Pages/Addons/BlogAddons/BlogSelection';
import { SpotifyAdsCard } from "@/app/blog/BlogPages/SpotifyAds/SpotifyAdsCard";
import { getMetadata } from '@/app/Pages/utils/metadata';
import { GoogleBusinessCard } from './BlogPages/GoogleBusinessAds/GoogleBusinessCard';

export const generateMetadata = async () => {
  return getMetadata("blog");
};

const Page = () => {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <NavBar />
      <BlogSelection children={undefined}/>
      
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/2">
        <SpotifyAdsCard />
        </div>
        <div className="w-full md:w-1/2">
        <GoogleBusinessCard />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Page;
