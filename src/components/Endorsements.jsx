import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import react, { useState } from "react";

export const Endorsements = () => {
    const [expanded,setExpanded] = useState("panel1");

    const endorsements = [
        {
            summary: "Eric Bulloch - Senior Developer - Worked together at Packsisze",
            body: [
                <Typography>
                    <hr/>
                    "I am pleased to recommend Chris, with whom I had the pleasure of working at Packsize on different software development teams. Chris consistently demonstrated <b>professionalism, technical expertise, and a collaborative spirit</b> that made him a valuable asset.
                </Typography>,
                <Typography>
                    "I frequently sought Chris’s advice and direction, especially when our team needed to integrate with the software his team was developing. Chris led our integration meetings with <b>enthusiasm and clarity</b>, energizing both teams and setting a well-defined path forward. He provided our team with <b>clear testing steps</b>, which worked seamlessly on the first attempt, greatly facilitating our work and <b>increasing our efficiency.</b>
                </Typography>,
                <Typography>
                    "I was particularly impressed by Chris's <b>resilience.</b> Despite a period when several of his team members left for other opportunities, Chris maintained a <b>high level of productivity.</b> He presented his work consistently in team demos, regardless of the team's size, showcasing his <b>commitment and dependability.</b>
                </Typography>,
                <Typography>
                    "Beyond his professional strengths, Chris is a person of <b>integrity and character.</b> He exemplifies the qualities on which a <b>strong team culture</b> can be built, and I have no doubt he will be an outstanding addition to any organization."
                </Typography>
            ]
        },
        {
            summary: `Eric Ewing - Senior Manager, Software Engineering, Architecture and Practices - Worked together at Packsize`,
            body: [
                <Typography>
                    <hr/>
                    "Chris brings a <b>learning mindset</b> and <b>energy</b> to his role every day! He grew tremendously and was a <b>key contributor</b> to one of the <b>most exciting and innovative programs at Packsize.</b> To see the success of the X5P and the unique capabilities it brings our product portfolio and customers is in no small part thanks to Chris. He <b>works and collaborates well with others.</b> He receives <b>coaching and mentorship</b> from leaders and peers, is <b>genuinely curious,</b>, and wants to grow."
                </Typography>
            ]
        },
        {
            summary: `Blake Adams - Software Manager - Worked together at Packsize`,
            body: [
                <Typography>
                    <hr/>
                    I highly recommend Chris for any role that requires a <b>talented</b> and <b>reliable</b> software engineer. As their manager, I had the privilege of seeing firsthand their <b>exceptional ability</b> to solve <b>complex problems</b> with a <b>structured, logical approach</b> and <b>impressive mathematical intelligence.</b> Chris consistently demonstrated an <b>analytical mindset,</b> quickly grasping challenging concepts and translating them into <b>effective solutions.</b> Their soft skills were equally commendable; they excel in both <b>communicating ideas clearly</b> and fostering a <b>positive, collaborative team environment.</b> Beyond their technical abilities, Chris genuinely cares about their team members' growth and well-being, going out of their way to support and uplift those around them. They would be a tremendous asset to any organization, <b>both technically and interpersonally.</b>"

                </Typography>
            ]
        }, {
            summary: `Matthew McQuillan - Senior DevOps/SRE Engineer - Worked together at Packsize`,
            body: [
                <Typography>
                    <hr/>
                    "I had the pleasure of working with Chris while I was a DevOps/SRE engineer and he was a Software Engineer. He is a <b>very intelligent</b> and professional developer that always took on <b>difficult code problems</b> (tough dimensioning/design algorithms and mathematical problems) as a <b>personal challenge.</b> As a developer he was very <b>easy to work</b> with and accepted DevOps advice and principles. <b>Very humble</b> and <b>friendly</b> to work with. He will be a great addition to any company with <b>complex</b> automation design/dimensioning products/projects. It was always great working with Chris and he will be missed."
                </Typography>
            ]
        },
        {
            summary: `Vaughn Bigham - Software Engineering Manager - Worked together at Prentice Worx`,
            body: [
                <Typography>
                    <hr/>
                    "I highly recommend Chris, with whom I have had the pleasure of knowing for <b>over 20 years</b> in both personal and professional settings. As a software developer, he consistently demonstrates <b>exceptional skill</b> in crafting <b>efficient, innovative solutions</b> to complex logic problems and algorithm design. His <b>passion for optimization</b> drives him to deliver high-quality results that <b>exceed expectations.</b>
                </Typography>,
                <Typography>
                    "What truly sets Chris apart is his <b>outstanding communication abilities.</b> He excels in both written and verbal communication, making him an invaluable asset in team collaborations and client interactions. His friendly demeanor fosters a positive working environment, making it easy for colleagues and clients alike to engage and collaborate.
                </Typography>,
                <Typography>
                    "Moreover, Chris possesses <b>admirable perseverance.</b> He approaches challenges with determination and a problem-solving mindset, never backing down until an optimal solution is found. This <b>resilience</b>, combined with his <b>technical prowess</b>, makes him a standout team member.
                </Typography>,
                <Typography>
                    "In summary, I wholeheartedly recommend Chris for any opportunity he pursues. His blend of technical skill, effective communication, and personable nature will undoubtedly make a significant impact in any setting."
                </Typography>
            ]
        },
        {
            summary: `David Garcia - Software Craftsman/Software Development Manager - Worked together at Packsize`,
            body: [
                <Typography>
                    <hr/>
                    "Software development demands creativity, intelligence, and rigorous learning skills. Chris embodies these qualities exceptionally well. <b>He is one of the most creative individuals I have ever met.</b> His <b>bravery</b> is evident in his successful transition from Finance to Software, where he consistently tackles unique challenges head-on.
                </Typography>,
                <Typography>
                    "I recommend Chris for your next venture. He is not only <b>smart</b> and <b>fun to work with</b> but also uniquely talented. As you can see from his posts, he has a strong <b>focus on quality results.</b>"
                </Typography>
            ]
        },
        {
            summary: `Matthew Ray Banks - Software Project Manager - Worked together at Packsize`,
            body: [
                <Typography>
                    <hr/>
                    "Chris has easily been one of my favorite Software Engineers I have worked with in my 10+ years as a product manager. He brings a <b>spark, enthusiasm, and sense of humor</b> that was extremely refreshing. He will be a great contributor to any team, any culture, and any company looking for great people. He is also <b>extremely capable of learning new concepts and languages</b>."
                </Typography>
                    
            ]
        }
    ]

    return <Box
        sx={{
            width: "60vw",
            margin: "auto"
        }}
    >
        {
            endorsements && endorsements.map((e, i) => (
                <Accordion 
                    key={i}
                    sx={{
                        marginBottom: "1vh"
                    }}
                    expanded={expanded === `panel${i}`}
                    onChange={() => expanded !== `panel${i}` ? setExpanded(`panel${i}`) : setExpanded("panel-1")}
                >
                    <AccordionSummary>
                        <Typography
                            sx={{marginLeft: "1vw"}}
                        >
                            {e.summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            e.body && e.body.map((e,j) => (
                                <Typography 
                                    key={j}
                                    sx={{
                                        width: "50vw",
                                        margin: "auto",
                                        lineHeight: 2,
                                        textAlign: "justify",
                                        marginBottom: "3vh"
                                    }}
                                >
                                    {e}
                                </Typography>
                            ))
                        }
                    </AccordionDetails>
                </Accordion>
            ))
        }
    </Box>
}

export default Endorsements;