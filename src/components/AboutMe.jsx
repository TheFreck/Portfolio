import { Box, Container, Grid2, Paper, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
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
        tracker("view page","about me");
    },[]);

    const profileImages = [
        hatSmile,
        hatSmile2,
        hatTip,
        bigSmile,
        side
    ];

    const Mobile = () => <Container
        sx={{
            width: "100vw !important",
            margin: "0 !important",
            height: "100vh",
            padding: "0 0 5vh 0 !important",
            overflowY: "auto"
        }}
    >
        <Box>
            <img 
                src={profileImages[imageClick]} 
                style={{
                    width: "95vw",
                    borderRadius: isMobile ? "5px" : "50%",
                    boxShadow: "-10px 10px 15px gray, 10px 10px 15px gray",
                    margin: "2.5vw",
                    marginTop: "0",
                }}
                onClick={() => !isMobile ? setImageClick((imageClick + 1)%profileImages.length) : ""}
            />
            <Paper
                sx={{
                    padding: "2vh 5vw !important",
                    overflowY: "scroll"
                }}
            >
                {
                    content && content.map((c,i) => (
                        <div key={i}>{c}<br/></div>
                    ))
                }
            </Paper>
        </Box>
    </Container>;

    const ImageComponent = () => <Tooltip 
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
        <img src={profileImages[imageClick]} 
            style={{
                height: "20em",
                borderRadius: "50%",
                boxShadow: "10px 10px 15px gray",
                marginTop: "0vh"
            }} 
        />
    </Tooltip>;

    const TopText = () => <Container>
        {content[0]}
        <br/>
        {content[1]}
        <br />
    </Container>

    const Desktop = () => <Paper
        elevation={7}
        sx={{
            width: "50vw",
            margin: "auto",
            padding: "5vh 5vw",
            overflowY: "auto",
        }}
    >
        <Grid2 
            size={12} 
            container
            spacing={5}
        >
            <Grid2 size={3}>
                <ImageComponent />
            </Grid2>
            <Grid2 size={9}
            >
                <TopText />
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