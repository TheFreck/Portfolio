import { Box, Fab, Grid2, Modal, Paper } from "@mui/material";
import react, { useRef, useState } from "react";
import Primes from "../projectInterfaces/Primes";
import CloseIcon from '@mui/icons-material/Close';

export const Projects = () => {
    const [open,setOpen] = useState(false);
    const [current,setCurrent] = useState(<div/>);
    const modalRef = useRef();

    return <Paper>
        Projects will appear here
        <ul>
            <li>X5wPrint</li>
            <li>TheFreck Exchange</li>
            <li>Game of Life</li>
            <li>React Game Loop</li>
            <li>Fourier Fun</li>
            <li>Circle Inversion</li>
            <li>Bishop Problem</li>
            <li>Secret Code using Playing Cards</li>
            <li>Simple Assembly Interpreter</li>
            <li onClick={() => {
                setCurrent(<Primes />);
                setOpen(!open);
            }}>Prime Number Generator</li>
            <li>Find the total area covered by rectangles</li>
            <li>Finding Integer Partitions</li>
            <li>Parsing and evaluating Mathematical Expressions</li>
            <li>Binary Multiples using Regex</li>
            <li>Binomial Expansion</li>
            <li>Linear Systems of Equations</li>
            <li>Bubble Trader</li>
        </ul>
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
    </Paper>
}

export default Projects;