import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:pt-[15%] px-6 md:px-8 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-xl md:text-5xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-md w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black text-lg py-[2px] mt-2 md:mt-0 md:py-3 font-semibold px-2 md:px-10 rounded-sm hover:opacity-80'>Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white text-lg font-semibold mx-2 py-1 md:py-3 px-4 md:px-10 rounded-sm bg-opacity-50 hover:opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle