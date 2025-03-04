import { Paper, Typography } from "@mui/material";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const Life = () => {
    const tracker = EventTracker("interface Life");
    useEffect(() => {
        tracker("description","Life");
    },[]);
    const LinkTo = () => <a href="https://thegameoflifeserver20250114123040.azurewebsites.net" target="_blank" onClick={() => tracker("visit project","Life")}>John Conway's Game of Life</a>;

    return (
        <Paper
            sx={{
                padding: "5vh 5vw"
            }}
        >
            <Typography
                variant="h4"
            >
                <LinkTo />
            </Typography>
            <hr/>
            <Typography
                variant="h6"
            >
                John Conway's Game of Life is a fun way to explore chaos and complexity. The game board is a grid where each cell can be either alive or dead. If a cell is alive and it has either 3 or 4 live neighbors then it will survive the round and live into the next generation. If a cell is dead but it has 3 neighbors then it will come alive in the next round.
            </Typography>
            <br/>
            <Typography
                variant="h6"
            >
                With these simple rules a whole world of interesting patterns emerge.
            </Typography>
            <br/>
            <Typography
                variant="h6"
            >
                The thoughts that come from studying this game have broad implications about life, the universe and everything. For instance, in our universe time flows in the direction of greater entropy. This means that bread cannot unbake itself back into dough and ash cannot unburn itself back to wood. The same is true in the Game of Life. Because the current generation depends on the prior generation it is completely determined. However, in the game there are more than one way to arrive at a game state so while tomorrow is completely determined by today, there might be many yesterdays that lead to the same today. Is this true of our universe as well?
            </Typography>
            <br/>
            <Typography>
                * This application was built on the framework in my React Game Loop project also listed here.
            </Typography>
        </Paper>
    )
}

export default Life;