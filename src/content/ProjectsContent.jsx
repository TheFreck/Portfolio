import { Typography } from "@mui/material";
import Primes from "../projectInterfaces/Primes";
import x5wP from "../assets/profileImages/x5wP.png";
import bowler from "../assets/profileImages/bowler.jpg";
import lifeGif from "../assets/profileImages/life.gif";
import LoopImg from "../assets/profileImages/Loop.png";
import circleInversion from "../assets/profileImages/circleInversion.png";
import fourier from "../assets/profileImages/fourier.jpg";
import primesGif from "../assets/profileImages/primes.gif";
import X5wP from "../projectInterfaces/X5wP";
import Life from "../projectInterfaces/Life";
import GameLoop from "../projectInterfaces/GameLoop";
import CircleInversion from "../projectInterfaces/CircleInversion";
import FreckExchange from "../projectInterfaces/FreckExchange";
import FourierFun from "../projectInterfaces/FourierFun";
import bubbles from "../assets/profileImages/Bubblesljpeg";
import BubbleTrader from "../projectInterfaces/BubbleTrader";

export const projects = [
    {
        title: "TheFreck Exchange",
        project: {
            img: bowler,
            title: "TheFreck Exchange",
            link: <FreckExchange />,
            cols:2,
            rows:2
        }
    },
    {
        title: "React Game Loop",
        project: {
            img: LoopImg,
            title: "Front End Loop",
            link: <GameLoop />,
            rows:2,
            cols:2
        }
    },
    {
        title: "Conway's Game of Life",
        project: {
            img: lifeGif,
            title: "Conway's Game of Life",
            link: <Life />,
            cols: 1,
            rows:1
        }
    },
    {
        title: "Circle Inversion",
        project: {
            img: circleInversion,
            title: "Circle Inversion",
            link: <CircleInversion />,
            cols:1,
            rows:1
        }
    },
    {
        title: "Fourier Fun",
        project: {
            img: fourier,
            title: "Exploration of the Fourier Series",
            link: <FourierFun />,
            rows:1,
            cols:1
        }
    },
    {
        title: "Bubble Trader",
        project: {
            img: bubbles,
            title: "Bubble Trader",
            link: <BubbleTrader />,
            rows:1,
            cols:1
        }
    },
    {
        title: "X5 with Print",
        project: {
            img: x5wP,
            title: "X5 with Print",
            link: <X5wP />,
            cols:1,
            rows:2
        }
    },
    {
        title: "Prime Number Generator",
        project: {
            img: primesGif,
            title: "Prime Number Generator",
            link: <Primes />,
            cols:1,
            rows: 1
        }
    },
    // {
    //     title: "Find the Total Area Covered by Rectangles",
    //     description: [
    //         <Typography>
    //             Given a bunch of rectangles with arbitrary dimensions, what is the total area covered by them?
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Finding Integer Partitions",
    //     description: [
    //         <Typography>
    //             Considered an easy hard problem in Mathematics. Very fun to think about...
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Parsing and Evaluating Matghematical Expressions",
    //     description: [
    //         <Typography>
    //             From a string input it returns the solution to the expression
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Binary Multiples using Regex",
    //     description: [
    //         <Typography>
    //             Find the multiples using regex
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Binomial Expansion",
    //     description: [
    //         <Typography>
    //             performs a binomial expansion
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Linear Systems of Equations",
    //     description: [
    //         <Typography>
    //             Evaluates and solves systems of equations
    //         </Typography>
    //     ],
    //     project: {}
    // },
    // {
    //     title: "Simple Assembly Interpreter",
    //     description: [
    //         <Typography>
    //             An Assembly Interpreter
    //         </Typography>,
    //         <Typography>
    //             A machine within a machine within a machine within a...
    //         </Typography>
    //     ],
    //     project: {}
    // },
];

export default projects;