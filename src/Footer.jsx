import React from 'react';
import './Footer.css'; // Import the CSS file for styles

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit libero ac quam finibus, a luctus sapien fermentum.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: example@example.com</li>
                        <li>Phone: +1234567890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 | Your Website Name
            </div>
        </footer>
    );
}

export default Footer;
