const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");
const knex = require("knex");
const { Model } = require("objection");

const knexConfig = require("../knexfile");

const environment = process.env.NODE_ENV || "development";
const connectionConfig = knexConfig[environment];

const connection = knex(connectionConfig);

Model.knex(connection);

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the server",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use(middlewares.authenticateToken);

module.exports = app;
