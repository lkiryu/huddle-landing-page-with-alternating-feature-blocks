import React from "react";
import Header from "../header/header";
import Section from "../section/section";


const HuddleLandingPage = () => {
    return (
        <>
            <Header />

            <Section/>
            <footer className="footer">
                <a href="/">
                    <img src='' alt="logo"></img>
                </a>
                <div className="info">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className="social">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <p className="copyright"></p>
            </footer>
        </>
    )
}

export default HuddleLandingPage