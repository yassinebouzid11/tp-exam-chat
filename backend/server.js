const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = []; // <-- stockage en mémoire

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { author, content } = req.body;
  const msg = { author, content, time: new Date().toLocaleTimeString() };
  messages.push(msg);
  console.log(messages);
  res.status(201).json(msg);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Backend running on port " + port));

