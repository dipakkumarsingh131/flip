import React from 'react';
import './Electronics.css'; // Import the CSS file for styles

function Electronics() {
    const products = [
        {
            id: 1,
            name: 'Smartphone',
            image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70',
            price: '$299',
        },
        {
            id: 2,
            name: 'Speaker',
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/2/m/1/-original-imahfg2n5pu4duhn.jpeg?q=70',
            price: '$999',
        },
        {
            id: 3,
            name: 'Smartwatch',
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/s/d/-original-imahfh4eytx3dhmq.jpeg?q=70',
            price: '$199',
        },
        {
            id: 4,
            name: 'Tablet',
            image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/h/4/s/-original-imagu2h39539yhry.jpeg?q=70',
            price: '$499',
        },
        {
            id: 5,
            name: 'Headphones',
            image: 'https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/headphone/w/g/r/rockerz-450-boat-original-imag6cqqh49wjfy5.jpeg?q=70',
            price: '$99',
        },
        // Add more products as needed
    ];

    return (
        <div className="electronics-container">
            <h2>Electronics</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Electronics;
