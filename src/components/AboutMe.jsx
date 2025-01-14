import { Grid2, Paper, Tooltip, Typography } from "@mui/material";
import react, { useState } from "react";
import side from "../assets/profileImages/side.jpg";
import hatTip from "../assets/profileImages/hatTip.jpg";
import bigSmile from "../assets/profileImages/bigSmile.jpg";
import hatSmile from "../assets/profileImages/hatSmile.jpg";
import hatSmile2 from "../assets/profileImages/hatSmile2.jpg";
import timp from "../assets/profileImages/timp.jpg";
import banjoBacklight from "../assets/profileImages/banjoBacklight.jpg"
import rubiks1 from "../assets/profileImages/rubiks1.jpg";
import rubiks2 from "../assets/profileImages/rubiks2.jpg";
import fiveThree from "../assets/profileImages/five&three.jpg";
import unsolvedGhost from "../assets/profileImages/unsolvedGhost.jpg";
import solvedGhost from "../assets/profileImages/solvedGhost.jpg";

const goPositions = <p>1.74089650659 × 10<sup>172</sup></p>
const totalAtoms = <p>10<sup>80</sup></p>
const timpanogos = <img src={timp} style={{width: "20vw", overflow: "hidden"}} />
const banjoBack = <img src={banjoBacklight} style={{width: "20vw", overflow: "hidden"}} />
const rubik2 = <img src={rubiks2} style={{width: "20vw"}} />
const five3 = <img src={fiveThree} style={{width: "20vw"}} />
const unGhost = <img src={unsolvedGhost} style={{width: "20vw"}} />
const ghost = <img src={solvedGhost} style={{width: "20vw"}} />

export const AboutMe = () => {
    const [imageClick, setImageClick] = useState(0);
    const profileImages = [
        hatSmile,
        hatSmile2,
        hatTip,
        bigSmile,
        side
    ]

    return <Paper
        elevation={7}
        sx={{
            width: "50vw",
            margin: "auto",
            padding: "5vh 5vw"
        }}
    >
        <Grid2 size={12} container
            sx={{display: "flex", flexDirection: "row", textWrap: "pretty"}}
        >
            <Tooltip 
                title="click photo" 
                placement="bottom-end"
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [-50,-75]
                                }
                            }
                        ]
                    }
                }}
                onClick={() => setImageClick((imageClick + 1)%profileImages.length)}
            >
                <Grid2 size={3}>
                    <img src={profileImages[imageClick]} 
                        style={{
                            width: "10vw",
                            borderRadius: "50%",
                            boxShadow: "10px 10px 15px gray",
                            marginLeft: "-2vw",
                            marginTop: "0vh"
                        }}
                    />
                </Grid2>
            </Tooltip>
            <Grid2 size={9}>
                <Typography
                    style={{
                        textAlign: "justify"
                    }}
                >
                    <b style={{fontSize: "2em", color: "#606060"}}>MY NAME is Chris Freckleton </b> <em>(a.k.a. Freck).</em> I have been developing full stack applications for the past five years or more. Prior to my career in software development I spent some really great years working in finance and economics and bring that experience to my current endeavors. Primarily, my engineering experience has been working with C# and JavaScript, though I have explored other languages such as Python.
                </Typography>
                <br/>
                <Typography
                    style={{textAlign: "justify"}}
                >
                    Beyond developing clean and efficient software I enjoy pushing myself both physically and mentally. Of particular interest are mathematics, physics, philosophy, economics, the game of Go, <Tooltip title={banjoBack}><em>music (theory and practice)</em></Tooltip> and <Tooltip title={rubik2}><em>algorithmically</em></Tooltip> solving <Tooltip title={five3}><em>patterns</em></Tooltip> on <Tooltip title={unGhost}><em>rubik's cubes</em></Tooltip> of <Tooltip title={ghost}><em>all types.</em></Tooltip>
                </Typography>
            </Grid2>
        </Grid2>
        <Typography
            style={{textAlign: "justify"}}
        >
            As a human mind I prefer a large complex world with many interdependencies. Finding connections between the distribution of chords in a song and the interesting patterns that emerge through optimization algorithms excites me. In studying the game of Go I am fascinated how very simple rules can create a combinatorially vast array of outcomes. It is said that no two games have ever been identical and on a board of 19x19 <Tooltip title={goPositions}><em>the number of permutations</em></Tooltip> easily surpasses the <Tooltip title={totalAtoms}><em>number of atoms in the observable universe!</em></Tooltip>
        </Typography>
        <br/>
        <Typography
            style={{textAlign: "justify"}}
        >
            On weekends I enjoy standing on top of one of the many mountains that surround the valley. Of course, standing on the summit only means something if I worked hard to get there. Spending an entire day pushing myself to exhaustion to reach the top of <Tooltip title={timpanogos}><em>Lone Peak or Timpanogos</em></Tooltip> has opened up solutions to life and engineering problems that were not obvious from the outset. I'm fairly convinced that the key to solving intractable problems of all kinds involves moving my legs.
        </Typography>
        <br/>
        <Typography
            style={{textAlign: "justify"}}
        >
            Another amazing tool is the human powered kayak. The peace of sitting in the middle of a lake pondering the shape of the waves is better than hours of therapy. Of course a peaceful lake can be good for one type of experience but a windy lake with high waves forces me to work hard and do what I might not have thought I could. One of my favorite pasttimes is proving wrong that part of me that thinks it can't do something.
        </Typography>
    </Paper>
}

export default AboutMe;