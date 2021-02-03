import React, { Component } from 'react';
import ImageComponent from '../pieces/ImageComponent';
import Statement from './../pieces/Statement';
import ContactInfo from './../pieces/ContactInfo';
import ProjectCarousel from './../pieces/ProjectCarousel';
import EducationComponent from '../pieces/EducationComponent';
import { Parallax, Background } from 'react-parallax';
import SlideLayout from './../pieces/SlideLayout';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imagesUploaded: false,
            firstImage: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
    }

//    label projects
//    decide whether background images are flush or overlapping
//    widen inner-border
//    combine border classes
//    add down arrows to dropdowns

    render = () => {
        return (
            <div id="contentWrapper">
                <div id="first-image">
                <ImageComponent
                    id='0'
                    />
                </div>
                <div id="second-statement">
                <SlideLayout
                    content={<Statement />}
                    />
                </div>
                <div id="third-image">
                <ImageComponent
                    id="1"
                    />
                </div>
                <div id="fourth-contact">
                <SlideLayout
                    content={<ContactInfo />}
                    />
                </div>
                <div id="fifth-image">
                <ImageComponent
                    id="2"
                    />
                </div>
                <div id="sixth-education">
                <SlideLayout
                    content={<EducationComponent />}
                    />
                </div>
                <div id="seventh-image">
                <ImageComponent
                    id="3"
                    />
                </div>
                <div id="eigth-projects">
                <SlideLayout
                    content={<ProjectCarousel />}
                    />
                </div>
                <div id="ninth-image">
                <ImageComponent
                    id="4"
                    />
                </div>
            </div>
        );
    }
}
