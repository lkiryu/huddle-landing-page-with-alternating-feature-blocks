import React from "react";
import logoFooter from '../../images/logoFooter.svg'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">
                    <img src={logoFooter} alt="logo"></img>
                </a>
                <div className="info">
                    <ul>
                        <li className="location">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua</p>
                        </li>
                        <li className="phone">
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>+1-543-123-4567</p>
                        </li>
                        <li className="email">
                            <i className="fa-regular fa-envelope"></i>
                            <p>example@huddle.com</p>
                        </li>
                    </ul>
                    <ul>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>What We Do</a></li>
                        <li><a href='/'>FAQ</a></li>
                    </ul>
                    <ul>
                        <li><a href='/'>Career</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact Us</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href='/'><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href='/'><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href='/'><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
                <p className="copyright">© Copyright 2018 Huddle. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer