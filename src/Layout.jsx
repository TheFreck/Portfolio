import { AppBar, Box, Grid2, Paper, Toolbar, Typography } from "@mui/material";
import react, { useCallback, useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ReadingList from "./components/ReadingList";
import Endorsements from "./components/Endorsements";
import AboutThree from "./components/AboutThree";

const viewEnum = {
    home: 0,
    about: 1,
    projects: 2,
    books: 3,
    endorsements: 4
}

export const Layout = () => {
    const [view,setView] = useState(viewEnum.about);
    const [isMobile, setIsMobile] = useState(false);
    const minSwipeDistance = 50;
    const touchRef = useRef();

    useEffect(() => {
        touchRef.current = {
            touchStart: null,
            touchEnd: null
        };
        window.onresize = () => {
            if(!isMobile && window.innerWidth <= 800){
                setIsMobile(true);
            }
            else
            if(isMobile && window.innerWidth > 800){
                setIsMobile(false);
            }
        }
    },[]);

    const onTouchStart = (e) => {
        touchRef.current.touchStart = e.targetTouches[0].clientX;
        touchRef.current.touchEnd = null;
    }

    const onTouchMove = (e) => {
        touchRef.current.touchEnd = e.targetTouches[0].clientX;
    }

    const onTouchEnd = (e) => {
        if(view === 0) return;
        if(!touchRef.current.touchStart || !touchRef.current.touchEnd) return;
        const distance = touchRef.current.touchEnd - touchRef.current.touchStart;
        if(distance > minSwipeDistance){
            setView(((view+5)-1)%5)
        }
        else
        if(distance < -minSwipeDistance){
            setView((view+1)%5);
        }
    }

    const LayoutCallback = useCallback(() => <Box 
        data-name="box" 
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        sx={{
            flexGrow:1, 
            margin: 0, 
            padding: 0, 
            height: "100vh", 
            width: "100vw", 
            overflow: "hidden"
            }}
        >
            
            {console.log(isMobile ? (view === viewEnum.home ? "mobile home" : "mobile away") : "desktop")}
        <AppBar 
            position="sticky"
            sx={{width: "100vw", margin: 0, padding: 0, height: "20% !important", background: "#adadad"}}
            data-name="appbar"
        >
            <Toolbar variant="dense" data-name="toolbar" 
                sx={{
                    width: "100vw",
                    height: isMobile ? "10vh" : "2vh",
                    paddingTop: "2vh"
                }}
            >
                <Grid2 container size={12}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "rows",

                    }}
                >
                    <Grid2 size={isMobile ? (view === viewEnum.home ? 4 : 2) : 2}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: isMobile ? (view === viewEnum.home ? "6vw" : "3vw") : "10vw",
                            }}
                            onClick={() => setView(viewEnum.home)}
                        >
                            Home
                        </Typography>
                    </Grid2>
                    <Grid2 size={isMobile ? (view === viewEnum.about ? 4 : 2) : 2}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: isMobile ? (view === viewEnum.about ? "6vw" : "3vw") : "10vw"
                            }}
                            onClick={() => setView(viewEnum.about)}
                        >
                            About Me
                        </Typography>
                    </Grid2>
                    <Grid2 size={isMobile ? (view === viewEnum.projects ? 4 : 2) : 2}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: isMobile ? (view === viewEnum.projects ? "6vw" : "3vw") : "10vw"
                            }}
                            onClick={() => setView(viewEnum.projects)}
                        >
                            Projects
                        </Typography>
                    </Grid2>
                    <Grid2 size={isMobile ? (view === viewEnum.books ? 4 : 2) : 2}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: isMobile ? (view === viewEnum.books ? "6vw" : "3vw") : "10vw"
                            }}
                            onClick={() => setView(viewEnum.books)}
                        >
                            Reading List
                        </Typography>
                    </Grid2>
                    <Grid2 size={isMobile ? (view === viewEnum.endorsements ? 4 : 2) : 2}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: isMobile ? (view === viewEnum.endorsements ? "6vw" : "3vw") : "10vw"
                            }}
                            onClick={() => setView(viewEnum.endorsements)}
                        >
                            Endorsements
                        </Typography>
                    </Grid2>
                </Grid2>
            </Toolbar>
            {
                view === viewEnum.home && 
                <AboutThree setView={setView} viewEnum={viewEnum} isMobile={isMobile} />
            }{
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
    </Box>, [isMobile,view]);

    return <LayoutCallback />
}

export default Layout;