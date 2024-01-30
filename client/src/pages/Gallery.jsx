import React, { useEffect, useState } from 'react'
import GalleryList from '../components/GalleryList'

const Gallery = () => {
  const [openImageList, setOpenImageList] = useState(false);
  const [imageData, setImageData] = useState({
    seq : 0,
    title : '김철수',
    weddingImages : ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png']
  });
  
  const handleMoreImage = () => {
    setOpenImageList(!openImageList);
    console.log(openImageList);
  }

  useEffect( ( ) => {
    setOpenImageList(false);
    
    //슬라이드/앨범형 선택

    //db에서 가져온 이미지 세팅
  }, []);

  return (
      <div className='mx-auto bg-fafafa sm:w-full md:w-2/4'>
        <div className='grid place-items-center mb-5'>
            <h1 className='text-3xl font-bold mb-2'> -Gellery-</h1>
            <h3 className='text-md'>두 사람의 사랑을 담은 순간</h3>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 mx-8'>
          {imageData.weddingImages.map((image, index) => (
            <img key={index} src={image} className='aspect-[2/3] my-2 w-full hover:opacity-70' onClick={handleMoreImage}/>      
            ))}
        </div>
        <div className='grid place-items-center mt-5'>
            <button onClick={handleMoreImage}>사진 더보기</button>
        </div>
        
        {openImageList && <GalleryList />}
      </div>
  )
}

export default Gallery