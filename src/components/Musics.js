import { ArrowDownCircle, ChevronDown, Clock3, MoreHorizontal, Pause, Play, Search, UserPlus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Musics = () => {

  const vibin = [
    {
      id: 1,
      image: '/playlists/vibin/vibin_1.jpg',
      song: 'Suicide',
      artist: 'K-CAMP',
      album: 'Wayy 2 Kritical',
      date: '25 de jul. de 2020',
      time: '3:01'
    },
    {
      id: 2,
      image: '/playlists/vibin/vibin_2.jpg',
      song: 'Tap (Feat. Meek Mill)',
      artist: 'NAV, Meek Mill',
      album: 'Bad Habits (Deluxe)',
      date: '25 de jul. de 2020',
      time: '2:28'
    },
    {
      id: 3,
      image: '/playlists/vibin/vibin_3.jpeg',
      song: 'infinity (888) - feat. Joey Bada$$',
      artist: 'XXXTENTACION, Joey Bada$$',
      album: '?',
      date: '25 de jul. de 2020',
      time: '2:57'
    },
  ]

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex justify-between gap-4">
        <div className="flex gap-5 items-center">
          <button className="w-12 h-12 bg-green-500 hover:scale-105 text-black rounded-full flex justify-center items-center"><Pause /></button>
          <ArrowDownCircle className="text-zinc-400 hover:text-white" />
          <UserPlus className="text-zinc-400 hover:text-white" />
          <MoreHorizontal className="text-zinc-400 hover:text-white" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-zinc-400 hover:bg-white/10 hover:text-white cursor-pointer p-2 rounded-full"><Search size={20} /></div>
          <div className="flex gap-1 items-center text-zinc-400 hover:text-white cursor-pointer">
            <span className="text-sm semibold">Ordem personalizada</span>
            <ChevronDown size={15} />
          </div>
        </div>
      </div>
      <table>
        <thead className="text-zinc-400 text-sm font-normal border-b-2 border-b-zinc-500">
          <tr className="text-left">
            <th className="text-center w-[40px]">#</th>
            <th className="w-[420px]">Título</th>
            <th>Álbum</th>
            <th>Adicionado em</th>
            <th><Clock3 size={18} /></th>
          </tr>
        </thead>
        <tbody>
          {
            vibin.map((musica) => (
              <tr className="text-zinc-400 hover:bg-white/10" key={musica.id}>
                <td className="text-center text-zinc-300 p-5 rounded-l-lg">{musica.id}</td>
                <td>
                  <div className="flex gap-4 w-11 h-11 items-center">
                    <img src={musica.image} alt="Capa do Álbum"/>
                    <div className="flex flex-col">
                      <span className="w-[400px] text-zinc-100">{musica.song}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] bg-white/50 px-1.5 py-0.2 text-black rounded">E</span>
                        <span className="text-sm">{musica.artist}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{musica.album}</td>
                <td>{musica.date}</td>
                <td className="rounded-r-lg">{musica.time}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Musics