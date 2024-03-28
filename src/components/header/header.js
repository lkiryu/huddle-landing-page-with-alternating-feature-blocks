import React from "react";
import illustrationMockups from '../../images/illustration-mockups.svg'
import logo from '../../images/logo.svg'

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>

                <a className="button" href="/">Try It Free</a>
            </div>
            <div className="hero">
                <div className="info">
                    <h1 className="title">Build The Community Your Fans Will Love</h1>
                    <p className="description">Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                        Create connections with your users as you engage in genuine discussion.</p>
                    <a className="button" href="/">Get Started For Free</a>
                </div>
                <img src={illustrationMockups} alt="illustration-mockups"></img>
            </div>
        </header>
    )
}

export default Header