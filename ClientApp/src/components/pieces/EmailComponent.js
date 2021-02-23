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

            FromMessage: "Please include a valid email address",
            SubjectMessage: "Would you like to include a subject line?",
            BodyMessage: "Please make sure to include a body in your email",
            NameMessage: "By what name can I call you?",
            SubmitMessage:  "Email Successfully Sent",

            FromDisplay: false,
            SubjectDisplay: false,
            BodyDisplay: false,
            NameDisplay: false,
            SubmitDisplay: false,

            MessageSent: false,
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        let email = {
            From: "",
            Subject: "",
            Body: "",
            Name: ""
        }
        let canSubmit = true;
        // Form Validation
        if (this.validateEmail(this.state.From)) email.From = this.state.From;
        else {
            // From email is manditory
            canSubmit = false;
            this.setState({ FromDisplay: true });
        }
        if (this.state.Subject) email.Subject = this.state.Subject;
            // Subject is optional
        else this.setState({ SubjectDisplay: true });
        if (this.state.Body) email.Body = this.state.Body;
        else {
            // Body is manditory
            canSubmit = false;
            this.setState({ BodyDisplay: true });
        }
        if (this.state.Name) email.Name = this.state.Name;
            // Name is optional
        else this.setState({ NameDisplay: true });

        if (!canSubmit) return;

        API.post(email).then(success => {
            console.log("success: ", success.data.reasonPhrase);
            this.setState({
                SubmitMessage: success.data.reasonPhrase,
                SubmitDisplay: true,
                SubjectDisplay: false,
                NameDisplay: false
            });
            this.handleReset();
        })
    }
    handleChange = event => {
        event.preventDefault();
        const target = event.target;
        const eventName = target.name;
        const value = target.value;

        this.setState({
            [eventName]: value
        });
    }
    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => {
                (input.value = "")
            }
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => {
                (textarea.value = "")
            }
        );
        this.setState({
            itemvalues: [{}],
            SubmitDisplay: true
        });
        setTimeout(() => this.setState({ SubmitDisplay: false }), 3333);
    };
    handleBlur = event => {
        event.preventDefault();
        const target = event.target;
        const eventName = target.name;
        const value = target.value;

        switch (eventName) {
            case "From":
                // validate email
                if (!this.validateEmail(value)) {
                    this.setState({
                        FromDisplay: true
                    });
                }
                else {
                    this.setState({
                        FromDisplay: false
                    })
                }
                break;
            case "Subject":
                // if no subject ask if they wanna do a subject
                if (!this.state.Subject) {
                    this.setState({
                        SubjectDisplay: true
                    });
                }
                else {
                    this.setState({
                        SubjectDisplay: false
                    });
                }
                break;
            case "Body":
                // make sure there's a body
                if (!this.state.Body) {
                    this.setState({
                        BodyDisplay: true
                    });
                }
                else {
                    this.setState({
                        BodyDisplay: false
                    });
                }
                break;
            case "Name":
                // make sure there's a name
                if (!this.state.Name) {
                    this.setState({
                        NameDisplay: true
                    });
                }
                else {
                    this.setState({
                        NameDisplay: false
                    });
                }
            default:
            // don't do anything
        }
    };
    validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="returnEmail">Your Email: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Your Return Email Address @ Sumpin Dot Sumpin Else"
                        aria-label="EmailAddress"
                        aria-describedby="returnEmail"
                        onChange={this.handleChange}
                        name="From"
                        onBlur={this.handleBlur}
                    />
                </InputGroup>
                <p className={this.state.FromDisplay ? 'show from-message' : 'hide from-message'}>{this.state.FromMessage}</p>

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
                        onBlur={this.handleBlur}
                    />
                </InputGroup>
                <p className={this.state.SubjectDisplay ? 'show subject-message' : 'hide subject-message'}>{this.state.SubjectMessage}</p>

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
                        onBlur={this.handleBlur}
                    />
                </InputGroup>
                <p className={this.state.BodyDisplay ? 'show body-message' : 'hide body-message'}>{this.state.BodyMessage}</p>

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
                        onBlur={this.handleBlur}
                    />
                </InputGroup>
                <p className={this.state.NameDisplay ? 'show name-message' : 'hide name-message'}>{this.state.NameMessage}</p>

                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <p className={this.state.SubmitDisplay ? 'show submit-message' : 'hide submit-message'}>{this.state.SubmitMessage}</p>
            </div>
        );
    }
}

export default EmailComponent;