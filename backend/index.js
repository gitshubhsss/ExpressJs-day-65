const express = require("express");
const app = express();

const port = 8080;
//to make the post data readeble to the express js
app.use(express.urlencoded({ extended: true }));//this is only for the url data
app.use(express.json())//if we send the data in the form of json
app.listen(port, () => {
  console.log(`app is listening`);
});

app.get("/register", (req, res) => {
  let { username } = req.query;
  res.send(`welcome ${username}`);
});

app.post("/register", (req, res) => {
    let {username,passward}=req.body;
    res.send(`welcome its a post req welcome ${username} !`);
});



