"use client";

import React from "react";
import Image from "next/image";
import Social from "@/assets/socialmedia.jpg";
import SEO from "@/assets/seo.jpg";
import Ecom from "@/assets/ecom.jpg";
import Amar from "@/assets/profiles/am.jpeg"
import Anu from "@/assets/profiles/anu.jpeg"
import Kis from "@/assets/profiles/kis.jpeg"
import { useRouter } from "next/navigation"; 
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function FollowingPointerDemo() {
  const router = useRouter(); // Initialize Next.js Router

  return (
    <div className="mx-auto w-full flex justify-center">
      <FollowerPointerCard title={<h2 className="text-lg font-bold">Latest Blogs</h2>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {blogData.map((blog) => (
            <div
              key={blog.slug}
              className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 border-solid bg-white transition duration-200 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-gray-100">
                <Image
                  src={blog.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                />
              </div>
              <div className="p-4">
                <TitleComponent title={blog.author} avatar ={blog.authorAvatar} />
                <h2 className="my-2 text-lg font-bold text-zinc-700">{blog.title}</h2>
                <p className="my-2 text-sm font-normal text-zinc-500">{blog.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button
                    onClick={() => router.push(`/blog/${blog.slug}`)} // Navigate to Blog Details Page
                    className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white cursor-pointer transition hover:bg-gray-800"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogData = [
  {
    slug: "seo-strategies-2024",
    author: "Amarnath",
    date: "1st March, 2025",
    title: "Top SEO Strategies for 2024",
    description:
      "Discover the latest SEO techniques that will boost your website rankings and drive more organic traffic this year.",
    image: SEO,
    authorAvatar: Amar,
  },
  {
    slug: "social-media-growth-hacks",
    author: "Kishore G",
    date: "2nd March, 2024",
    title: "Social Media Growth Hacks You Need to Know",
    description:
      "Discover growth hacks to boost followers, engagement, and brand visibility on all major social platforms.",
    image: Social,
    authorAvatar: Kis,
  },
  {
    slug: "elevate-your-style",
    author: "Anupama Balakrishnan",
    date: "3rd March, 2024",
    title: "Style Up Your Everyday E-Commerce Wardrobe",
    description:
      "Discover curated fashion made for everyday confidence — shop bold styles at your favorite e-commerce clothing store",
    image: Ecom, // Replace with correct path and image
    authorAvatar: Anu,
  },
];

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height={30}
      width={30}
      alt={`${title}'s avatar`}
      className="rounded-full border-2 border-white border-solid"
    />
    <p className="text-sm font-medium text-gray-700">{title}</p>
  </div>
);