import { Play } from 'lucide-react'
import React from 'react'

const Recommended = () => {
  return (
    <>
    <h1 className="text-3xl font-bold mt-10">Boa tarde</h1>
    <div className="grid grid-cols-3 gap-6 mt-5">
      <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album1.jpg" alt="Capa do Álbum Blonde do rapper Frank Ocean " width={70} height={70}/>
        <strong>Blonde</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
      <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album2.jpg" alt="Capa do Álbum Savage Mode II do rapper 21Savage " width={70} height={70}/>
        <strong>Savage Mode II</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
      <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album3.jpeg" alt="Capa do Álbum Donda do rapper Kanye West" width={70} height={70}/>
        <strong>Donda</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
      <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album4.png" alt="Capa do Álbum Whole Lotta Red do rapper Playboi Carti " width={70} height={70}/>
        <strong>Whole Lotta Red</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
      <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album5.jpg" alt="Capa do Álbum Certified Lover Boy do rapper Drake " width={70} height={70}/>
        <strong>Certified Lover Boy</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
      <a href="#" className="bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <img src="/album6.jpg" alt="Capa do Álbum Dark Lane Demo Tapes do rapper Drake" width={70} height={70}/>
        <strong>Dark Lane Demo Tapes</strong>
        <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
          <Play size={20}/>
        </button>
      </a>
    </div>
    </>
  )
}

export default Recommended