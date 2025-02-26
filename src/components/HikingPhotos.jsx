import { Box, ImageList, ImageListItem } from "@mui/material";
import edge from "../assets/profileImages/onTheEdge.jpg";
import summit from "../assets/profileImages/summit.jpg";
import timp from "../assets/profileImages/timp.jpg";

export const HikingPhotos = () => {
    const hikingPhotos = [
        {
            im:<img src={edge} style={{width: "20vw", overflow: "hidden"}} alt="perching on the edge of a cliff on the way to the top of Timpanogos" />,
            col: 1,
            row: 2
        },
        {
            im: <img src={summit} style={{width: "20vw", overflow: "hidden"}} alt="reaching to summit of Frary Peak" />,
            col: 1,
            row: 1
        },
        {
            im: <img src={timp} style={{width: "20vw", overflow: "hidden"}} alt="standing on the survey shack on the summit of Timpanogoss" />,
            col: 1,
            row: 1
        }
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
                hikingPhotos && hikingPhotos.map((h,i) => (
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

export default HikingPhotos;