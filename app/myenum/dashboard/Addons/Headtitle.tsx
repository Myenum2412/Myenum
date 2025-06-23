import React from 'react'
import { AuroraText } from '@/components/magicui/aurora-text'

function headtitle() {
  return (
    <div>
        <section className="w-full h-screen flex flex-col items-start justify-start px-4 pt-20">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                <AuroraText>Dashboard</AuroraText>
            </h1>
        </section>
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-6">Client Data Entry</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Name */}
    <div>
      <label className="block text-sm font-medium mb-1">Full Name</label>
      <input
        type="text"
        placeholder="Enter full name"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium mb-1">Email Address</label>
      <input
        type="email"
        placeholder="Enter email"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-sm font-medium mb-1">Phone Number</label>
      <input
        type="tel"
        placeholder="Enter phone number"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Company */}
    <div>
      <label className="block text-sm font-medium mb-1">Company Name</label>
      <input
        type="text"
        placeholder="Enter company name"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Address */}
    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-1">Address</label>
      <textarea
        placeholder="Enter address"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />
    </div>

    {/* Submit */}
    <div className="md:col-span-2 text-right">
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default headtitle