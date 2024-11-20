import { config } from "dotenv";
import express from "express"
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log("Server is up!");
})

app.get("/", () => {
    console.log("Accessing Backend server")
})




