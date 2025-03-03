import { Paper, Typography } from "@mui/material";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

export const FreckExchange = () => {
    const tracker = EventTracker("interface freckExchange");
    useEffect(() => {
        tracker("description","freckExchange");
    })
    const LinkTo = () => <a href="https://thefreckexchange-cvgkagadbkcedyfm.westus-01.azurewebsites.net" target="_blank" onClick={() => tracker("visit project","freckExchange")}>TheFreck Exchange</a>;

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
            This is a storefront. In theory it could be customized to any product line but I'm a hat guy so you get hats.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            When you go to the site you can click LOGIN in the upper right hand corner. From here you can create an account. You will then enter your name, email, a username and a password which will be hashed. If you select User permissions then you will be enabled to shop on the site. If you select Admin permissions then you will be able to modify the configuration of the site, create products and items and modify existing products.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            A <em>Product</em> is a class of object and has a name and available attributes such as <em>Size</em>, <em>Color</em>, etc. An <em>Item</em> is a specific example of a product. It will have attribute values such as <em>Size</em>: <em>L</em>, <em>Color</em>: <em>Red</em>. It will also have a <em>quantity</em> which will be decremented each time an item is purchased.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            In practice the admin would create a new <em>Product</em> when they decide to carry an additional product line. A new <em>Item</em>, on the other hand, would be created when they decide to carry the same product with different attributess. Perhaps a new color is available for instance.
        </Typography>
    </Paper>
}

export default FreckExchange;