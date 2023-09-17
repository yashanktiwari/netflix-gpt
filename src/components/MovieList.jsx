import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6'>
      <h1 className='text-white pb-2 text-2xl'>{title}</h1>
      <div className='pb-6 flex overflow-x-scroll'>
        <div className='flex'>
          {
            movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList