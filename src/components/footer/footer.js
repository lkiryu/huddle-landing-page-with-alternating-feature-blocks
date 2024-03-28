import React from "react";
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <a href="/">
                <img src={logo} alt="logo"></img>
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
                    <i class="fa-regular fa-envelope"></i>
                    <p>example@huddle.com</p>
                    </li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="social">
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
            <p className="copyright">© Copyright 2018 Huddle. All rights reserved.</p>
        </footer>
    )
}

export default Footer