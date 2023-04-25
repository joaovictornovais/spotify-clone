import React from 'react'
import UpNav from '../components/UpNav'
import Recommended from '../components/Recommended'
import MadeFor from '../components/MadeFor'
import You from '../components/You'
import RecentlyPlayed from '../components/RecentlyPlayed'
import FavoriteArtists from '../components/FavoriteArtists'

const Inicio = () => {
  return (
    <>
      <UpNav />
      <Recommended/>
      <MadeFor />
      <You />
      <RecentlyPlayed />
      <FavoriteArtists />
    </>
  )
}

export default Inicio