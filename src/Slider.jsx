import React, { useState } from 'react';
import imageArray from './assets/images';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        // setSlideIndex(slideIndex !== imageArray.length ? slideIndex + 1 : 1);
        setSlideIndex(prev => 
            prev === imageArray.length ? 1 : prev + 1);
    };

    const prevSlide = () => {
        // setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : imageArray.length);
        setSlideIndex(prev => 
            prev === 1 ? imageArray.length : prev - 1
        );
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="container-slider">
            {imageArray.map((img, index) => (
                <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img src={img} alt={`Slide ${index + 1}`} />
                </div>
            ))}

            <button onClick={prevSlide} className="btn-slide prev">
                <img src={leftArrow} alt="Previous" />
            </button>
            <button onClick={nextSlide} className="btn-slide next">
                <img src={rightArrow} alt="Next" />
            </button>

            <div className="container-dots">
                {imageArray.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}
