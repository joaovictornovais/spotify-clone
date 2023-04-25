import React from 'react'

const InfoPlaylist = () => {
  return (
    <div className="flex items-end gap-5 mt-5">
      <img src="/playlist1.jpg" alt="Foto da playlist" className="shadow-xl" />
      <div className="flex flex-col justify-between gap-5">
        <span className="font-semibold">Playlist pública</span>
        <strong className="text-8xl">vibin'</strong>
        <div className="flex gap-1.5 text-xs items-center font-semibold">
          <img src="/perfil.jpg" alt="Foto do perfil" className="rounded-full" width={25} />
          <span>João Victor</span>
          <div className="w-1 h-1 bg-white rounded-full"/>
          <span>5 curtidas</span>
          <div className="w-1 h-1 bg-white rounded-full"/>
          <span>123 músicas, <span className="text-zinc-400">6h 21min</span></span>
        </div>
      </div>
    </div>
  )
}

export default InfoPlaylist