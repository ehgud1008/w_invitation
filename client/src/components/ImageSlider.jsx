import React, { useState, useEffect, useRef } from 'react';
import {useSwipeable} from 'react-swipeable';

const ImageSlider = ({handleOpenImageSlider, imageArray, index}) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    const sliderRef = useRef(null);

    const handlers = useSwipeable({
        onSwiping: () => {
            // 드래그가 시작되면 슬라이더의 스크롤을 비활성화
            const slider = sliderRef.current;
            if (slider) {
                slider.style.overflowX = 'hidden';
            }
        },
        onSwiped: () => {
            // 드래그가 끝나면 슬라이더의 스크롤을 다시 활성화
            const slider = sliderRef.current;
            if (slider) {
                slider.style.overflowX = 'auto';
            }
        },
        onSwipedLeft: () => setCurrentIndex(current => (current + 1) % imageArray.length),
        onSwipedRight: () => setCurrentIndex(current => (current - 1 + imageArray.length) % imageArray.length),
    });
    const nextSlide = () => {
        setCurrentIndex(current => (current + 1) % imageArray.length);
    };

    const prevSlide = () => {
        setCurrentIndex(current => (current - 1 + imageArray.length) % imageArray.length);
    };
    const scrollToSlide = (index) => {
        const slider = sliderRef.current;
        if (slider) {
            const slideWidth = slider.offsetWidth;
            const newScrollLeft = index * slideWidth;
            slider.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToSlide(currentIndex);
    }, [currentIndex]);
    return (
        <div {...handlers} className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-95">
            <button
                className="absolute left-5 z-50 p-1 font-bold "
                onClick={prevSlide}
            >
                &lt;
            </button>
            <div ref={sliderRef} className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth w-full max-h-[100vh]">
                {imageArray.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Slide ${idx}`}
                        className="object-contain max-h-[100vh] snap-center min-w-full"
                    />
                ))}
            </div>
            <button
                className="absolute right-5 z-50 p-1 font-bold "
                onClick={nextSlide}
            >
                &gt;
            </button>
            <span className="absolute bottom-10  text-opacity-80 font-bold ">
                {currentIndex + 1}/{imageArray.length}
            </span>
            <button onClick={handleOpenImageSlider(0)} type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
            </button>

        </div>
    );
};

export default ImageSlider;