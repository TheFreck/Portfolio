﻿import React from 'react';
import AccordionComponent from './../pieces/AcordionComponent';

export const Education_Component = props => {
    // ********************************************
    // Education
    // ********************************************
    let eduTitle = <h4><li>Economics B.S.</li></h4>;
    let westminsterTitle = (<h5>Trained in <strong>Economic Analysis</strong><br />
        at Westminster College</h5>);
    let westminsterSkillsTitle = <h6>Skills Used</h6>;
    let westminsterSkillsContent = (<ul>
        <li>Calculus</li>
        <li>Combinatrix</li>
        <li>Differential Equations</li>
        <li>Agent Based Modeling</li>
        <li>Bayesian Analysis</li>
        <li>Econometrics</li>
        <li>Regression Analysis</li>
    </ul>);
    let westminsterContent = (<ul>
        <li>Graduated in 2014</li>
        <li>Summa Cum Lauda</li>
        <li><AccordionComponent
            title={westminsterSkillsTitle}
            content={westminsterSkillsContent}
        /></li>
    </ul>);
    let eduContent = (<ul>
        <li><AccordionComponent
            title={westminsterTitle}
            content={westminsterContent}
        /></li>

    </ul>);

    // ********************************************
    // Work Experience
    // Titles
    // ********************************************
    let workTitle = <h4 className="grid97"><li>Work Experience</li></h4>
    let fidelitySkillsTitle = <h6>Skills Used</h6>;
    let fidelityTimeTitle = <h6><strong>15 years experience</strong> in <br /> Financial Services and Investing</h6>;
    let fidelityTitle = <h5>Fidelity Investments</h5>;
    let clientSideTitle = "Client Side";
    let serverSideTitle = "Server Side";
    let skillsTitle = <h6>Skills Used</h6>;
    let pworxTimeTitle = <h6>Almost 2 years with the company</h6>;
    let pworxTitle = <h5>Prentice Worx</h5>;
    let packsizeTitle = <h5>Packsize International (Current Employer)</h5>;
    let packsizeTimeTitle = <h6>Over 2 years with the company</h6>

    // ********************************************
    // Packsize
    // ********************************************

    let serversideContent = (<ul>
        <li>C#</li>
        <li>Rabbit MQ</li>
        <li>DotNet 5-7</li>
        <li>IoT Edge Device and Hub</li>
        <li>Communication with a PLC to translate code into machine commands</li>
        <li>MSpec test framework</li>
    </ul>);
    let clientsideContent = (<ul>
        <li>React</li>
        <li>State management through React Hooks</li>
        <li>Creating SVG images from scratch</li>
        <li>Working with images stored in PDF format</li>
        <li>SignalR</li>
        <li>Cypress Testing</li>
    </ul>)
    let packsizeSkillsContent = (<ul>
        <li>
            <AccordionComponent
                title={serverSideTitle}
                content={serversideContent}
            />
        </li>
        <li>
            <AccordionComponent
                title={clientSideTitle}
                content={clientsideContent}
            />
        </li>
    </ul>);
    let packsizeTimeContent = (<ul>
        <li>Built and maintained microservices</li>
        <li>Built and maintained react pages</li>
        <li>Worked across teams to solve difficult problems</li>
        <li>Worked as a mob with two other developers to collectively own and maintain code in our context</li>
        <li>Test Driven Development</li>
        </ul>);
    let packsizeContent = (<ul>
        <li>
            <AccordionComponent
                title={packsizeTimeTitle}
                content={packsizeTimeContent}
            />
        </li>
        <li>
            <AccordionComponent
                title={skillsTitle}
                content={packsizeSkillsContent}
            />
        </li>
    </ul>);

    // ********************************************
    // Fidelity
    // ********************************************

    let fidelitySkillsContent = (<ul>
        <li>Communication</li>
        <li>Analysis</li>
        <li>Advanced charting of stock performance and bond yields</li>
        <li>Learned to see hidden relationships between data sets in real time</li>
        <li>Experience with the interconnectedness of complex systems</li>
        <li>Recognizing emergent behavior of complex systems to identify potential investment opportunities</li>
    </ul>);
    let fidelityTimeContent = (<ul>
        <li>Promoted several times</li>
        <li>Recognized internally for analytic aptitude</li>
        <li>Developed a market model in Excel that was utilized by several other financial planners for analysis</li>
    </ul>);
    let fidelityContent = (<ul>
        <li><AccordionComponent
            title={fidelityTimeTitle}
            content={fidelityTimeContent}
        /></li>
        <li><AccordionComponent
            title={fidelitySkillsTitle}
            content={fidelitySkillsContent}
        /></li>
    </ul>);

    // ********************************************
    // Prentice Worx
    // ********************************************

    let clientSideContent = (<ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>JQuery</li>
        <li>Angular</li>
        <li>React</li>
        <li>Handlebars</li>
        <li>Liquid</li>
        <li>Microsoft Portals: a web site rendering engine with back end connectors to D365</li>
        <li>Microsoft PowerAutomate</li>
        <li>Microsoft PowerBI</li>
    </ul>);
    let serverSideContent = (<ul>
        <li>C# and the dot net framework</li>
        <li>JavaScript using NodeJS</li>
    </ul>);
    let pworxTimeContent = (<ul>
        <li>Customizing ERP/CRM software for businesses</li>
        <li>Based on Microsoft Dynamics 365</li>
        <li>Integrating multiple systems for a seamless experience with robust data access</li>
    </ul>);
    let pworxSkillsContent = (<ul>
        <li><AccordionComponent
            title={serverSideTitle}
            content={serverSideContent}
        /></li>
        <li><AccordionComponent
            title={clientSideTitle}
            content={clientSideContent}
        /></li>
    </ul>);
    let pworxContent = (<ul>
        <li><AccordionComponent
            title={pworxTimeTitle}
            content={pworxTimeContent}
        /></li>
        <li><AccordionComponent
            title={skillsTitle}
            content={pworxSkillsContent}
        /></li>
    </ul>);

    let workContent = (<ul>
        <li><AccordionComponent
            title={packsizeTitle}
            content={packsizeContent}
        /></li>
        <li><AccordionComponent
            title={pworxTitle}
            content={pworxContent}
        /></li>
        <li><AccordionComponent
            title={fidelityTitle}
            content={fidelityContent}
        /></li>
    </ul>);


    return (
        <div className="element-body">
            <h3 className="section-title">Education and Experience</h3>
            <div className="edu-body">
                <AccordionComponent
                    title={workTitle}
                    content={workContent}
                    active={true}
                />
                <div className="between"></div>
                <AccordionComponent
                    title={eduTitle}
                    content={eduContent}
                    active={true}
                />
            </div>
        </div>
    );
}

export default Education_Component;