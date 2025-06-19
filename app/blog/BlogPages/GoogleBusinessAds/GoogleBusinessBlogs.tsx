import React from 'react';
import Image from 'next/image';
import { getMetadata } from '@/app/Pages/utils/metadata';
import { LinkPreview } from '@/components/ui/link-preview';

export const generateMetadata = async () => {
  return getMetadata("googleBusiness");
};

function GoogleBusinessBlogs() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
        <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">

    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 Get More Customers with <LinkPreview url="https://business.google.com/in/business-profile/"> <span className="text-blue-400">Google Business Profile</span> </LinkPreview> The #1 Growth Tool for Local Businesses You’ve Been Missing</h1>
      
      <div className="font-semibold ">
      <p className="text-lg mb-6">Hey there, business dreamer! 👋<br />Are You Losing Local Customers to Competitors?</p>
      </div>

      <div className="space-y-4 text-2xl leading-7">
                <p className="text-lg text-gray-700 mb-4">
            If your business doesn’t appear on <LinkPreview url="https://business.google.com/in/business-profile/"> <span className="text-blue-400"> Google Search </span> </LinkPreview> or <LinkPreview url="https://www.google.com/maps"> <span className="text-blue-400"> Google Maps </span> </LinkPreview>, you're invisible to potential customers. Whether you're a <LinkPreview url="https://www.google.com/maps"><span className="text-blue-500">startup</span></LinkPreview>, <span className="text-blue-500">e-commerce business</span>, <span className="text-blue-500">local shop</span>, or <span className="text-blue-500">service provider</span>, having an optimized <LinkPreview url="https://business.google.com/in/business-profile/"><span className="text-blue-600 font-semibold">Google Business Profile</span></LinkPreview> is the fastest way to increase visibility, gain credibility, and drive real sales — <span className="italic text-black">without paying for ads</span>.
        </p>

<br />

     <div className="text-4xl font-bold mb-6">
      Coming Soon...
     </div>
     </div>
     </div>
     </div>
     </div>
  )
}

export default GoogleBusinessBlogs