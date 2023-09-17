import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-4 text-md w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black text-lg py-3 font-semibold px-10 rounded-sm hover:opacity-80'>Play</button>
        <button className='bg-gray-500 text-white text-lg font-semibold mx-2 py-3 px-10 rounded-sm bg-opacity-50 hover:opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle