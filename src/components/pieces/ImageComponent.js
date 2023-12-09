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
            Image1: null,
            Image2: null,
            Image3: null,
            ready: false,
            rowNumber: 'portrait-row-' + this.props.id,
            class1: false,
            class2: false,
            class3: false,
            colorclass1: Math.floor(Math.random() * 7),
            colorclass2: Math.floor(Math.random() * 7),
            colorclass3: Math.floor(Math.random() * 7),
            short: false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        const images = [
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
            Image1: images[Math.floor(Math.random() * 21)],
            Image2: images[Math.floor(Math.random() * 21)],
            Image3: images[Math.floor(Math.random() * 21)],
            ready: true
        });
    }

    handleOnClick = async event => {
        event.preventDefault();
        const target = event.target;
        const eventName = target.className.split(' ')[1];
        let eventColor = "color" + eventName;
        let eventColorValue = this.state[eventColor] < 6 ? this.state[eventColor] + 1 : 0;
        await this.setState({
            [eventName]: !this.state[eventName],
            [eventColor]: eventColorValue,
        })
        this.checkShort();
    }

    checkShort = () => {
        if (this.state.class1 &&
            this.state.class2 &&
            this.state.class3) {
            //this.state.colorclass1 == this.state.colorclass2 &&
            //this.state.colorclass2 == this.state.colorclass3) {
            this.setState({ short: true });
        }
        else {
            this.setState({ short: false });
        }
    }

    render = () => {
        //debugger;
        // account for differences in heights of each image panel
        if (this.state.ready) {
            let tail = this.state.short ? "-short" : "-tall";
            let cls = {
                name: " self ",
                height: "parallax-px-height"
            };
            if (this.props.id == 5) {
                cls.name += " bottom-self";
                cls.height += "-bottom" + tail;
            }
            else if (this.props.id == 3) {
                cls.name += " project-self";
                cls.height += "-project" + tail;
            }
            else if (!this.props.id) {
                console.log("top self");
                cls.name += " top-self";
                cls.height += tail;
            }
            else {
                cls.height += tail;
            }
            const colors = [
                "red",
                "green",
                "blue",
                "yellow",
                "orange",
                "purple",
                "brown"
            ];

            //console.log(`height: ${cls.height}; row: ${this.props.id}`);

            return (
                <div className="portrait-row" id={this.state.rowNumber}>
                    <div className={cls.name + " portrait-wash-" + colors[this.state.colorclass1]}>
                        <Parallax
                            className={this.state.class1 ? " flip5-3 portrait-wash-" + colors[this.state.colorclass1] : " flip0 portrait-wash-" + colors[this.state.colorclass1]}
                            blur={0}
                            bgImage={this.state.Image1}
                            bgImageAlt={'self portrait'}
                            strength={200}
                            name="class1"
                            renderLayer={percentage => (
                                <div name="class1">
                                </div>
                            )}
                        >
                            <div className={cls.height + " class1"} onClick={this.handleOnClick}>
                            </div>
                        </Parallax>
                    </div>
                    <div className={cls.name + " portrait-wash-" + colors[this.state.colorclass2]}>
                        <Parallax
                            className={this.state.class2 ? " flip5-3 portrait-wash-" + colors[this.state.colorclass2] : " flip0 portrait-wash-" + colors[this.state.colorclass2]}
                            blur={0}
                            bgImage={this.state.Image2}
                            bgImageAlt={'self portrait'}
                            strength={300}
                            renderLayer={percentage => (
                                <div>
                                </div>
                            )}
                        >
                            <div className={cls.height + " class2"} onClick={this.handleOnClick}>
                            </div>
                        </Parallax>
                    </div>
                    <div className={cls.name + " portrait-wash-" + colors[this.state.colorclass3]}>
                        <Parallax
                            className={this.state.class3 ? " flip5-3 portrait-wash-" + colors[this.state.colorclass3] : " flip0 portrait-wash-" + colors[this.state.colorclass3]}
                            blur={0}
                            bgImage={this.state.Image3}
                            bgImageAlt={'self portrait'}
                            strength={200}
                            renderLayer={percentage => (
                                <div>
                                </div>
                            )}
                        >
                            <div className={cls.height + " class3"} onClick={this.handleOnClick}>
                            </div>
                        </Parallax>
                    </div>
                </div >
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