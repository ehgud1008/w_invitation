import React, { useEffect, useState } from 'react'
import GalleryList from '../components/GalleryList'
import ImageSlider from '../components/ImageSlider';

const Gallery = ({seq}) => {
  const [openImageList, setOpenImageList] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [imageData2] = useState({
    seq : 0,
    title : '김철수',
    weddingImages : ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png']
  });
  
  const handleOpenImageSlider = () => {
    setIsImageModalOpen(!isImageModalOpen);
    if(!isImageModalOpen) document.body.style.overflow = 'hidden'; // 스크롤바를 숨깁니다.
    else document.body.style.overflow = 'auto'; // 스크롤바를 다시 표시합니다.
  }

  const handleMoreImage = () => {
    console.log(imageData);
  }

  useEffect( ( ) => {
    setOpenImageList(false);
    if(seq > 0){
      const fetchWeddingImage = async () => {
        try {
          const res = await fetch(`/api/file/${seq}`);
          const data = await res.json();
    
          setImageData(data);
        } catch (error) {
          console.log(error);
        }
      }
      //db에서 가져온 이미지 세팅
      fetchWeddingImage();

      //슬라이드/앨범형 선택
    }
  }, [seq]);

  return (
    <div className='mx-auto bg-white overflow-x-hidden xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3'>
        <div className='grid place-items-center mb-5'>
            <h1 className='tracking-wider text-xs font-bold  text-rose-400 mb-1 uppercase'> Gellery</h1>
            <h3 className='text-lg font-bold text-rose-400'>두 사람의 사랑을 담은 순간</h3>
          {imageData && imageData}
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mx-8'>
          {imageData2.weddingImages.map((image, index) => (
            <img key={index} src={image} className='aspect-[2/3] my-2 w-full hover:opacity-70 rounded-md' onClick={handleOpenImageSlider}/>      
          ))}
        </div>
        <div className='grid place-items-center my-5'>
            <button onClick={handleMoreImage}>사진 더보기</button>
        </div>
        {isImageModalOpen && <ImageSlider handleOpenImageSlider={handleOpenImageSlider}/>}
        {/* {openImageList && <GalleryList />} */}
      </div>
  )
}

export default Gallery