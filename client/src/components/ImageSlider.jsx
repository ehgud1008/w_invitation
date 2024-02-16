import React, { useState, useEffect } from 'react';
import {useSwipeable} from 'react-swipeable';

const ImageSlider = ({handleOpenImageSlider}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [imageData, setImageData] = useState({
        seq : 0,
        title : '김철수',
        weddingImages : ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png']
    });
    
    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
    });

    const nextSlide = () => {
        setCurrentIndex(current => (current + 1) % imageData.weddingImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex(current => (current - 1 + imageData.weddingImages.length) % imageData.weddingImages.length);
    };

    // 자동 슬라이드를 위한 useEffect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 5000); // 5초마다 다음 이미지로 자동 전환

    //     return () => clearInterval(interval);
    // }, [currentIndex]);
    return (
        <div {...handlers} className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-95">
            <button
                className="absolute left-5 z-50 p-1 font-bold "
                onClick={prevSlide}
            >
                &lt;
            </button>
                {/* transition-duration: 500ms;
    transition-timing-function: ease; */}
        {/* <div className="flex justify-center w-full max-h-[100vh] transition-all duration-300 ease-in-out"> */}

            <div className="flex justify-center w-full max-h-[100vh] slide-enter-active">
                {/* <img src={imageData.weddingImages[currentIndex]} alt="Previous" className="w-full object-contain" />
                <img src={imageData.weddingImages[currentIndex]} alt="Current" className="w-full object-contain" />
                <img src={imageData.weddingImages[currentIndex]} alt="Next" className="w-full object-contain" /> */}
                {/* <img src={imageData.weddingImages[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full object-contain max-h-[80vh]"/> */}
                <img src={imageData.weddingImages[currentIndex]} alt={`Slide ${currentIndex}`} className="object-contain max-h-[100vh]" />
            </div>
            <button
                className="absolute right-5 z-50 p-1 font-bold "
                onClick={nextSlide}
            >
                &gt;
            </button>
            <span className="absolute bottom-10  text-opacity-80 font-bold ">
                {currentIndex + 1}/{imageData.weddingImages.length}
            </span>

            <button onClick={handleOpenImageSlider} type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
            </button>
        </div>
    );
};

export default ImageSlider;
