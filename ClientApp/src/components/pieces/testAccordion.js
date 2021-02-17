import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import upArrow from './../../assets/projectPics/upArrow.png';
import downArrow from './../../assets/projectPics/downArrow.png';
import TestAccordionCard from './testAccordionCard';

// incoming: TestCard, active

export class TestAccordionComponent extends Component {
    static displayName = TestAccordionComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            arrow: downArrow,
            content: [],
            eventKey: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let eventKey;
        let isEventKey = parseInt(this.props.eventKey) + 1;
        console.log("title: ", this.props.title);
        console.log("content: ", this.props.content);
        console.log(".........................");
        let active = {};
        if (this.props.active) {
            active.defaultActiveKey = "0";
            this.setState({
                isOpen: true,
                content: this.props.content,
                eventKey: parseInt(this.props.eventKey) + 1
            });
        }
        else {
            this.setState({
                isOpen: false,
                content: this.props.content,
                eventKey: parseInt(this.props.eventKey) + 1
            });
        }
    }

    handleSelect = event => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render = () => {
        let active = {};
        if (this.props.active) active.defaultActiveKey = "0";


        let elements;
        debugger;
        if (this.props.content) {
            elements = this.props.content.map((content, i) => (
                <div key={i}>
                    <TestAccordionCard
                        title={content.title}
                        content={content}
                        eventKey={this.state.eventKey}
                    />
                </div>
            ));
        }

        let accordion = this.state.content ? (
            <div>
                <Accordion {...active} onSelect={this.handleSelect} >
                    {elements}
                </Accordion>
            </div>
        ) : <div>
                Loading...
            </div>

        return (
            <div>
                <Accordion {...active} onSelect={this.handleSelect} >
                    <p>event key: {this.state.eventKey}</p>
                    {accordion}
                </Accordion>
            </div>
        );
    }
}

export default TestAccordionComponent;