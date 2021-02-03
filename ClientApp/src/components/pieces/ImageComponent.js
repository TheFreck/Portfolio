import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import img0 from './../../assets/profilePics/IMG_00.jpg';
import img1 from './../../assets/profilePics/IMG_01.jpg';
import img2 from './../../assets/profilePics/IMG_02.jpg';
import img3 from './../../assets/profilePics/IMG_03.jpg';
import img4 from './../../assets/profilePics/IMG_04.jpg';
import img5 from './../../assets/profilePics/IMG_05.jpg';
import img6 from './../../assets/profilePics/IMG_06.jpg';
import img7 from './../../assets/profilePics/IMG_07.jpg';
import img8 from './../../assets/profilePics/IMG_08.jpg';
import img9 from './../../assets/profilePics/IMG_09.jpg';
import img10 from './../../assets/profilePics/IMG_10.jpg';
import img11 from './../../assets/profilePics/IMG_11.jpg';
import img12 from './../../assets/profilePics/IMG_12.jpg';
import img13 from './../../assets/profilePics/IMG_13.jpg';
import img14 from './../../assets/profilePics/IMG_14.jpg';

const insideStyles = {
    //background: "transparent",
    //padding: 20,
    //position: "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%,-50%)",
    display: "none",
    opacity: '0',
    visibility: "hidden",
    display: "none",
    width: '2px',
    height: '2px'
};

const inner = {
}

export class ImageComponent extends Component {
    static displayName = ImageComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imagesUploaded: false,
            firstImage: null,
            rowNumber: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setState({
            rowNumber: 'portrait-row-' + this.props.id
        })
        this.startRefresh();
    }

    startRefresh = () => {
        setInterval(this.refresh(), 1000);
    }

    refresh = () => {
        console.log("refresh");
        let imageArray = [
            img0,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
            img13,
            img14
        ];
        let firstImage = Math.floor(Math.random() * 15);
        this.setState({ images: imageArray, imagesUploaded: true, firstImage });
    }

    render = () => {
        let image1 = this.state.firstImage ? this.state.firstImage : Math.floor(Math.random() * 15);
        let image2;
        do {
            image2 = Math.floor(Math.random() * 15);
        } while (image1 === image2);
        let image3;
        do {
            image3 = Math.floor(Math.random() * 15);
        } while (image2 === image3 || image1 === image3);
        let imageArray = [
            img0,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
            img13,
            img14
        ];

        if (this.state.imagesUploaded) {
            return (
                <div id={this.state.rowNumber}>
                    <Parallax
                        bgStyle="inner"
                        contentClassName="inner"
                        className="self"
                        blur={0}
                        bgImage={imageArray[image1]}
                        bgImageAlt={'self portrait'}
                        strength={250}
                        renderLayer={percentage => (
                            <div>
                            </div>
                        )}
                    >
                        <div style={{ height: 500 }}>
                        </div>
                    </Parallax>
                    <Parallax
                        className="self"
                        blur={0}
                        bgImage={imageArray[image2]}
                        bgImageAlt={'self portrait'}
                        strength={400}
                        renderLayer={percentage => (
                            <div>
                               
                            </div>
                        )}
                    >
                        <div style={{ height: 500 }}>
                        </div>
                    </Parallax>
                    <Parallax
                        className="self"
                        blur={0}
                        bgImage={imageArray[image3]}
                        bgImageAlt={'self portrait'}
                        strength={250}
                        renderLayer={percentage => (
                            <div>
                               
                            </div>
                        )}
                    >
                        <div style={{ height: 500 }}>
                        </div>
                    </Parallax>
                </div>
            );
        }
        else {
            return (
                    <div>
                        <h1>Waiting...</h1>
                    </div>
            )
        }
    }
}

export default ImageComponent;