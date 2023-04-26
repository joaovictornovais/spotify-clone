import React from 'react'

const FavoriteArtists = () => {
  const playlists = [
    {
      id: 1,
      name: "Kendrick Lammar",
      description: "Artista",
      image: "/artist1.jpg",
      favorites: false,
    },
    {
      id: 2,
      name: "Baby Keem",
      description: "Artista",
      image: "/artist2.jpg",
      favorites: false,
    },
    {
      id: 3,
      name: "XXXTENTACION",
      description: "Artista",
      image: "/artist3.jpg",
      favorites: false,
    },
    {
      id: 4,
      name: "21 Savage",
      description: "Artista",
      image: "/artist4.jpg",
      favorites: false,
    }
  ]

  return (
    <>
    <div className="flex items-center justify-between mt-10">
      <a href="#" className="text-2xl font-bold hover:underline">Seus artistas favoritos</a>
      <a href="#" className="text-sm font-bold text-zinc-400 hover:underline">Mostrar tudo</a>
    </div>
    
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {
          playlists.map((playlist) => (
            <a href="#" className="bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src={playlist.image} className="w-full rounded-full" alt={`Playlist ${playlist.name}`}/>
              <strong className="max-w-[150px] mt-2 whitespace-nowrap overflow-hidden text-ellipsis font-semibold">{playlist.name}</strong>
              <span className="overflow-hidden font-semibold text-sm text-ellipsis line-clamp-2 text-zinc-500">{playlist.description}</span>
            </a>
          ))
        }
      </div>
    </>
  )
}

export default FavoriteArtists