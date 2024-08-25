import React from 'react';
import PhoneSVG from './phoneSvg';
import MailSVG from './mailSvg';
 
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="footer-title">
                    <p>Lighthouse Lapphunds</p>
                </div>
                <div className="footer-contact">
                    <div className="footer-contact-title">
                        <p>Contact</p>
                    </div>
                    <div className='contact-item'>
                        <MailSVG />
                        <p>Mary Davidson: <a href="mailto:leosbythesea@gmail.com">leosbythesea@gmail.com</a></p>
                    </div>
                    <div className='contact-item'>
                        <MailSVG />
                        <p>Linda Pelletier: <a href="mailto:studio549@yahoo.com">studio549@yahoo.com</a></p>
                    </div>
                    <div className='contact-item'>
                        <PhoneSVG />
                        <p>Phone: (774) 207-7992</p>
                    </div>
                </div>
            </div>
            <div className="copywrite">
                <p>Copyright © 2024 - All rights reserved || Designed By: Kierra Searle</p>
            </div>
        </div>
    );
};
 
export default Footer;