import React from 'react';
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import rc from "../images/react.svg";
import wave1 from "../images/top-wave-mobile.svg";
import wave2 from "../images/bottom-wave-mobile.svg";

const Skills = () => {
    return (
        <section className='container'>
            <h2 className='title skill--title'>SKILLS</h2>
            <div className="skills-container">
                <div className='item-container'>
                    <img src={html}></img>
                </div>
                <div className='item-container'>
                    <img src={css}></img>
                </div>
                <div className='item-container'>
                    <img src={js}></img>
                </div>
                <div className='item-container'>
                    <img src={rc}></img>
                </div>
            </div>
        </section>
    );
};

export default Skills;