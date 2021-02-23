import React from 'react';
import bootPic from './../../assets/projectPics/bootstrap.png';
import cssPic from './../../assets/projectPics/css3.png';
import htmlPic from './../../assets/projectPics/html.png';
import jqueryPic from './../../assets/projectPics/jquery.png';
import jsPic from './../../assets/projectPics/js.png';
import azurePic from './../../assets/projectPics/Azure.png';
import reactPic from './../../assets/projectPics/react.png';

export const Credits = props => {
    let tech = [
        {
            alt: "javaScript logo",
            src: jsPic,
            txt: "JavaScript"
        },
        {
            alt: "react logo",
            src: reactPic,
            txt: "React"
        },
        {
            alt: "jQuery logo",
            src: jqueryPic,
            txt: "JQuery"
        },
        {
            alt: "html logo",
            src: htmlPic,
            txt: "HTML"
        },
        {
            alt: "css logo",
            src: cssPic,
            txt: "CSS"
        },
        {
            alt: "bootstrap logo",
            src: bootPic,
            txt: "Bootstrap"
        },
        {
            alt: "azure logo",
            src: azurePic,
            txt: "Hosted by Azure"
        },
    ]
    const text = <><p className="credits-text">This site was built from the ground up using C# in the .AspNetCore framework and rendered in React. Components like the Accordion, Carousel, Parallax and Progress Bar were modified from the React-Bootstrap. Styling was for the most part handled in plain old CSS (to the extent allowed by the particular component in some cases).</p><br /><p className="credits-text">The image panels dyamically generate from three images picked at random and as a result will be different each time.</p><br /><p className="credits-text">The email component does some verification in the client. An email address and text body are required but it will warn if there is no subject or a name. After validating a POST request is made where the server uses a regular expression to validate email syntax and sends it out. The email is configured so that it arrives in my inbox and replies are sent to the email address included.</p><br /><p className="credits-text">Please reach out if you have any interesting projects you'd like to colab on</p><br /><p className="credits-text">The code for this project is at <a href="https://github.com/TheFreck/Portfolio" target="_blank">Github.com</a></p></>;
    
    return (
        <div className="element-body">
            <h1 className="section-title">About This Page</h1>
            {text}
            <div className="credits-tech-icon-list">
                {tech.map(icon =>
                    <div key={icon.alt} className="credits-tech-icon">
                        <img className="credits-tech-img" src={icon.src} alt={icon.alt} />
                        <p className="credits-tech-txt">{icon.txt}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Credits;