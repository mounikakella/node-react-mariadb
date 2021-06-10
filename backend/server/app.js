import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

export default app;
