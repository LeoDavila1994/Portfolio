import React from 'react';
import rm from '../images/rm.png'
import uc from '../images/uc.png'
import lp from '../images/lp.png'
import wa from '../images/wa.png'
import pk from '../images/pk.png'

const Projects = () => {
    return (
        <section className='container'>
            <h2 className='title projects--title'>PROJECTS</h2>
            <div className='projects-container'>
                <div className="item">
                    <img src={lp} className="img"/>
                </div>
                <div className="item">
                    <img src={uc} className="img"/>
                </div>
                <div className="item">
                    <img src={rm} className="img"/>
                </div>
                <div className="item">
                    <img src={wa} className="img"/>
                </div>
                <div className="item">
                    <img src={pk} className="img"/>
                </div>
            </div>
        </section>
    );
};

export default Projects;