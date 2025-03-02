import { AppBar, Box, Grid2, Paper, Toolbar, Typography } from "@mui/material";
import react, { useCallback, useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ReadingList from "./components/ReadingList";
import Endorsements from "./components/Endorsements";
import AboutThree from "./components/AboutThree";
import EventTracker from "./EventTracker";

const viewEnum = {
    about: 0,
    projects: 1,
    books: 2,
    endorsements: 3
}

export const Layout = () => {
    const tracker = EventTracker("layout");
    const [view, setView] = useState(viewEnum.about);
    const [isMobile, setIsMobile] = useState(true);
    const minSwipeDistance = 100;
    const touchRef = useRef();

    useEffect(() => {
        touchRef.current = {
            touchStart: null,
            touchEnd: null
        };
        if(navigator.maxTouchPoints > 0) {
            setIsMobile(true);
            tracker("device", "mobile");
        }
        else {
            setIsMobile(false);
            tracker("device", "desktop");
        }
    }, []);

    useEffect(() =>{
        tracker(`${isMobile ? "swipe" : "navigate"} to page`,Object.keys(viewEnum)[view]);
    },[view]);

    const onTouchStart = (e) => {
        touchRef.current.touchStart = e.targetTouches[0].clientX;
        touchRef.current.touchEnd = null;
    }

    const onTouchMove = (e) => {
        touchRef.current.touchEnd = e.targetTouches[0].clientX;
    }

    const onTouchEnd = (e) => {
        if (!touchRef.current.touchStart || !touchRef.current.touchEnd) return;
        const distance = touchRef.current.touchEnd - touchRef.current.touchStart;
        if (distance > minSwipeDistance) {
            setView(((view + 4) - 1) % 4)
        }
        else
        if (distance < -minSwipeDistance) {
            setView((view + 1) % 4);
        }
    }

    const LayoutCallback = useCallback(() => <Box
        data-name="box"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        sx={{
            flexGrow: 1,
            margin: "0 !important",
            padding: "0 !important",
            width: "100vw !important",
            height: "100vh",
            background: "black"
        }}
    >

        <AppBar
            sx={{
                width: "100vw !important",
                margin: "0 !important",
                padding: "0 !important",
                height: "20vh !important",
                background: "#adadad"
            }}
            data-name="appbar"
        >
            <Toolbar variant="dense" data-name="toolbar"
                sx={{
                    width: "100vw !important",
                    height: isMobile ? "10vh" : "2vh",
                    paddingTop: "2vh !important",
                    paddingBottom: "2vh !important",
                    margin: "0 !important"
                }}
            >
                <Grid2 container size={12}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "rows",

                    }}
                >
                    {
                        !isMobile &&
                        <Grid2 size={2.5}/>
                    }
                    {
                        (!isMobile || (isMobile && view === viewEnum.about)) &&
                        <Grid2 size={isMobile ? 12 : 2}>
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: isMobile ? (view === viewEnum.about ? "8vw" : "3vw") : "1vw"
                                }}
                                onClick={() => !isMobile ? setView(viewEnum.about) : ""}
                            >
                                About Me
                            </Typography>
                        </Grid2>
                    }
                    {
                        (!isMobile || (isMobile && view === viewEnum.projects)) &&
                        <Grid2 size={isMobile ? 12 : 2}>
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: isMobile ? (view === viewEnum.projects ? "8vw" : "3vw") : "1vw"
                                }}
                                onClick={() => !isMobile ? setView(viewEnum.projects) : ""}
                            >
                                Projects
                            </Typography>
                        </Grid2>
                    }
                    {
                        (!isMobile || (isMobile && view === viewEnum.books)) &&
                        <Grid2 size={isMobile ? 12 : 2}>
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: isMobile ? (view === viewEnum.books ? "8vw" : "3vw") : "1vw"
                                }}
                                onClick={() => !isMobile ? setView(viewEnum.books) : ""}
                            >
                                Reading List
                            </Typography>
                        </Grid2>
                    }
                    {
                        (!isMobile || (isMobile && view === viewEnum.endorsements)) &&
                        <Grid2 size={isMobile ? 12 : 2}>
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: isMobile ? (view === viewEnum.endorsements ? "8vw" : "3vw") : "1vw"
                                }}
                                onClick={() => !isMobile ? setView(viewEnum.endorsements) : ""}
                            >
                                Endorsements
                            </Typography>
                        </Grid2>
                    }
                </Grid2>
            </Toolbar>{
                view === viewEnum.about &&
                <AboutMe isMobile={isMobile} />
            }
            {
                view === viewEnum.projects &&
                <Projects isMobile={isMobile} />
            }
            {
                view === viewEnum.books &&
                <ReadingList isMobile={isMobile} />
            }
            {
                view === viewEnum.endorsements &&
                <Endorsements isMobile={isMobile} />
            }
        </AppBar>
    </Box>, [isMobile, view]);

    return <LayoutCallback />
}

export default Layout;