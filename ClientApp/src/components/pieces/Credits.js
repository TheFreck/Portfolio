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

    return (
        <div className="element-body">
            <h1 className="section-title">Acknowledgements</h1>
            <p className="credits-text">This site was built from the ground up using C# in the .AspNetCore framework and rendered in React. Components like the Accordion, Carousel, Parallax and Progress Bar were modified from the React-Bootstrap. Styling was for the most part handled in plain old CSS (to the extent allowed by the particular component in some cases).</p>
            <p className="credits-text"></p>
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