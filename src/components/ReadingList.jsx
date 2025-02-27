import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography } from "@mui/material";
import react, { useEffect, useState } from "react";
import {fiction,nonFiction} from "../content/ReadingListContent";
import EventTracker from "../EventTracker";

export const ReadingList = () => {
    const tracker = EventTracker("reading list page");
    const [expanded,setExpanded] = useState("default");
    useEffect(() => {
        tracker("view reading list");
    },[]);

    return <>
        <Box
            sx={{
                width: "60vw",
                margin: "auto",
                overflowY: "auto",
                minHeight: "90vh"
            }}
            data-box
        >
            {
                nonFiction && nonFiction.map((e, i) => (
                    <Accordion 
                        data-accordion
                        key={i}
                        sx={{
                            marginBottom: "1vh"
                        }}
                        expanded={expanded === `panel${i}`}
                        onChange={() => expanded !== `panel${i}` ? setExpanded(`panel${i}`) : setExpanded("default")}
                    >
                        <AccordionSummary>
                            <Typography
                                sx={{marginLeft: "1vw"}}
                            >
                                {e.title} - {e.author}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                e.thoughts && e.thoughts.map((t,j) => (
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
                                        {t}
                                    </Container>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
        <Box>
            <Typography
                sx={{color: "black"}}
            >
                * This page is far from finished. I will continue to add new titles as I read them and will add my reviews as time permits.
            </Typography>
        </Box>
    </>
}

export default ReadingList;