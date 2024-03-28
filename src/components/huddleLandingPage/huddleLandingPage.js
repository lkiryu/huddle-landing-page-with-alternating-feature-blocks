import React from "react";
import Header from "../header/header";


const HuddleLandingPage = () => {
    return (
        <>
            <Header/>

            <section className="section">
                <div className="card">
                    <div className="card-info">
                        <h2 className="card-title"></h2>
                        <p className="card-description"></p>
                    </div>
                    <img src='' alt="illustration"></img>
                </div>
                <div className="card">
                    <div className="card-info">
                        <h2 className="card-title"></h2>
                        <p className="card-description"></p>
                    </div>
                    <img src='' alt="illustration"></img>
                </div>
                <div className="card">
                    <div className="card-info">
                        <h2 className="card-title"></h2>
                        <p className="card-description"></p>
                    </div>
                    <img src='' alt="illustration"></img>
                </div>
            </section>
            <div className="ready-to-build">
                <h2></h2>
                <a className="button" href="/"></a>
            </div>
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