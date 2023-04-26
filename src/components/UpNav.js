import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const UpNav = () => {
  return (
    <div className="flex justify-between gap-3">
      <div className="flex items-center gap-3">
        <button className="bg-black/20 rounded-full">
          <ChevronLeft/>
        </button>
        <button className="bg-black/20 rounded-full">
          <ChevronRight/>
        </button>
      </div>
      <div className="flex gap-3">
        <button className="font-bold px-3 py-1 md:px-5 md:py-2 border-white border-2 rounded-3xl text-sm md:text-lg">Faça upgrade</button>
        <button className="flex items-center gap-3 bg-black/80 p-1 rounded-full">
          <img src="/perfil.jpg" width={40} className="rounded-full" />
          <strong className="whitespace-nowrap overflow-hidden text-ellipsis">João Victor</strong>
          <ChevronDown className="mr-1"/>
        </button>
      </div>
    </div>
    
  )
}

export default UpNav