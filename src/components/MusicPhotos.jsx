import { Box, ImageList, ImageListItem } from "@mui/material";
import banjoCannonBeach from "../assets/profileImages/banjoOnCannonBeach.jpg";
import banjoBacklight from "../assets/profileImages/banjoBacklight.jpg"


export const MusicPhotos = () => {
    const musicPhotos = [
        {
            im:<img src={banjoCannonBeach} style={{width: "20vw", overflow: "hidden"}} alt="playing music on Cannon Beach with my bestie" />,
            col: 1,
            row: 2
        },
        {
            im: <img src={banjoBacklight} style={{width: "20vw", overflow: "hidden"}} alt="playing music while standing on a log sticking out of a lake backlit by the sun" />,
            col: 1,
            row: 2
        },
    ]

    return <Box
        sx={{
            width: "40vw"
        }}
    >
        <ImageList
            variant="quilted"
            cols={2}
            gap={1}
            sx={{
                overflow: "hidden"
            }}
        >
            {
                musicPhotos && musicPhotos.map((h,i) => (
                    <ImageListItem
                        key={i}
                        cols={h.col}
                        rows={h.row}
                    >
                        {h.im}
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Box>
}

export default MusicPhotos;