import React from 'react';
import rm from '../images/rm.png'
import uc from '../images/uc.png'
import lp from '../images/lp.png'
import wa from '../images/wa.png'
import pk from '../images/pk.png'

const Projects = () => {

    return (
        <section className='container'>
            <div className="pj-container">
                <div className='img-container'>
                    <div className='pj-img-container'>
                        <img src={rm} className="pj-img"/>
                    </div>
                    <div className='pj-img-container'>
                        <img src={uc} className="pj-img"/>
                    </div>
                    <div className='pj-img-container'>
                        <img src={pk} className="pj-img"/>
                    </div>
                    <div className='pj-img-container'>
                        <img src={wa} className="pj-img"/>
                    </div>
                    <div className='pj-img-container'>
                        <img src={lp} className="pj-img"/>
                    </div>
                </div>
                <div className='pj-title-container'>
                    <h2 className='pj-letter-title'>P</h2>
                    <h2 className='pj-letter-title'>R</h2>
                    <h2 className='pj-letter-title'>O</h2>
                    <h2 className='pj-letter-title'>J</h2>
                    <h2 className='pj-letter-title'>E</h2>
                    <h2 className='pj-letter-title'>C</h2>
                    <h2 className='pj-letter-title'>T</h2>
                    <h2 className='pj-letter-title'>S</h2>
                </div>
            </div>
        </section>
    );
};

export default Projects;