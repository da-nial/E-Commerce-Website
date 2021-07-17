import React, {useState, useEffect} from 'react';

import backArrow from "../assets/pics/backArrow.png"
import forwardArrow from "../assets/pics/forwardArrow.png"

import "../assets/css/components/sliderStyle.css"


function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [current, setCurrent]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className="slider">
            <img src={forwardArrow} alt="nextSlide" className="slider__arrow slider__arrow--right" onClick={nextSlide}/>
            <img src={backArrow} alt="prevSlide" className="slider__arrow slider__arrow--left" onClick={prevSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slider__slide--active' : 'slider__slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt='slider' className='slider__img'/>
                        )}
                    </div>
                )
            })}
        </section>
    );
}

export default Slider;