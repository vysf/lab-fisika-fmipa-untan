const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const bebaslabRouter = require("./src/routes/bebaslabRouter");
const praktikumRouter = require("./src/routes/praktikumRouter");

const botTelegram = require("./src/telegram/bot");

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET, POST, PUT, PATCH, DELETE, OPTIONS"],
    optionsSuccessStatus: 200,
  })
);

// Grouping
app.use("/v1/bebaslab", bebaslabRouter);
app.use("/v1/praktikum", praktikumRouter);

// app.use("/v1/bot", botTelegram);

const port = Number(process.env.PORT || 3331);

app.listen(port, () =>
  console.log(`🚀 Server running on port http://localhost:${port}`)
);
