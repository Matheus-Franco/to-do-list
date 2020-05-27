const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://MatheusFranco:0512Math@cluster0-3st2s.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Backend executando na porta 3333.");
});
