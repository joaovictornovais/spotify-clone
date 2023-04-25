import React from 'react'

const You = () => {
  const playlists = [
    {
      id: 1,
      name: "No Repeat",
      description: "As músicas que você está curtindo agora",
      image: "/album14.jpg",
      favorites: false,
    },
    {
      id: 2,
      name: "Daily Mix 1",
      description: "Metro Boomin, XXXTENTACION, Future e mais",
      image: "/album15.jpg",
      favorites: false,
    },
    {
      id: 3,
      name: "Daily Mix 2",
      description: "Gunna, Lil Uzi Vert, Playboi Carti e mais",
      image: "/album16.jpg",
      favorites: false,
    },
    {
      id: 4,
      name: "Daily Mix 3",
      description: "Yunk Vino, Derek, Veigh e mais",
      image: "/album17.jpg",
      favorites: false,
    }
  ]

  return (
    <>
    <div className="flex items-center justify-between mt-10">
      <a href="#" className="text-2xl font-bold hover:underline">100% Você</a>
      <a href="#" className="text-sm font-bold text-zinc-400 hover:underline">Mostrar tudo</a>
    </div>
    
      <div className="grid grid-cols-5 gap-4 mt-4">
        {
          playlists.map((playlist) => (
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src={playlist.image} className="w-full rounded" alt={`Playlist ${playlist.name}`} width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">{playlist.name}</strong>
              <span className="overflow-hidden font-semibold text-sm text-ellipsis line-clamp-2 text-zinc-500">{playlist.description}</span>
            </a>
          ))
        }
      </div>
    </>
  )
}
export default You