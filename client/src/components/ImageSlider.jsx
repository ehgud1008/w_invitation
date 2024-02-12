import React, { useState, useEffect } from 'react';
import {useSwipeable} from 'react-swipeable';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
    });
    
    const [imageData, setImageData] = useState({
        seq : 0,
        title : '김철수',
        weddingImages : ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png']
      });

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % imageData.weddingImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + imageData.weddingImages.length) % imageData.weddingImages.length);
    };

    // 자동 슬라이드를 위한 useEffect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 5000); // 5초마다 다음 이미지로 자동 전환

    //     return () => clearInterval(interval);
    // }, [currentIndex]);

    return (
        <div {...handlers} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <button
                className="p-4 bg-white bg-opacity-80 rounded-full mr-4"
                onClick={prevSlide}
            >
                &lt;
            </button>
                <img src={imageData.weddingImages[currentIndex]} alt={`Slide ${currentIndex}`} className="w-4/5 object-contain max-h-[100vh]" />
            <button
                className="p-4 bg-white bg-opacity-80 rounded-full ml-4"
                onClick={nextSlide}
            >
                &gt;
            </button>
            <span className="mt-2 text-white text-opacity-80">
                {currentIndex + 1}/{imageData.weddingImages.length}
            </span>
        </div>
    );
};

export default ImageSlider;
