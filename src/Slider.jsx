import React, { useState } from 'react';
import './Slider.css'; 
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/17a2c4ed00866b1a.jpg?q=20'
    ];

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
            <div className="prev" onClick={prevSlide}>&#10094;</div>
            <div className="next" onClick={nextSlide}>&#10095;</div>
        </div>
    );
}

export default Slider;
