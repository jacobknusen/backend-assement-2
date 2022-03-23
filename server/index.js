const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const users = [];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["you'll do great things!",
					 "javascript well be easily learned!",
					 "Your Javascript skills well be 10x.",
           "youll win a raffle for once",
           "win the lotta"
  ];

  
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomfortune = fortunes[randomIndex];

  res.status(200).send(randomfortune);
  
});

app.post("/api/name", (req, res)=>{
  console.log(req.body)
  console.log(req.params)
  console.log(req.query)

  const{newname} = req.body

  users.push(newname);
  res.status(200).send(users);

})
app.get("/api/users", (req, res) =>{
  res.status(200).send(users)
})


app.delete("/api/delete/:index", (req, res)=>{
  users.splice(req.params.index, 1)
  res.status(200).send(users)
})

app.listen(4000, () => console.log("Server running on 4000"));
