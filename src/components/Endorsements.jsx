import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography } from "@mui/material";
import react, { useState } from "react";
import endorsements from "../content/EndorsementContent";

export const Endorsements = () => {
    const [expanded,setExpanded] = useState("default");

    return <Box
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
}

export default Endorsements;