import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";
let request_url = "https://v2.jokeapi.dev/joke/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form", async (req,res)=>{
  console.log(req.body)
  request_url += req.body.category ;
  if(req.body.language !== "english"){
    request_url += "?" + req.body.language;
  }
  if (req.body.flags !== ''){
    request_url += "?" + req.body.flags;
  }
  
  
  if (req.body.single === "single" && req.body.twopart === ""){
    const type ="single"
  }
  if (req.body.single === "" && req.body.twopart === "twopart"){
    request_url += ""
  }


});


app.listen(port, () =>{
  console.log(`Your server is running on port ${port}`);
})