import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import API from './../../API';

export class EmailComponent extends Component {
    static displayName = EmailComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            From: null,
            Subject: null,
            Body: null,
            Name: null,
            Response: null
        };
        //this.componentDidMount = this.componentDidMount.bind(this);
    }
    handleSubmit = event => {
        event.preventDefault();
        let email = {
            From: this.state.From,
            Subject: this.state.Subject,
            Body: this.state.Body,
            Name: this.state.Name
        };

        API.post(email).then(success => {
            console.log("success: ", success);
            this.setState({
                Response: success.data,
                From: "",
                Body: "",
                Name: "",
                Subject: ""
            });
            this.handleReset();
        })
    }
    handleChange = event => {
        event.preventDefault();
        const target = event.target;
        const eventName = target.name;
        const value = target.value;

        console.log(`target: ${target};\nname: ${eventName};\nvalue: ${value}`);

        this.setState({
            [eventName]: value
        });
    }
    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => {
                console.log("input: ", input);
                (input.value = "")
            }
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => {
                console.log("textarea: ", textarea);
                (textarea.value = "")
            }
        );
        this.setState({
            itemvalues: [{}]
        });
    };
    render() {
        if (this.state.Response) {

        }
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="returnEmail">Return Email Address: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Your Return Email Address @ Sumpin Dot Sumpin Else"
                        aria-label="EmailAddress"
                        aria-describedby="returnEmail"
                        onChange={this.handleChange}
                        name="From"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="emailSubject">Subject: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Subject"
                        aria-label="EmailSubject"
                        aria-describedby="emailSubject"
                        onChange={this.handleChange}
                        name="Subject"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="body">Email Body: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Say sumpin nice"
                        aria-label="With textarea"
                        aria-describedby="body"
                        onChange={this.handleChange}
                        name="Body"
                        as="textarea"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="name">Your Name: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="John or Jane Doe"
                        aria-label="Name"
                        aria-describedby="name"
                        onChange={this.handleChange}
                        name="Name"
                    />
                </InputGroup>
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default EmailComponent;