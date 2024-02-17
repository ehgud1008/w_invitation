import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider';

const Gallery = ({seq}) => {
  const [visibleLength, setVisibleLength] = useState(4);
  const [index, setIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageData, setImageData] = useState({});

  const imageArray = Object.keys(imageData)
                            .filter(key => key.startsWith('wedding_pic'))
                            .map(key => imageData[key])
                            .filter(url => url != null);

  const handleOpenImageSlider = (index) => () => {
    setIndex(index);
    console.log(isImageModalOpen);
    setIsImageModalOpen(!isImageModalOpen);
    if(!isImageModalOpen) document.body.style.overflow = 'hidden'; // 스크롤바를 숨깁니다.
    else document.body.style.overflow = 'auto'; // 스크롤바를 다시 표시합니다.
  }

  const handleMoreImage = () => {
    setVisibleLength(prevVisibleImages => prevVisibleImages + 4);
  }

  useEffect( ( ) => {
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
    <div className={`mx-auto bg-white overflow-x-hidden xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3 ${visibleLength < imageArray.length ? "" : "pb-10"}`}>
        <div className='grid place-items-center mb-5'>
            <h1 className='tracking-wider text-xs font-bold  text-rose-400 mb-1 uppercase'> Gellery</h1>
            <h3 className='text-lg font-bold text-rose-400'>두 사람의 사랑을 담은 순간</h3>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mx-8'>
          {imageArray && imageArray.slice(0, visibleLength).map( (image, index) => {
            return (
              <img key={index} src={image} className='aspect-[2/3] my-2 w-full hover:opacity-70 rounded-md' onClick={handleOpenImageSlider(index)}/>      
            )
          })}
        </div>
        {visibleLength < imageArray.length && (
          <div className='grid place-items-center my-5'>
            <button onClick={handleMoreImage} className="contents font-bold py-2 px-4 transition">
              사진 더보기
              <img className='w-10 h-8' src="/images/more.png" alt="more" />
            </button>
          </div>
        )}
        {isImageModalOpen && <ImageSlider handleOpenImageSlider={handleOpenImageSlider} imageArray={imageArray} index={index}/>}
      </div>
  )
}

export default Gallery