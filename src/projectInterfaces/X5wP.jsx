import { Paper, Typography } from "@mui/material";
import x5Nozomi from "../assets/profileImages/x5Nozomi.png";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const X5wP = () => {
    const tracker = EventTracker("interface for X5wP");
    useEffect(() => {
        tracker("description","X5wP");
    },[]);
    
    return (
    <Paper
        sx={{
            margin: "auto",
            padding: "5vh 5vw 10vh 5vw"
        }}
    >
        <Typography
            variant="h4"
        >
            <img height="40" src={x5Nozomi} /> from <a href="https://www.packsize.com/" target="_blank" onClick={() => tracker("sent traffic to Packsize")}><img src="https://cdn.prod.website-files.com/63ed685119ed692cd8c428f2/63ed6bbabae7167cdb27e8a8_packsize_no_tagline_3C.svg" height="30" alt="Packsize Logo" /></a> and <a href="https://www.efi.com/" target="_blank" onClick={() => tracker("sent traffic to EFI")}><img height="30" src="https://www.efi.com/wp-content/uploads/sites/2/2023/07/efi-logo.svg" alt="EFI Logo"/></a>
        </Typography>
        <hr/>
        <Typography
            variant="h6"
        >
            This amazing project involved merging two separate machines built by two separate companies into one integrated system that not only cuts, folds and glues together custom sized boxes but also prints a custom image on the box. Each set of dimensions and each image is custom and the machine can easily handle new image and dimensions for each job that comes through. Prior to this, the only way to get printed boxes was to order them in batches from a corrugator and erect them at your own site.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            I worked on this machine from the proof of concept through the Alpha, through the Beta and the first install into customer warehouses. 
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            For more information about the project read the <a href="https://www.prnewswire.com/news-releases/packsize-and-efi-launch-x5-nozomi-the-industrys-first-full-color-erected-box-solution-302155692.html" target="_blank" onClick={() => tracker("visit x5wPrint press release")}>press release</a> and watch the <a
            href="https://www.youtube.com/watch?v=_6OFLXDnSoc"
            alt="X5 with Print"
            target="_blank"
            onClick={() => tracker("visit x5wPrint video")}
        >
            marketing video
        </a>. You'll be glad you did!
        </Typography>
        
    </Paper>);
}

export default X5wP;