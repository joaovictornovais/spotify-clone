import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const UpNav = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <button className="bg-black/20 rounded-full">
          <ChevronLeft/>
        </button>
        <button className="bg-black/20 rounded-full">
          <ChevronRight/>
        </button>
      </div>
      <div className="flex gap-3">
        <button className="font-bold px-5 py-2 border-white border-2 rounded-3xl">Faça upgrade</button>
        <button className="flex items-center gap-3 bg-black/80 p-1 rounded-full">
          <img src="/perfil.jpg" width={40} className="rounded-full" />
          <strong>João Victor</strong>
          <ChevronDown className="mr-1"/>
        </button>
      </div>
    </div>
    
  )
}

export default UpNav