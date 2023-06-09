import { Heart, Home } from 'lucide-react'
import { Library, Plus, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Siderbar = () => {

  const [section, setSection] = useState('home')

  return (
    <aside className="md:fixed w-72 hidden md:inline bg-zinc-950 p-6 overflow-y-auto h-[calc(100vh-119px)] 
    scrollbar-thumb-gray-300
    scrollbar-thin
    scrollbar-h-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"/>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
        <div className="w-3 h-3 bg-green-500 rounded-full"/>
      </div>
      <nav className="space-y-5 mt-10">
        <Link to="/" onClick={() => setSection('home')} className={section === 'home' ? 'flex items-center gap-3 font-semibold text-xs text-white' : 'flex items-center gap-3 font-semibold text-xs text-zinc-400'}>
          <Home />
          Início
        </Link>
        <Link to="/buscar" onClick={() => setSection('search')} className={section === 'search' ? 'flex items-center gap-3 font-semibold text-xs text-white' : 'flex items-center gap-3 font-semibold text-xs text-zinc-400'}>
          <Search />
          Buscar
        </Link>
        <Link to="/biblioteca" onClick={() => setSection('library')} className={section === 'library' ? 'flex items-center gap-3 font-semibold text-xs text-white' : 'flex items-center gap-3 font-semibold text-xs text-zinc-400'}>
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
        <Link to="/playlist" onClick={() => setSection('vibin')}className={section === 'vibin' ? 'text-sm text-zinc-100' : 'text-sm text-zinc-400 hover:text-zinc-100'}>vibin'</Link>
        <Link to="/playlist" onClick={() => setSection('vibezzz')}className={section === 'vibezzz' ? 'text-sm text-zinc-100' : 'text-sm text-zinc-400 hover:text-zinc-100'}>vibezzz</Link>
        <Link to="/playlist" onClick={() => setSection('chillin')}className={section === 'chillin' ? 'text-sm text-zinc-100' : 'text-sm text-zinc-400 hover:text-zinc-100'}>chillin</Link>
        <Link to="/playlist" onClick={() => setSection('stars')}className={section === 'stars' ? 'text-sm text-zinc-100' : 'text-sm text-zinc-400 hover:text-zinc-100'}>stars</Link>
        <Link to="/playlist" onClick={() => setSection('still vibin')}className={section === 'still vibin' ? 'text-sm text-zinc-100' : 'text-sm text-zinc-400 hover:text-zinc-100'}>still vibin'</Link>
      </nav>
    </aside>
  )
}

export default Siderbar