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
                        <a href="https://www.linkedin.com/in/leodavila/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className='contact-inf'>
                        <a href="https://www.facebook.com/profile.php?id=1783522575"><i class="fa-brands fa-square-facebook"></i></a>
                    </div>
                    <div className='contact-inf'>
                        <a href="https://wa.me/524495921411"><i class="fa-brands fa-square-whatsapp"></i></a>
                    </div>
                    <div className='contact-inf'>
                        <a href="mailto:liodavila.ld@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;