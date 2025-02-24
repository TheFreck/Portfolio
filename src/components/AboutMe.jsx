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
import content from "../content/AboutMeContent";

const goPositions = <p>1.74089650659 × 10<sup>172</sup> (that's 17,408,965,065,900,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 ways of organizing stones on a board)</p>
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
    ];

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
                {content[0]}
                <br/>
                {content[1]}
            </Grid2>
        </Grid2>
        {
            content && content.map((c,i) => (
                i > 1 && <div key={i}>{c}<br/></div>
            ))
        }
    </Paper>
}

export default AboutMe;