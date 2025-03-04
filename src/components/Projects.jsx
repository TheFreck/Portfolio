import { Box, Container, Grid2, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Modal, } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Primes from "../projectInterfaces/Primes";
import CloseIcon from '@mui/icons-material/Close';
import projects from "../content/ProjectsContent";
import GitHubIcon from '@mui/icons-material/GitHub';
import EventTracker from "../EventTracker";

export const Projects = ({ isMobile }) => {
    const tracker = EventTracker("Projects");
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(<Primes />);
    const modalRef = useRef();

    useEffect(() => {
        tracker("view page", "projects");
    }, []);

    const Mobile = () => <Container
        sx={{
            width: "100vw",
            margin: 0,
            height: "100vh",
            padding: "0 0 5vh 0",
            overflowY: "auto",
            borderRadius: "5px",
        }}
    >

        <Box>
            {
                projects && projects.map((p, i) => (
                    <ImageListItem
                        key={i}
                        cols={p.project.cols}
                        rows={p.project.rows}
                        sx={{
                            cursor: "pointer",
                            boxShadow: "-10px 10px 15px gray, 10px 10px 15px gray",
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
                                tracker("read about project",p.project.title);
                            }}
                        />
                        <Link
                            href={p.project.repo}
                            target="_blank"
                            onClick={() => tracker("go to repo", p.project.title)}
                        >
                            <ImageListItemBar
                                title={<h2>{p.title}</h2>}
                                subtitle={<h2>View Repo</h2>}
                                actionIcon={
                                    <IconButton>
                                        <GitHubIcon
                                            sx={{
                                                width: "20vw",
                                                height: "20vw"
                                            }}
                                        />
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
        </Box>
    </Container>;

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
                                tracker("read about project",p.project.title);
                            }}
                        />
                        <Link
                            href={p.project.repo}
                            target="_blank"
                            onClick={() => tracker("go to repo", p.project.title)}
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