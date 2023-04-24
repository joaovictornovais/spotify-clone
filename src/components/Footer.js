import { Play, Shuffle, SkipBack, SkipForward } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Laptop2, LayoutList, Mic2, Repeat, Volume1 } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed w-full bottom-0 bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
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
            <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
                  <Play size={20}/>
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
            
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
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
      </footer>
  )
}

export default Footer