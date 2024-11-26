import { Router } from "express";

export const tradesRouter = Router();  

tradesRouter.get("/", (req, res) => {  
    const {market}  = req.query;
    //fetch trades from database
    res.json({market: market});
}) 