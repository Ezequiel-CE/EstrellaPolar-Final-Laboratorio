import express from "express";
import morgan from "morgan";
import "dotenv/config";
import authRouter from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/API/auth", authRouter);

app.get("/", (_, res) => {
  res.send("API GO");
});

app.use("*", (_, res) =>
  res.status(404).send("<h1>OPS! the endpoint does not exist :(</h1>")
);

app.listen(port, () => {
  console.log(
    `The connection has been successfully established on port ${port}`
  );
});
