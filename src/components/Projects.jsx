import { Box, Button, Grid2, IconButton, ImageList, ImageListItem, ImageListItemBar, Modal, Paper } from "@mui/material";
import react, { useRef, useState } from "react";
import Primes from "../projectInterfaces/Primes";
import CloseIcon from '@mui/icons-material/Close';
import projects from "../content/ProjectsContent";
import InfoIcon from '@mui/icons-material/Info';

export const Projects = () => {
    const [open,setOpen] = useState(false);
    const [current,setCurrent] = useState(<Primes />);
    const modalRef = useRef();

    return <Box
        sx={{
            width: "60vw",
            margin: "auto",
            overflowY: "auto",
            minHeight: "90vh"
        }}
    >
    <Button
        onClick={() => setOpen(true)}
    >
        Primes
    </Button>
        <ImageList
            cols={3}
            gap={8}
            variant="masonry"
        >
            {
                projects && projects.map((p,i) => (
                    <ImageListItem 
                        key={i}
                        cols={p.project.cols} 
                        rows={p.project.rows}
                    >
                        <img
                            srcSet={p.project.img}
                            src={p.project.img}
                            alt={p.project.title}
                            loading="lazy"
                        />
                        <ImageListItemBar 
                            title={p.title}
                            subtitle={p.title}
                            sx={{
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                console.log("icon: ", p.title);
                                setCurrent(p.project.link)
                                setOpen(true);
                            }}
                            actionIcon={
                                <IconButton
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        >
                        </ImageListItemBar>
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
    </Box>
}

export default Projects;