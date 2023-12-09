import React from 'react';
import AccordionComponent from './AcordionComponent';
import EmailComponent from './EmailComponent';

export const SlideLayout = props => {
    let cName = `element-body ${props.grid}`;
    return (
        <div>
            <div className="outer-border" >
                <div className="inner-border">
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default SlideLayout;