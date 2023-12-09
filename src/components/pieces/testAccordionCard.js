import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import upArrow from './../../assets/projectPics/upArrow.png';
import downArrow from './../../assets/projectPics/downArrow.png';
import TestAccordion from './testAccordion';

// incomming: TestAccordion, active

export class TestAccordionCard extends Component {
    static displayName = TestAccordionCard.name;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            arrow: downArrow,
            eventKey: "",
            loaded: false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            isOpen: true,
            eventKey: this.props.eventKey,
            loaded: true
        });
    }

    render = () => {
        if (!this.state.loaded) return (<p>Loading...</p>);
        else {
            debugger;
            let arrow = this.state.isOpen ? upArrow : downArrow;
            let active = {};
            if (this.props.active) active.defaultActiveKey = "0";

            let inputContents = this.props.content;
            let inputTitle = this.props.title;
            let component;
            console.log("inputContents: ", inputContents);
            if (inputContents && inputContents.content && inputContents.content.length > 0) {
                for (let inputContent of inputContents.content) {
                    console.log("inputContent: ", inputContent);
                    if (inputContent && inputContent.content && inputContent.content > 0) {
                        for (let child of inputContent) {
                            if (child.content) console.log("child: ", child.content);
                            if (child.content && child.content.title) console.log("child.title: ", child.content.title);
                            if (child.content && child.content.content) console.log("child.content: ", child.content.content);
                            component = (
                                child.content.map((kid, i) => (
                                    <TestAccordion key={i}
                                        title={kid.title}
                                        content={kid.content}
                                    />
                                ))
                            );
                        }
                    }
                    else {
                        console.log("no content");
                    }
                }
            }


            return (
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
                        <div className="dropdown-header grid97" >
                            {this.props.title}
                            <p>event key: {this.state.eventKey}</p>
                            <img
                                className="dropdown-arrows"
                                src={arrow}
                                alt="up or down arrow"
                            />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.state.eventKey}>
                        <Card.Body>
                            {component}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        }
    }
}

export default TestAccordionCard;