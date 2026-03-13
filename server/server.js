import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware());

app.get('/', (req,res)=>res.send('Server is Live'));


app.use("/api/inngest", serve({ client: inngest, functions }));
const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 