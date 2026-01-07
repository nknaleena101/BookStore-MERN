import express from "express";
import { PORT } from "./config.js"

const app = express();

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Hello from express server")
} )

app.listen(PORT, ()=> {
    console.log(`app is listing to port: ${PORT}`)
})