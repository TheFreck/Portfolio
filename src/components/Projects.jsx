import { Box, Button, Grid2, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Modal, Paper, Tooltip } from "@mui/material";
import react, { useCallback, useEffect, useRef, useState } from "react";
import Primes from "../projectInterfaces/Primes";
import CloseIcon from '@mui/icons-material/Close';
import projects from "../content/ProjectsContent";
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import EventTracker from "../EventTracker";

export const Projects = ({isMobile}) => {
    const tracker = EventTracker("Projects");
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(<Primes />);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    const modalRef = useRef();

    useEffect(() =>{
        tracker("projects page");
        console.log("loading projects");
    },[]);

    const Mobile = () => <Box
        sx={{
            width: "100vw",
            margin: "auto",
            overflowY: "auto",
        }}
    >
        {
            projects && projects.map((p, i) => (
                <ImageListItem
                    key={i}
                    cols={p.project.cols}
                    rows={p.project.rows}
                    sx={{
                        cursor: "pointer"
                    }}
                >
                    <img
                        srcSet={p.project.img}
                        src={p.project.img}
                        alt={p.project.title}
                        loading="lazy"
                        onClick={() => {
                            setCurrent(p.project.link)
                            setOpen(true);
                            tracker(`read about project ${p.project.title}`);
                        }}
                    />
                    <Link 
                        href={p.project.repo} 
                        target="_blank"
                        onClick={() => tracker(`go to repo ${p.project.title}`)}
                    >
                        <ImageListItemBar
                            title={<h2>{p.title}</h2>}
                            subtitle={<h2>View Repo</h2>}
                            actionIcon={
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            }
                        >
                        </ImageListItemBar>
                    </Link>
                </ImageListItem>
            ))
        }<Modal
        open={open}
        onClose={() => setOpen(false)}
        ref={modalRef}
    >
        <Box
            sx={{
                background: "white",
                width: "80vw",
                margin: "5vh auto"
            }}
        >
            <Grid2
                sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                }}
            >
                <CloseIcon
                    sx={{
                        fontSize: "3em",
                        marginTop: "1vh",
                        marginRight: "1vw",
                        marginLeft: "auto",
                        marginBottom: "-3vh"
                    }}
                    onClick={() => setOpen(false)}
                />
            </Grid2>
            <Grid2>
                {current}
            </Grid2>
        </Box>
    </Modal>
    </Box>;

    const Desktop = () => <Box
        sx={{
            width: "60vw",
            margin: "auto",
            overflowY: "scroll",
            minHeight: "90vh",
            maxHeight: "95vh"
        }}
    >
        <ImageList
            cols={3}
            gap={8}
            variant="masonry"
        >
            {
                projects && projects.map((p, i) => (
                    <ImageListItem
                        key={i}
                        cols={p.project.cols}
                        rows={p.project.rows}
                        sx={{
                            cursor: "pointer"
                        }}
                    >
                        <img
                            srcSet={p.project.img}
                            src={p.project.img}
                            alt={p.project.title}
                            loading="lazy"
                            onClick={() => {
                                setCurrent(p.project.link)
                                setOpen(true);
                                tracker(`read about project ${p.project.title}`);
                            }}
                        />
                        <Link 
                            href={p.project.repo} 
                            target="_blank"
                            onClick={() => tracker(`go to repo ${p.project.title}`)}
                        >
                            <ImageListItemBar
                                title={p.title}
                                subtitle="View Repo"
                                actionIcon={
                                    <IconButton>
                                        <GitHubIcon />
                                    </IconButton>
                                }
                            >
                            </ImageListItemBar>
                        </Link>
                    </ImageListItem>
                ))
            }
        </ImageList>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            ref={modalRef}
        >
            <Box
                sx={{
                    background: "white",
                    width: "80vw",
                    margin: "5vh auto"
                }}
            >
                <Grid2
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                    }}
                >
                    <CloseIcon
                        sx={{
                            fontSize: "3em",
                            marginTop: "1vh",
                            marginRight: "1vw",
                            marginLeft: "auto",
                            marginBottom: "-3vh"
                        }}
                        onClick={() => setOpen(false)}
                    />
                </Grid2>
                <Grid2>
                    {current}
                </Grid2>
            </Box>
        </Modal>
    </Box>;

    return <Box>
        {
            isMobile ?
            <Mobile /> :
            <Desktop /> 
        }
    </Box>
}

export default Projects;