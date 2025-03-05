import { AppBar, Box, Grid2, Toolbar, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import EventTracker from "./EventTracker";

const viewEnum = {
    about: 0,
    projects: 1,
    books: 2,
    endorsements: 3
};

const routes = [
  "/Portfolio/",
  "/Portfolio/Projects",
  "/Portfolio/ReadingList",
  "/Portfolio/Endorsements"
];

export const Layout = (props) => {
    const {isMobile} = props;
    const tracker = EventTracker("layout");
    const [view, setView] = useState(viewEnum.about);
    const navigate = useNavigate();
    
    useEffect(() => {
        tracker(`${isMobile ? "swipe" : "navigate"} to page`, routes[view]);
        navigate(routes[view]);
    }, [view]);
    
    const minSwipeDistance = 150;
    const touchRef = useRef();

    useEffect(() => {
        touchRef.current = {
            touchStartX: null,
            touchEndX: null,
            touchStartY: null,
            touchEndY: null
        };
    }, []);
    const onTouchStart = (e) => {
        touchRef.current.touchStartX = e.targetTouches[0].clientX;
        touchRef.current.touchStartY = e.targetTouches[0].clientY;
        touchRef.current.touchEndX = null;
        touchRef.current.touchEndY = null;
    }

    const onTouchMove = (e) => {
        touchRef.current.touchEndX = e.targetTouches[0].clientX;
        touchRef.current.touchEndY = e.targetTouches[0].clientY;
    }

    const onTouchEnd = (e) => {
        if (!touchRef.current.touchStartX || !touchRef.current.touchEndX) return;
        if(Math.abs(touchRef.current.touchStartY-touchRef.current.touchEndY) >= minSwipeDistance) return;
        const distance = touchRef.current.touchEndX - touchRef.current.touchStartX;
        if (distance > minSwipeDistance) {
            setView(((view + 4) - 1) % 4)
        }
        else
            if (distance < -minSwipeDistance) {
                setView((view + 1) % 4);
            }
    }

    const LayoutCallback = useCallback(() =>
        <Box
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
                            <Grid2 size={2.5} />
                        }
                        {
                            (!isMobile || (isMobile && view === viewEnum.about)) &&
                            <Grid2 size={isMobile ? 12 : 2}>
                                <NavLink to="/Portfolio/" end>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#303030",
                                            fontSize: isMobile ? (view === viewEnum.about ? "8vw" : "3vw") : "1vw"
                                        }}
                                    >
                                        About Me
                                    </Typography>
                                </NavLink>
                            </Grid2>
                        }
                        {
                            (!isMobile || (isMobile && view === viewEnum.projects)) &&
                            <Grid2 size={isMobile ? 12 : 2}>
                                <NavLink to="/Portfolio/Projects" end>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#303030",
                                            fontSize: isMobile ? (view === viewEnum.projects ? "8vw" : "3vw") : "1vw"
                                        }}
                                    >
                                        Projects
                                    </Typography>
                                </NavLink>
                            </Grid2>
                        }
                        {
                            (!isMobile || (isMobile && view === viewEnum.books)) &&
                            <Grid2 size={isMobile ? 12 : 2}>
                                <NavLink to="/Portfolio/ReadingList" end>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#303030",
                                            fontSize: isMobile ? (view === viewEnum.books ? "8vw" : "3vw") : "1vw"
                                        }}
                                    >
                                        Reading List
                                    </Typography>
                                </NavLink>
                            </Grid2>
                        }
                        {
                            (!isMobile || (isMobile && view === viewEnum.endorsements)) &&
                            <Grid2 size={isMobile ? 12 : 2}>
                                <NavLink to="/Portfolio/Endorsements" end>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#303030",
                                            fontSize: isMobile ? (view === viewEnum.endorsements ? "8vw" : "3vw") : "1vw"
                                        }}
                                    >
                                        Endorsements
                                    </Typography>
                                </NavLink>
                            </Grid2>
                        }
                    </Grid2>
                </Toolbar>
                {props.children}
            </AppBar>
        </Box>
        , [isMobile, view]);

    return <LayoutCallback />
}

export default Layout;