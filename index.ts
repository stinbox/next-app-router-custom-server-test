import next from "next";
import express from "express";

function getNextServer() {
  return next({
    customServer: true,
    dev: process.env.NODE_ENV !== "production",
    dir: "next-app",
  });
}

const expressApp = express();
expressApp.get("/api/message", (req, res) => {
  res.send({
    message: "Hello, this message is from the api server!",
  });
});

const nextApp = getNextServer();
await nextApp.prepare();

const nextHandler = nextApp.getRequestHandler();
expressApp.get("*", (req, res) => nextHandler(req, res));

expressApp.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
