import React from 'react';
import AccordionComponent from './AcordionComponent';
import EmailComponent from './EmailComponent';

export const ContactInfo = props => {
    let emailForm = (<AccordionComponent
        title={<h5>Click to Send Me an Email</h5>}
        content={<EmailComponent />}
        className="email-form"
    />)
    //let emailForm = <div></div>

    return (
        <div className="element-body grid30">
            <div className="contact-body-left">
                <div className="contact-title">
                    <h3>Chris Freckleton</h3>
                    <p className="contact-region">Based in the Salt Lake City Area</p>
                </div>
                <div className="contact-phone">
                    <h5>Phone</h5>
                    <p className="contact-text">(801) 557-7433</p>
                </div>
                <div className="contact-github">
                    <h5>Git</h5>
                    <p><a href="https://github.com/TheFreck" target="_blank" className="contact-text">https://github.com/TheFreck</a></p>
                </div>
                <div>
                    <h5>Email</h5><p className="contact-email">freck.chrisleton@gmail.com</p>
                </div>
            </div>
            <div className="contact-body-right">
                {emailForm}
            </div>
        </div>
    );
}

export default ContactInfo;
