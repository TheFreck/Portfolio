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
import img15 from './../../assets/profilePics/IMG_15.jpg';
import img16 from './../../assets/profilePics/IMG_16.jpg';
import img17 from './../../assets/profilePics/IMG_17.jpg';
import img18 from './../../assets/profilePics/IMG_18.jpg';
import img19 from './../../assets/profilePics/IMG_19.jpg';
import img20 from './../../assets/profilePics/IMG_20.jpg';
import img21 from './../../assets/profilePics/IMG_21.jpg';

const insideStyles = {
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
            secondImage: null,
            thirdImage: null,
            ready: false,
            rowNumber: 'portrait-row-' + this.props.id
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let images = [
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
            img14,
            img15,
            img16,
            img17,
            img18,
            img19,
            img20,
            img21
        ]
        this.setState({
            images,
            firstImage: images[Math.floor(Math.random() * 21)],
            secondImage: images[Math.floor(Math.random() * 21)],
            thirdImage: images[Math.floor(Math.random() * 21)],
            ready: true
        });
    }

    render = () => {
        if (this.state.ready) {
            let cls = {
                name: "self ",
                height: "parallax-px-height"
            };
            console.log("this.props.id: ", this.props.id);
            console.log("cls: ", cls);
            if (this.props.id == 5) {
                cls.name += "bottom-self";
                cls.height += "-bottom";
                console.log("props id 5: ", cls.height);
            }
            else if (this.props.id == 3) {
                cls.name += "project-self";
                cls.height += "-project";
                console.log("props id 3: ", cls.height);
            }
            else if(this.props.id == 1) {
                cls.name += "top-self";
                console.log("props id others: ", cls.height);
            }

            return (
                <div className="portrait-row" id={this.state.rowNumber}>
                    <Parallax
                        bgStyle="inner"
                        contentClassName="inner"
                        className={cls.name}
                        blur={0}
                        bgImage={this.state.firstImage}
                        bgImageAlt={'self portrait'}
                        strength={200}
                        renderLayer={percentage => (
                            <div>
                            </div>
                        )}
                    >
                        <div className={cls.height}>
                        </div>
                    </Parallax>
                    <Parallax
                        className={cls.name}
                        blur={0}
                        bgImage={this.state.secondImage}
                        bgImageAlt={'self portrait'}
                        strength={300}
                        renderLayer={percentage => (
                            <div>

                            </div>
                        )}
                    >
                        <div className={cls.height}>
                        </div>
                    </Parallax>
                    <Parallax
                        className={cls.name}
                        blur={0}
                        bgImage={this.state.thirdImage}
                        bgImageAlt={'self portrait'}
                        strength={200}
                        renderLayer={percentage => (
                            <div>

                            </div>
                        )}
                    >
                        <div className={cls.height}>
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
            );
        }
    }
}

export default ImageComponent;