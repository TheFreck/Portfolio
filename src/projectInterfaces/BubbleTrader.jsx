import { Box, Paper, Typography } from "@mui/material";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const BubbleTrader = () => {
    const tracker = EventTracker("interface BubbleTrader");
    useEffect(() => {
        tracker("description","BubbleTrader");
    },[]);

    const LinkTo = () => <a href="https://bubbletraderserver20250122211424.azurewebsites.net/" target="_blank" onClick={tracker("visit project","BubbleTrader")}>Bubble Trader</a>;

    return <Paper
        sx={{
            margin: "auto",
            padding: "5vh 5vw 10vh 5vw"
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
            Chaos is a state of complexity where randomness can no longer be deciphered and becomes unpredictable. Weather patterns are a chaotic system, as are waves in the ocean and of course the Stock Market. One feature of chaotic systems is that properly evaluating information can make you better at prediction. However, an asymptote exists beyond which no amount of knowledge and information will improve your prediction. This is why notwithstanding armies of finiancial analysts trying to protect assets we still have market crashes.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            The price of a stock is based on two main categories of information: Fundamental and Technical. Fundamental analysis evaluates a company's balance sheet and income statements to predict how profitable it'll be in the future. In contrast, technical analysis concerns itself with the psychology of the other traders trying to predict the value of the stock who are basing their predictions in part of what you believe about what they believe. This circular reference accounts for a lot of the volatility in stock prices.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            <LinkTo /> is an exploration into the chaos that drives asset markets. In it's MVP stage the stock price is determined by bubbles bouncing around inside a rectangle. Each bubble is created with an internal risk tolerance in the form of a value between 0-1. With each collision it compares the bubbles risk tolerance against a random number generated on the fly. Depending on the relative desire of each bubble to buy or sell the stock the price is pushed upward or downward. The stock chart is then updated with the current price.
        </Typography>
        <br/>
        <Typography
            variant="h5"
        >
            <u>The Future of this Project</u>
        </Typography>
        <Typography
            variant="h6"
        >
            Right now this simulator is based entirely on technical analysis. In the future the asset will have a growth engine built into it that will inform the value of the stock. This will include profitability (which increases or decreases value) and debt (which causes larger or smaller swings in price).
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            Right now the decisions of each bubble are fairly simple. Future iterations will involve a variable to cover Market Sentiment, or the way changes in the market affect traders' risk tolerances.
        </Typography>

    </Paper>
}

export default BubbleTrader;