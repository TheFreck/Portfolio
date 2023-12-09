import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'

export const Transition = props => {
    const [open, setOpen] = useState(false);

    let style = {
        height: "100px",
        width: "200px",
        background: "green",
        color: "white"
    }

    return (
        <>
            <Button
                style={style}
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text example"
                aria-expanded={open}
                text="Click ME"
            />
            <Fade in={open}>
                <div id="example-fade-texta">
                    <p id="example-fade-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
            </Fade>
        </>
    );
}

export default Transition;