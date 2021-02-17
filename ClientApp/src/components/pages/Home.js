import React, { Component, useState } from 'react';
import ImageComponent from '../pieces/ImageComponent';
import Statement from './../pieces/Statement';
import ContactInfo from './../pieces/ContactInfo';
import ProjectCarousel from './../pieces/ProjectCarousel';
import EducationComponent from '../pieces/EducationComponent';
import { Parallax, Background } from 'react-parallax';
import SlideLayout from './../pieces/SlideLayout';
import TestComponent from './../pieces/testComponent';
import $ from 'jquery';
import { ProgressBar, Glyphicon } from 'react-bootstrap';
import Transition from './../pieces/Transition';
import Credits from './../pieces/Credits';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imagesUploaded: false,
            firstImage: 0,
            now: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        $(window).on("scroll", () => {
            this.amountscrolled()
        });
    }

    amountscrolled = () => {
        var winheight = $(window).height();
        var docheight = $(document).height();
        var scrollTop = $(window).scrollTop();
        var trackLength = docheight - winheight;
        var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
        //console.log(pctScrolled + '% scrolled');
        this.setState({
            now: pctScrolled
        })
    }



    render = () => {
        //return (
        //    <div id="contentWrapper">
        //        <Credits />
        //    </div>
        //    )

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
                <div id="eighth-projects">
                    <SlideLayout
                        content={<ProjectCarousel />}
                    />
                </div>
                <div id="ninth-image">
                    <ImageComponent
                        id="4"
                    />
                </div>
                <div id="tenth-credits">
                    <SlideLayout
                        content={<Credits />}
                    />
                </div>
                <div id="eleventh-image">
                    <ImageComponent
                        id="5"
                    />
                </div>
            </div>
        );
    }
}
