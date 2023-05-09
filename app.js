import express from "express"

const app = express()
const port = 3000

app.get("/", (req,resp,next)=>
resp.send("Index page 2"));

app.listen(port, () => 
    console.log("App is running on port : ", port)
);