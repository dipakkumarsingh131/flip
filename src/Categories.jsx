import React from 'react';
import './Categories.css'; // Import the CSS file for styles

function Categories() {
    return (
        <div className="categories-container">
            <div className="categories">
                <a href="#grocery" className="category-item">
                    <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="Grocery" />
                    <span>Grocery</span>
                </a>
                <a href="#electronics" className="category-item">
                    <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="Electronics" />
                    <span>Electronics</span>
                </a>
                <a href="#mobile" className="category-item">
                    <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="Mobile" />
                    <span>Mobile</span>

                </a>
                <a href="#fashion" className="category-item">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" />
                    <span>Fashion</span>
                </a>
            </div>
        </div>
    );
}

export default Categories;
