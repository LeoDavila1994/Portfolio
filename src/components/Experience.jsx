import React from 'react';
import udemy from "../images/udemy-icon.svg";
import academlo from "../images/academlo.jpg";
import platzi from "../images/platzi.jpg";
import front from "../images/front-m.png";

const Experience = () => {
    return (
        <section className='container' id='experience'>
            <div className="xp-container">
                <div className='xp-title-container'>
                    <h2 className='xp-letter-title'>E</h2>
                    <h2 className='xp-letter-title'>X</h2>
                    <h2 className='xp-letter-title'>P</h2>
                    <h2 className='xp-letter-title'>E</h2>
                    <h2 className='xp-letter-title'>R</h2>
                    <h2 className='xp-letter-title'>I</h2>
                    <h2 className='xp-letter-title'>E</h2>
                    <h2 className='xp-letter-title'>N</h2>
                    <h2 className='xp-letter-title'>C</h2>
                    <h2 className='xp-letter-title'>E</h2>
                </div>
                <div className='xp-text-container'>
                    <div className='xp-inf'>
                        <div className='xp-icon-container academlo--icon'>
                            <img src={academlo} className="xp-icon" />
                        </div>
                        <strong><p>Academlo</p></strong>
                        <p>Mar - Ago 2022</p>
                    </div>
                    <div className='xp-inf'>
                        <div className='xp-icon-container platzi--icon'>
                            <img src={platzi} className="xp-icon" />
                        </div>
                        <strong><p>Platzi</p></strong>
                        <p>Nov 2021 - Feb 2022</p>
                    </div>
                    <div className='xp-inf'>
                        <div className='xp-icon-container'>
                            <img src={udemy} className="xp-icon" />
                        </div>
                        <strong><p>Udemy</p></strong>
                        <p>Jun - Ago 2022</p>
                    </div>
                    <div className='xp-inf'>
                        <div className='xp-icon-container front--icon'>
                            <img src={front} className="xp-icon" />
                        </div>
                        <strong><p>Frontend Mentor</p></strong>
                        <p>2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;