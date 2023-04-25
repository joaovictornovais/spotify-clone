import React from 'react'

const RecentlyPlayed = () => {
  const playlists = [
    {
      id: 1,
      name: 'vibezzz',
      artist: 'harveey',
      type: 'playlist',
      favorite: true,
      image: '/album12.jpg'
    },
    {
      id: 2,
      name: 'Blonde',
      artist: 'Frank Ocean',
      type: 'album',
      image: '/album1.jpg'
    },
    {
      id: 3,
      name: 'Ivy',
      artist: 'Frank Ocean',
      type: 'song',
      image: 'album1.jpg'
    },
    {
      id: 4,
      name: 'The Perfect Girl',
      artist: 'Mareux',
      type: 'song',
      image: 'album13.jpg'
    }
  ]

  return (
    <>
    <div className="flex items-center justify-between mt-10">
      <a href="#" className="text-2xl font-bold hover:underline">Tocados recentemente</a>
      <a href="#" className="text-sm font-bold text-zinc-400 hover:underline">Mostrar tudo</a>
    </div>
    
      <div className="grid grid-cols-4 gap-4 mt-4">
        {
          playlists.map((playlist) => (
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <img src={playlist.image} className="w-full rounded" alt={`Playlist ${playlist.name}`} width={10} height={10}/>
              <strong className="max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis font-semibold">{playlist.name}</strong>
              <span className="overflow-hidden text-ellipsis line-clamp-2 font-semibold text-zinc-400">{playlist.type === 'playlist' ? `De ${playlist.artist}` : `${playlist.artist}`}</span>
            </a>
          ))
        }
      </div>
    </>
  )
}

export default RecentlyPlayed