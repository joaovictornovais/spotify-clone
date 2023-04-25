import { Heart, Home } from 'lucide-react'
import { Library, Plus, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Siderbar = () => {
  return (
    <aside className="fixed w-72 bg-zinc-950 p-6 overflow-y-auto h-[calc(100vh-119px)] 
    scrollbar-thumb-gray-300
    scrollbar-thin
    scrollbar-h-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"/>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
        <div className="w-3 h-3 bg-green-500 rounded-full"/>
      </div>
      <nav className="space-y-5 mt-10">
        <Link to="/" className="flex items-center gap-3 font-semibold text-xs text-white">
          <Home />
          Início
        </Link>
        <Link to="/buscar" className="flex items-center gap-3 font-semibold text-xs text-zinc-400">
          <Search />
          Buscar
        </Link>
        <Link to="/biblioteca" className="flex items-center gap-3 font-semibold text-xs text-zinc-400">
          <Library />
          Sua Biblioteca
        </Link>
      </nav>
      <nav className="flex flex-col mt-10 space-y-3">
        <a href="#" className="flex items-center font-semibold text-xs text-zinc-300 gap-3">
          <Plus className="bg-zinc-300 rounded-sm p-1" color="#5A5A5A"/ >
          Criar playlist
        </a>
        <a href="#" className="flex items-center font-semibold text-xs text-zinc-300 gap-3">
          <Heart className="bg-gradient-to-br from-purple-700 to-zinc-200 rounded-sm p-1"/>
          Músicas curtidas
        </a>
      </nav>
      <nav className="mt-5 pt-5 border-t border-zinc-800 flex flex-col gap-2">
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">vibin'</a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">vibezzz</a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">chillin</a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">stars</a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">still vibin'</a>
      </nav>
    </aside>
  )
}

export default Siderbar