const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const slowDown = require("express-slow-down");

const bebaslabRouter = require("./src/routes/bebaslabRouter");
const praktikumRouter = require("./src/routes/praktikumRouter");
const peminjamanAlatRouter = require("./src/routes/peminjamanAlatRouter");
const permohonanNilaiRouter = require("./src/routes/permohonanNilaiRouter");

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

// app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

const speedLimiter = slowDown({
  windowMs: 60 * 1000, // 15 minutes
  delayAfter: 1, // allow 100 requests per 15 minutes, then...
  delayMs: 700, // begin adding 500ms of delay per request above 100:
  // request # 101 is delayed by  500ms
  // request # 102 is delayed by 1000ms
  // request # 103 is delayed by 1500ms
  // etc.
});

//  apply to all requests
app.use(speedLimiter);

const apiKeyValidator = require("./src/middleware/apiKeyValidator");

// Grouping
app.use("/v1/bebaslab", apiKeyValidator.apiKeyValidator, bebaslabRouter);
app.use("/v1/praktikum", apiKeyValidator.apiKeyValidator, praktikumRouter);
app.use(
  "/v1/peminjamanalat",
  apiKeyValidator.apiKeyValidator,
  peminjamanAlatRouter
);
app.use(
  "/v1/permohonannilai",
  apiKeyValidator.apiKeyValidator,
  permohonanNilaiRouter
);

// app.use("/v1/bot", botTelegram);

const port = Number(process.env.PORT || 3331);

app.listen(port, () =>
  console.log(`🚀 Server running on port http://localhost:${port}`)
);
