import React from 'react'
import Navebar from './Addons/Navebar'
import Headtitle from './Addons/Headtitle'

function page() {
  return (
    <div className="container mx-auto p-4 w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-4">
      <Navebar />
    <div className='w-full'>
      <Headtitle />
    </div>
    
    </div>
  )
}

export default page