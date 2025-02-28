import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography } from "@mui/material";
import react, { useCallback, useEffect, useState } from "react";
import endorsements from "../content/EndorsementContent";
import EventTracker from "../EventTracker";
import { exp } from "three/tsl";

export const Endorsements = ({isMobile}) => {
    const tracker = EventTracker("endorsements page");
    const [expanded,setExpanded] = useState("default");
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        tracker("view endorsements");
        console.log("loading endorsements");
    },[]);

    const Mobile = () => <Box
        sx={{
            width: "100vw",
            margin: "auto",
        }}
    >
        {
            endorsements && endorsements.map((e, i) => (
                <Accordion 
                    key={i}
                    sx={{
                        marginBottom: "1vh"
                    }}
                    expanded={expanded === `panel${i}`}
                    onChange={() => expanded !== `panel${i}` ? setExpanded(`panel${i}`) : setExpanded("default")}
                >
                    <AccordionSummary>
                        {e.summary}
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            e.body && e.body.map((e,j) => (
                                <Container 
                                    key={j}
                                    sx={{
                                        width: "95vw",
                                        margin: "auto",
                                        lineHeight: 2,
                                        textAlign: "justify",
                                        marginBottom: "3vh"
                                    }}
                                >
                                    {j===0 && <hr/>}
                                    {e}
                                </Container>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </Box>;

    const Desktop = () => <Box
        sx={{
            width: "60vw",
            margin: "auto",
            minHeight: "90vh",
            overflowY: "auto"
        }}
    >
        {
            endorsements && endorsements.map((e, i) => (
                <Accordion 
                    key={i}
                    sx={{
                        marginBottom: "1vh"
                    }}
                    expanded={expanded === `panel${i}`}
                    onChange={() => {
                        if(expanded !== `panel${i}`){
                            setExpanded(`panel${i}`);
                            console.log("expanded");
                        }
                        else{
                            setExpanded("default")
                            console.log("expanded");
                        }
                    }}
                >
                    <AccordionSummary>
                        {e.summary}
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            e.body && e.body.map((e,j) => (
                                <Container 
                                    key={j}
                                    sx={{
                                        width: "50vw",
                                        margin: "auto",
                                        lineHeight: 2,
                                        textAlign: "justify",
                                        marginBottom: "3vh"
                                    }}
                                >
                                    {j===0 && <hr/>}
                                    {e}
                                </Container>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </Box>

    return <Box>
        {
            isMobile ?
            <Mobile /> :
            <Desktop /> 
        }
    </Box>
}

export default Endorsements;