import React from 'react';
import AccordionComponent from './../pieces/testAccordion';

export const TestComponent = props => {

    let propsObject1 = {
        title: "Top Layer 1",
        content: [{
            title: "Second layer 1 Top layer 1",
            content: [
                { title: "Final item" },
                { title: "Final item" }
            ]
        },
        {
            title: "Second layer 2 Top layer 1",
            content: [
                { title: "Final item" },
                { title: "Final item" },
                { title: "Final item" }
            ]
        }]
    }

    let propsObject2 = {
        title: "Top layer 2",
        content: [{
            title: "Second layer 3 Top layer 2",
            content: [{
                title: "Third layer 1 Top layer 2",
                content: [{
                    title: "Fourth layer 1 Third layer 1 Top layer 2",
                    content: [
                        { title: "Final item" },
                        { title: "Final item" }
                    ]
                },
                {
                    title: "Third layer 2 Top layer 2",
                    content: [{
                        title: "Fourth layer 2 Third layer 2 Top layer 2",
                        content: [
                            { title: "Final item" },
                            { title: "Final item" },
                            { title: "Final item" },
                            { title: "Final item" },
                            { title: "Final item" }
                        ]
                    },
                    {
                        title: "Fourth layer 3 Third layer 2 Top layer 2",
                        content: [
                            { title: "Final item" },
                            { title: "Final item" },
                            { title: "Final item" }
                        ]
                    }]
                }]
            }]
        }]
    }

    return (
        <div className="element-body">
            <h3 className="section-title">Accordion Fun</h3>
            <div className="edu-body">
                <AccordionComponent
                    title={propsObject1.title}
                    content={propsObject1.content}
                    active={true}
                    eventKey='1'
                />
                <AccordionComponent
                    title={propsObject2.title}
                    content={propsObject2.content}
                    active={true}
                    eventKey='2'
                />
            </div>
        </div>
    );
}

export default TestComponent;