import React from 'react'

const MadeFor = () => {

  const playlists = [
    {
      id: 1,
      name: "Descobertas da Semana",
      description: "Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.",
      image: "/album7.jpg",
      favorites: false,
    },
    {
      id: 2,
      name: "Daily Mix 1",
      description: "Metro Boomin, XXXTENTACION, Future e mais",
      image: "/album8.jpg",
      favorites: false,
    },
    {
      id: 3,
      name: "Daily Mix 2",
      description: "Gunna, Lil Uzi Vert, Playboi Carti e mais",
      image: "/album9.jpg",
      favorites: false,
    },
    {
      id: 4,
      name: "Daily Mix 3",
      description: "Yunk Vino, Derek, Veigh e mais",
      image: "/album10.jpg",
      favorites: false,
    },
    {
      id: 5,
      name: "Daily Mix 4",
      description: "Kordhell, GRAVECHILL, PRXSXNT FXTURE e mais",
      image: "/album11.jpg",
      favorites: false,
    },
  ]

  return (
    <>
    <div className="flex items-center justify-between mt-10">
      <a href="#" className="text-2xl font-bold hover:underline">Feito para João Victor</a>
      <a href="#" className="text-sm font-bold text-zinc-400 hover:underline">Mostrar tudo</a>
    </div>
    
      <div className="grid grid-cols-5 gap-4 mt-4">
        {
          playlists.map((playlist) => (
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src={playlist.image} className="w-full rounded" alt={`Playlist ${playlist.name}`} width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">{playlist.name}</strong>
              <span className="overflow-hidden text-sm font-semibold text-ellipsis line-clamp-2 text-zinc-500">{playlist.description}</span>
            </a>
          ))
        }
      </div>
    </>
  )
}

export default MadeFor