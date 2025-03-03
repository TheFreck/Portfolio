import { Paper, Typography } from "@mui/material";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const SolarSystem = () => {
    const tracker = EventTracker("interface for SolarSystem");
    useEffect(() => {
        tracker("description","SolarSystem");
    },[]);
    const LinkTo = () => <a href="https://thefreck.github.io/SolarSystem/" target="_blank" onClick={() => tracker("visit project","SolarSystem")}>Solar System Simulator</a>;

    return <Paper 
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
            This is a really fun curiosity project. It started by learning that our humble Earth is the only place in the solar system that experiences eclipses. Why would this be? The relative sizes of the Sun, Moon and Earth are so magically aligned with the the distances of the Earth and the Moon from the Sun and each other that when they are aligned the Moon and Sun appear the same size from Earth. Mars has two moons but they are too small to cover the sun, even though the sun appears smaller on Mars. All the other more distant planetary neighbors with moons are too distant for the same effect.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            While building out the Sun, Earth and the Moon I got carried away (not uncommon on curiosity projects!) and built out the inner solar system, Jupiter, and the astroid belt. The astroids are algorithmically generated and around 16% of them have another astroid orbiting them. This matches observations. Also, the Earth sits at a 23&#176; tilt which is responsible for our four seasons. This was an interesting problem to solve. In order to make the tilt consistent as it revolves around the sun I had to embed a mesh responsible for the tilt that I could reverse rotate as the planet revolved. Solving the "tilt problem" for Earth allowed me to easily tilt Mars at 25&#176;. If you zoom in you can see the tilt in the way the moons orbit their planets.
        </Typography>
        <br/>
        <Typography>
            * The next steps in this project will be to give Jupiter some moons and maybe a thin light ring. Once I solve the "ring problem" for Jupiter I will be able to introduce Saturn, which has a next level ring game <em>and</em> a bunch of moons. I don't have a timeline on this project since it is a curiosity project and evolves as I have time.
        </Typography>
    </Paper>
}

export default SolarSystem;