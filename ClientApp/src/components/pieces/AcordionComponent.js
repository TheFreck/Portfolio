import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import upArrow from './../../assets/projectPics/upArrow.png';
import downArrow from './../../assets/projectPics/downArrow.png';

export class AccordionComponent extends Component {
    static displayName = AccordionComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            arrow: downArrow
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let active = {};
        if (this.props.active) {
            active.defaultActiveKey = "0";
            this.setState({
                isOpen: true
            });
        };
    }

    handleSelect = event => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render = () => {
        let arrow = this.state.isOpen ? upArrow : downArrow;
        let active = {};
        if (this.props.active) active.defaultActiveKey = "0";

        return (
            <div>
                <Accordion {...active} onSelect={this.handleSelect} >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className="dropdown-header" >{this.props.title}<img className="dropdown-arrows" src={arrow} alt="up or down arrow" /></div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.props.content}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default AccordionComponent;