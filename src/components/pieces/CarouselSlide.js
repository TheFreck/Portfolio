import React from 'react';

export const Carousel_Slide = props => {
    let tech = props.tech;
    return (
        <div className={"carousel-slide grid61 " + props.className + '-slide'}>
            <div className="carousel-card-left">
                <h5 className="carousel-slide-title">{props.title}</h5>
                <hr />
                <p className="carousel-slide-text">{props.text}</p>
                <div className="tech-icon-list">
                    <hr />
                    <br />
                    <h5>Tech Used:</h5>
                    <div>
                    {
                        tech.map(tech => (
                            <img key={tech} className="tech-icon" src={tech} />
                        ))
                        }
                    </div>
                </div>
            </div>
            <a className="carousel-card-right" href={props.url} target="_blank">
                <img
                    className={props.className + ' carousel-slide-image'}
                    src={props.src}
                    alt={props.alt}
                />
            </a>
        </div>
    );
}

export default Carousel_Slide;