import { AppBar, Box, Grid2, Paper, Toolbar, Typography } from "@mui/material";
import react, { useState } from "react";
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

    return <Box data-name="box" sx={{flexGrow:1, margin: 0, padding: 0, height: "100vh", width: "100vw", overflow: "hidden"}}>
        <AppBar 
            position="sticky"
            sx={{width: "100vw", margin: 0, padding: 0, height: "20% !important", background: "#adadad"}}
            data-name="appbar"
        >
            <Toolbar variant="dense" data-name="toolbar" 
                sx={{width: "100vw"}}
            >
                <Grid2 container size={12}
                    sx={{
                        width: "100%",
                    }}
                >
                    <Grid2 size={2}>
                        <Typography
                            sx={{cursor: "pointer"
                            }}
                            onClick={() => setView(viewEnum.home)}
                        >
                            Home
                        </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography
                            sx={{cursor: "pointer"
                            }}
                            onClick={() => setView(viewEnum.about)}
                        >
                            About Me
                        </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography
                            sx={{cursor: "pointer"
                            }}
                            onClick={() => setView(viewEnum.projects)}
                        >
                            Projects
                        </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography
                            sx={{cursor: "pointer"
                            }}
                            onClick={() => setView(viewEnum.books)}
                        >
                            Reading List
                        </Typography>
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography
                            sx={{cursor: "pointer"
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
                <AboutThree setView={setView} viewEnum={viewEnum} />
            }{
                view === viewEnum.about &&
                <AboutMe />
            }
            {
                view === viewEnum.projects &&
                <Projects />
            }
            {
                view === viewEnum.books &&
                <ReadingList />
            }
            {
                view === viewEnum.endorsements &&
                <Endorsements />
            }
        </AppBar>
    </Box>
}

export default Layout;