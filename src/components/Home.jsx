import { useState } from "react";

const Home = () => {

    return (
        <section className='container' id="home">
            <div className='hero'>
                <nav className='hero-nav'>
                    <div className="nav-container">
                        <label htmlFor="menu" className="nav-label">
                            <i className="fa-solid fa-bars hero-icon"></i>
                        </label>
                        <input type="checkbox" id="menu" className="nav-input"/>
                        <div className="nav-menu">
                            <a href="#home" className="nav-item">Home</a>
                            <a href="#about" className="nav-item">About</a>
                            <a href="#skills" className="nav-item">Skills</a>
                            <a href="#experience" className="nav-item">Experience</a>
                            <a href="#projects" className="nav-item">Projects</a>
                            <a href="#contact" className="nav-item">Contact</a>
                        </div>
                    </div>
                </nav>
                <h1 className='hero-title'>Hi Im Leo</h1>
                <p className='hero-occupation'>Front End Developer.</p>
            </div>
        </section>
    );
};

export default Home;