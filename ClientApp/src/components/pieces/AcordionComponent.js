import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import upArrow from './../../assets/projectPics/upArrow.png';
import downArrow from './../../assets/projectPics/downArrow.png';
import $ from 'jquery';

export class AccordionComponent extends Component {
    static displayName = AccordionComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let active = {};
        if (this.props.active) {
            active.defaultActiveKey = "0";
            this.setState({
                isOpen: true,
            });
        };
    }

    handleSelect = event => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render = () => {
        let active = {};
        if (this.props.active) active.defaultActiveKey = "0";
        let isOpen = this.state.isOpen;

        return (
            <div>
                <Accordion {...active} >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div className={`panel-heading ${isOpen ? 'active' : ''}`} onClick={this.handleSelect} role="tab" >
                                <h4 className="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {this.props.title}
                                    </a>
                                </h4>
                            </div>
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