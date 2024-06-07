import React from 'react';
import './Header.css'; 

function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <h1 className="logo">Flipkart</h1>

                <div className="search-bar">
                    <input type="text" placeholder="Search for products, brands and more" />
                    <button>Search</button>
                </div>
                <nav className="nav-links">
                    <a href="#login">Login</a>
                    <a href="#cart">Cart</a>
                    <a href="#bas">Become a seller</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
