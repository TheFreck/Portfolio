import { Box, Grid2, Paper, Tooltip, Typography } from "@mui/material";
import react, { useCallback, useEffect, useRef, useState } from "react";
import side from "../assets/profileImages/side.jpg";
import hatTip from "../assets/profileImages/hatTip.jpg";
import bigSmile from "../assets/profileImages/bigSmile.jpg";
import hatSmile from "../assets/profileImages/hatSmile.jpg";
import hatSmile2 from "../assets/profileImages/hatSmile2.jpg";
import content from "../content/AboutMeContent";
import EventTracker from "../EventTracker";

export const AboutMe = ({isMobile}) => {
    const tracker = EventTracker("About Me");
    const [imageClick, setImageClick] = useState(0);

    useEffect(() => {
        tracker("about me page");
        console.log("loading about me");
    },[]);

    const profileImages = [
        hatSmile,
        hatSmile2,
        hatTip,
        bigSmile,
        side
    ];

    const Mobile = () => <Paper
        elevation={7}
        sx={{
            width: "100vw",
            margin: "auto",
            overflowY: "scroll",
            minHeight: "100vh",
        }}
    >
        <img 
            src={profileImages[imageClick]} 
            style={{
                width: "100vw",
                borderRadius: "50%",
                boxShadow: "10px 10px 15px gray",
                marginLeft: 0,
                marginTop: 0,
                overflowY: "scroll"
            }}
            onClick={() => !mobile ? setImageClick((imageClick + 1)%profileImages.length) : ""}
        />
        <Paper
            sx={{
                padding: "2vh 2vw",
                overflowY: "scroll"
            }}
        >
            {
                content && content.map((c,i) => (
                    <div key={i}>{c}<br/></div>
                ))
            }
        </Paper>
    </Paper>;

    const Desktop = () => <Paper
        elevation={7}
        sx={{
            width: "50vw",
            margin: "auto",
            padding: "5vh 5vw",
            overflowY: "scroll"
        }}
    >
        <Grid2 
            size={12} 
            container
            sx={{display: "flex", flexDirection: "row", textWrap: "pretty"}}
        >
            <Tooltip 
                title="click photo to scroll" 
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
                            width: "9vw",
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
                <br />
            </Grid2>
        </Grid2>
        {
            content && content.map((c,i) => (
                i > 1 && <div key={i}>{c}<br/></div>
            ))
        }
    </Paper>

    return <Box>
        {
            isMobile ?
            <Mobile /> :
            <Desktop /> 
        }
    </Box>;
}

export default AboutMe;