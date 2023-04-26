import { Home, Library, Play, Search, Shuffle, SkipBack, SkipForward, Target } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Laptop2, LayoutList, Mic2, Repeat, Volume1 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const WebPlayer = () => {
  return (
    <footer className="w-full bottom-0 fixed">
      <div className="md:flex hidden  bg-zinc-900 border-t border-zinc-700 p-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/album1.jpg" alt="Capa do Álbum Blonde do rapper Frank Ocean " width={70} height={70}/>
          <div className="flex flex-col">
            <strong className="font-semibold">Ivy</strong>
            <span className="text-sm text-zinc-400 font-semibold">Frank Ocean</span>
          </div>
          <Heart size={23} className="text-zinc-400 ml-4"/>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6 items-center">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto"><Play size={20}/></button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-[calc(70vw-400px)] bg-zinc-600">
              <div className="bg-zinc-200 w-[3vw] h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">4:09</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume1 />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-between py-8 px-3 text-zinc-400 bg-gradient-to-t from-black gap-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full bg-zinc-700 rounded-md ">
            <div className="flex items-center gap-3 p-3">
              <img src="/album1.jpg" alt="Capa do Álbum Blonde" className="w-[50px] h-[50px] rounded" />
              <div className="flex flex-col text-sm font-semibold">
                <strong className="text-zinc-100">Ivy</strong>
                <span>Frank ocean</span>
              </div>
            </div>
            <div className="flex gap-3 text-zinc-100 p-3">
              <Laptop2 className="text-zinc-400" />
              <Heart />
              <Play />
            </div>
          </div>
          <div className="h-1 rounded-full w-[calc(100vw-50px)] bg-zinc-600">
            <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
          </div>
        </div>
        
        <nav className="flex gap-5 items-center justify-between w-full">
          <Link to="/" className="flex flex-col items-center ">
            <Home />
            <span className="text-sm">Início</span>
          </Link>
          <Link to="/buscar" className="flex flex-col items-center">
            <Search />
            <span className="text-sm">Buscar</span>
          </Link>
          <Link to="/biblioteca" className="flex flex-col items-center">
            <Library />
            <span className="text-sm">Bilbioteca</span>
          </Link>
          <Link to="/" className="flex flex-col items-center">
            <Target />
            <span className="text-sm">Premium</span>
          </Link>
        </nav> 
      </div>
      </footer>
  )
}

export default WebPlayer