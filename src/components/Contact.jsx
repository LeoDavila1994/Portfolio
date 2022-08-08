import React from 'react';

const Contact = () => {
    return (
        <section className='container'>
            <div className="contact-container">
                <div className='contact-title-container'>
                    <h2 className='contact-letter-title'>C</h2>
                    <h2 className='contact-letter-title'>O</h2>
                    <h2 className='contact-letter-title'>N</h2>
                    <h2 className='contact-letter-title'>T</h2>
                    <h2 className='contact-letter-title'>A</h2>
                    <h2 className='contact-letter-title'>C</h2>
                    <h2 className='contact-letter-title'>T</h2>
                </div>
                <div className='contact-text-container'>
                    <div className='contact-inf'>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <div className='contact-inf'>
                        <i class="fa-brands fa-square-facebook"></i>
                    </div>
                    <div className='contact-inf'>
                        <i class="fa-brands fa-square-whatsapp"></i>
                    </div>
                    <div className='contact-inf'>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;