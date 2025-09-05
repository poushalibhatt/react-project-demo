import React, { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => (
                <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <img
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        alt=""
                    />
                </div>
            ))}

            {/* Prev Button */}
            <button onClick={prevSlide} className="btn-slide prev">
                <img src={leftArrow} alt="Previous" />
            </button>

            {/* Next Button */}
            <button onClick={nextSlide} className="btn-slide next">
                <img src={rightArrow} alt="Next" />
            </button>

            <div className="container-dots">
                {Array.from({ length: dataSlider.length }).map((_, index) => (
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
