import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const Email_Component = props => {
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
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Email Body: </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                />
            </InputGroup>
        </div>
    );
}

export default Email_Component;