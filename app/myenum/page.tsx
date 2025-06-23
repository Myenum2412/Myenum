import React from 'react'
import Image from 'next/image'
import Admin from "@/assets/Admin/wp13812097-watch-dogs-hd-desktop-wallpapers.jpg"
import { ShineBorderDemo } from './admin/ShineBorderDemo'

function Page() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={Admin}
        alt="Background"
        fill
        quality={100}
        className="-z-10 object-cover"
      />

      {/* Optional semi-transparent overlay color */}
      <div className="absolute inset-0 -z-10" />

      {/* Centered Content */}
      <div className="z-10">
        <ShineBorderDemo />
      </div>
    </div>
  )
}

export default Page
