import { Paper, Typography } from "@mui/material";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const GameLoop = () => {
    const tracker = EventTracker("interface GameLoop");
    useEffect(() => {
        tracker("description","GameLoop");
    },[]);
    const LinkTo = () => <a href="https://reactgameloopserver20250114154525.azurewebsites.net/" target="_blank" onClick={() => {
        tracker("visit project","GameLoop");
    }}>game loop</a>;

    return <Paper
        sx={{
            margin: "auto",
            padding: "5vh 5vw 10vh 5vw"
        }}
    >
        <Typography
            variant="h4"
        >
            Front End Game Loop
        </Typography>
        <hr/>
        <Typography
            variant="h6"
        >
            The <LinkTo /> is super simple. All it does is count upward twice per second. There is a button to start and stop the counter and a reset button to start back over at 0. Every round it reaches out to the server for an update. In this simple version it simply logs to the console. The idea is that this is generic enough that any game context can be applied.
        </Typography>
        
    </Paper>
}

export default GameLoop;