import { Button, Grid2, Paper, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import EventTracker from "../EventTracker";

export const Primes = () => {
    const tracker = EventTracker("interface Primes");
    const [low,setLow] = useState(0);
    const [qty,setQty] = useState(0);
    const [primes,setPrimes] = useState([]);
    const [primesArray, setPrimesArray] = useState([]);
    const [orderVertical,setOrderVertical] = useState(true);
    const [visitId,setVisitId] = useState("");

    useEffect(() => {
        let id = uuid();
        setVisitId(id);
        tracker("description",`Primes visit id: ${id}`);
    },[]);
    
    const getPrimes = async () => {
        tracker(`get primes low: ${low}, qty: ${qty}, ${orderVertical ? "vertical" : "horizontal"}`,`visit id: ${visitId}`);
        axios.get(`https://primestreaming.azurewebsites.net/Primes/${low}/${qty}`)
        .then(yup => {
            setPrimes(yup.data);
            formatPrimes(yup.data);
        })
        .catch(nope => console.error(nope));
    }
    
    useEffect(() => {
        formatPrimes(primes);
    },[orderVertical])

    const formatPrimes = (primes) => {
        if(orderVertical) formatColumns(primes);
        else formatRows(primes);
    }

    const formatColumns = (primes) => {
        let formatted = {};
        if(primes.length > 60){
            // 4 columns
            let col1 = [];
            let col2 = [];
            let col3 = [];
            let col4 = [];
            for(let idx in primes){
                if(idx<primes.length/4){
                    col1.push(primes[idx]);
                }
                else if(idx<primes.length/2){
                    col2.push(primes[idx]);
                }
                else if(idx<3*primes.length/4){
                    col3.push(primes[idx]);
                }
                else{
                    col4.push(primes[idx]);
                }
            }
            formatted = <Grid2
                container
                size={12}
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
            >
                <Grid2
                    size={3}
                >
                    {
                        col1.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2
                    size={3}
                >
                    {
                        col2.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2
                    size={3}
                >
                    {
                        col3.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2
                    size={3}
                >
                    {
                        col4.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
            </Grid2>
        }
        else if(primes.length>40){
            let col1 = [];
            let col2 = [];
            let col3 = [];
            for(let idx in primes){
                if(idx<primes.length/3){
                    col1.push(primes[idx]);
                }
                if(idx<2*primes.length/3){
                    col2.push(primes[idx]);
                }
                else{
                    col3.push(primes[idx]);
                }
            }
            formatted = <Grid2
                container
                size={12}
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
            >
                <Grid2
                    size={4}
                >
                    {
                        col1.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2
                    size={4}
                >
                    {
                        col2.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2
                    size={4}
                >
                    {
                        col3.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
            </Grid2>
        }
        else if(primes.length>20){
            let col1 = [];
            let col2 = [];
            for(let idx in primes){
                if(idx<primes.length/2){
                    col1.push(primes[idx]);
                }
                else{
                    col2.push(primes[idx]);
                }
            }
            formatted = <Grid2
                container
                size={12}
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
            >
                <Grid2>
                    {
                        col1.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
                <Grid2>
                    {
                        col2.map((p,i) => (
                            <Typography key={i}>{p}</Typography>
                        ))
                    }
                </Grid2>
            </Grid2>
        }
        else{
            formatted = <Grid2
                container
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
                size={12}
            >
                {primes.map((p,i) => (
                    <Typography key={i}>{p}</Typography>
                ))}
            </Grid2>
        }
        setPrimesArray(formatted);
    }
    
    const formatRows = (primes) => {
        let formatted = {};
        if(primes.length > 60){
            // 4 columns
            formatted = <Grid2
                container
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
                size={12}
            >
                {
                    primes.map((p,i) => (
                        <Grid2 size={3} key={i}><Typography>{p}</Typography></Grid2>
                    ))
                }
            </Grid2>
        }
        else if(primes.length > 40){
            // 3 columns
            formatted = <Grid2
                container
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
                size={12}
            >
                {
                    primes.map((p,i) => (
                        <Grid2 size={4} key={i}><Typography>{p}</Typography></Grid2>
                    ))
                }
            </Grid2>
        }
        else if(primes.length > 20){
            // 2 columns
            formatted = <Grid2
                container
                sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
                size={12}
            >
                {
                    primes.map((p,i) => (
                        <Grid2 size={6} key={i}><Typography>{p}</Typography></Grid2>
                    ))
                }
            </Grid2>
        }
        else{
            formatted = <Grid2
            data-grid
                size={12}
                sx={{display: "flex", justifyContent: "space-evenly"}}
            >
                {
                    primes.map((p,i) => (
                        <Grid2 size={12} key={i}>
                            <Typography>{p}</Typography>
                        </Grid2>
                    ))
                }
            </Grid2> 
        }
        setPrimesArray(formatted);
    }

    const PrimesArrayCallback = useCallback(() => (
        <Paper
            sx={{
                display: "flex", 
                flexDirection: "column", 
                width: "40vw", 
                maxHeight: "40vhs", 
                margin: "auto", 
                padding: "5vh 5vw",
                textAlign: "center"
            }}
        >
            {
                primesArray
            }
        </Paper>)
    ,[orderVertical,primesArray]);

    return <Grid2 
        container 
        spacing={1}
        size={12}
        sx={{
            display: "flex", 
            flexDirection: "column",
            width: "80vw",
            margin: "5vh auto",
            background: "white",
            overflowY: "auto",
            padding: "5vh 5vw"
        }}
    >
        <Grid2
            size={12}
            container
        >
            <Typography
                variant="h3"
            >
                Prime Number Generator
            </Typography>
            <Typography
                variant="h5"
                >
                <hr/>
                This project will calculate prime numbers using the Atkin Sieve. The first number is the lowest number that will be considered while the second number determines how many prime integers to be returned.
            </Typography>
            <br/>
        </Grid2>
        <Grid2 
            container
            size={12}
            sx={{display: "flex", flexDirection: "column"}}
        >
            <TextField
                type="number"
                value={low}
                label="Minimum"
                onChange={l => setLow(l.target.value)}
            />
            <TextField
                type="number"
                value={qty}
                label="Quantity to be Returned"
                onChange={q => setQty(q.target.value)}
            />
        </Grid2>
        <Grid2
            container
            size={12}
            sx={{display:"flex", flexDirection: "row", width: "40vw", margin: "auto"}}
        >
            <Grid2
                size={6}
            >
                <Button
                    onClick={getPrimes}
                >
                    Get Primes
                </Button>
            </Grid2>
            <Grid2
                size={6}
            >
                <label>
                    Rows
                </label>
                <Switch 
                    onChange={()=> setOrderVertical(!orderVertical)}
                    checked={orderVertical}
                />
                <label>
                    Columns
                </label>
            </Grid2>
        </Grid2>
        <Grid2
            size={12}
            container
            sx={{
                overflowY: "auto",
                height: "45vh"
            }}
        >
            <PrimesArrayCallback />
        </Grid2>
    </Grid2>
}

export default Primes;