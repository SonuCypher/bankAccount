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
    const { Name, year1, balance1, year2, balance2, year3, balance3 } =
      req.body;
    const accounts = new Accounts({
      Name: Name,
      Balance: [
        {
          year: year1,
          Balance: parseInt(balance1),
        },
        {
          year: year2,
          Balance: parseInt(balance2),
        },
        {
          year: year3,
          Balance: parseInt(balance3),
        },
      ],
    });
    await accounts.save()
    console.log(accounts)
  } catch (err) {
    console.error(err);
  }
});

app.listen(5000, (req, res) => {
  console.log("listening on port 5000");
});
