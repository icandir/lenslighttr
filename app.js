import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"

dotenv.config();

const app = express()
const port = process.env.PORT;

//connected to db
conn();

//static files middleware
app.use(express.static("public"));

// template engines ejs
app.set('view engine', 'ejs');
app.set('views', './views');


app.get("/", (req, resp, next) => {
  resp.render("index");
});
app.get("/about", (req, resp, next) => {
  resp.render("about");
});

app.listen(port, () => 
    console.log("App is running on port : ", port)
);