import React from 'react';
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import rc from "../images/react.svg";

const Skills = () => {
    return (
        <section className='container'>
            <div className="skills-container">
                <div className='skills-img-container'>
                    <div className='item'>
                        <img src={html} className="skills-img"/>
                    </div>
                    <div className='item'>
                        <img src={css} className="skills-img"/>
                    </div>
                    <div className='item'>
                        <img src={js} className="skills-img"/>
                    </div>
                    <div className='item'>
                        <img src={rc} className="skills-img"/>
                    </div>
                </div>
                <div className='skills-title-container'>
                    <h2 className='skills-letter-title'>S</h2>
                    <h2 className='skills-letter-title'>K</h2>
                    <h2 className='skills-letter-title'>I</h2>
                    <h2 className='skills-letter-title'>L</h2>
                    <h2 className='skills-letter-title'>L</h2>
                    <h2 className='skills-letter-title'>S</h2>
                </div>
            </div>
        </section>
    );
};

export default Skills;