import { Play } from 'lucide-react'
import moment from 'moment/moment'
import React from 'react'

const Recommended = () => {

  const greetings = () => {
    let hour = moment().format('HH')
    if (hour < 12) return 'Bom dia'
    else if (hour < 18) return 'Boa tarde'
    else return 'Boa noite'
  }

  const albums = [
    {
      id: 1,
      name: "Blonde",
      artist: "Frank Ocean",
      image: "/album1.jpg",
      favorites: true,
    },
    {
      id: 2,
      name: "Savage Mode II",
      artist: "21Savage, Metro Boomin",
      image: "/album2.jpg",
      favorites: true,
    },
    {
      id: 3,
      name: "Donda",
      artist: "Kanye West",
      image: "/album3.jpeg",
      favorites: true,
    },
    {
      id: 4,
      name: "Whole Lotta Red",
      artist: "Playboi Carti",
      image: "/album4.png",
      favorites: true,
    },
    {
      id: 5,
      name: "Certified Lover Boy",
      artist: "Drake",
      image: "/album5.jpg",
      favorites: true,
    },
    {
      id: 6,
      name: "Dark Lane Demo Tapes",
      artist: "Drake",
      image: "/album6.jpg",
      favorites: true,
    }
  ]
  return (
    <>
    <h1 className="text-3xl font-bold mt-10">{greetings}</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
      {
        albums.map((album) => (
          <a href="#" className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <img src={album.image} alt={`Capa do álbum ${album.name}, de ${album.artist}`} width={70} height={70}/>
            <strong>{album.name}</strong>
            <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 invisible group-hover:visible ">
              <Play size={20}/>
            </button>
          </a>
        ))
      }
    </div>
    </>
  )
}

export default Recommended