import React, { useEffect } from 'react'
import GalleryList from '../components/GalleryList'

const Gallery = () => {
  
  useEffect( () => {
    
  })
  return (
    <div className='grid place-items-center'>
      <div className='grid place-items-center mb-10'>
          <h1 className='text-3xl font-bold mb-2'> -Gellery-</h1>
          <h3 className='text-md'>두 사람의 사랑을 담은 순간</h3>
      </div>
      <GalleryList />

          
    </div>
  )
}

export default Gallery