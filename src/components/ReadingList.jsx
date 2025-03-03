import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography } from "@mui/material";
import react, { useCallback, useEffect, useState } from "react";
import {fiction,nonFiction} from "../content/ReadingListContent";
import EventTracker from "../EventTracker";

export const ReadingList = ({isMobile}) => {
    const tracker = EventTracker("reading list page");
    const [expanded,setExpanded] = useState(-1);
    

    useEffect(() => {
        tracker("view page", "reading list");
    },[]);

    useEffect(() => {
        document.getElementById(expanded)?.scrollIntoView();
        if(expanded !== -1){
            tracker("view book",nonFiction[expanded]);
        }
    },[expanded]);

    const Mobile = () => <Container
        sx={{
            width: "100vw",
            margin: "auto",
            paddingLeft: 0,
            paddingRight: 0,
            overflowY: "auto",
            height: "100vh",
            paddingBottom: "50vh"
        }}
    >
        <Box>
            {
                nonFiction && nonFiction.map((e, i) => (
                    <Accordion 
                        data-accordion
                        key={i}
                        sx={{
                            marginBottom: "1vh"
                        }}
                        expanded={expanded === i}
                        onChange={() => expanded !== i ? setExpanded(i) : setExpanded(-1)}
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
                                            width: "95vw",
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
                sx={{
                    color: "black", 
                    background: "white",
                    padding: "1vh 5vw"
                }}
            >
                * This page is far from finished. I will continue to add new titles as I read them and will add my reviews as time permits.
            </Typography>
        </Box>
    </Container>;

    const Desktop = () => <Container
    sx={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "90vh",
        paddingBottom: "10vh"
    }}
    >
        <Box
            sx={{
            }}
        >
            {
                nonFiction && nonFiction.map((e, i) => (
                    <Accordion 
                        data-accordion
                        key={i}
                        sx={{
                            marginBottom: "1vh",
                        }}
                        expanded={expanded === i}
                        onChange={() => expanded !== i ? setExpanded(i) : setExpanded(-1)}
                    >
                        <AccordionSummary
                            id={i}
                        >
                            <Typography
                                sx={{
                                    marginLeft: "1vw",
                                    lineHeight: 1,
                                }}
                                variant={expanded === i ? "h6" : ""}
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
                                            lineHeight: 2,
                                            textAlign: "justify",
                                            marginBottom: "3vh",
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
                sx={{
                    color: "black", 
                    background: "white",
                    padding: "1vh 5vw"
                }}
            >
                * This page is far from finished. I will continue to add new titles as I read them and will add my reviews as time permits.
            </Typography>
        </Box>
    </Container>;

    return <Box>
        {
            isMobile ?
            <Mobile /> :
            <Desktop /> 
        }
    </Box>
}

export default ReadingList;