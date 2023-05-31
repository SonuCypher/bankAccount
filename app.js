const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const { Accounts } = require("./models/account");
const app = express();

mongoose.connect("mongodb://localhost:27017/bankaccount");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/createaccount", async (req, res) => {
  try {
    const { Name, Balance } = req.body;
    const accounts = new Accounts({
      Name: Name,
      Balance: [
        {
          year: Balance[0].year,
          Balance: parseInt(Balance[0].Balance),
        },
        {
          year: Balance[1].year,
          Balance: parseInt(Balance[1].Balance),
        },
        {
          year: Balance[2].year,
          Balance: parseInt(Balance[2].Balance),
        },
      ],
    });
    await accounts.save();
    console.log(accounts);
    res.send("data added successfully")
  } catch (err) {
    console.error(err);
  }
});

// app.post('/api/createinvoice',(req,res)=>{
// })

app.listen(5000, (req, res) => {
  console.log("listening on port 5000");
});
