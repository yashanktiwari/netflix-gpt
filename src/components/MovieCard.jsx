import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-44 aspect-square pr-4'>
      <img src={IMG_CDN_URL + posterPath} alt="movie-card" srcset="" />
    </div>
  )
}

export default MovieCard