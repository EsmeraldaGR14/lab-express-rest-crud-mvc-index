const express = require("express");
const morgan = require("morgan");

const locationsController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const planController = require("./controllers/plans.controller");
const specialEventsModel = require("./controllers/special-events.controller");

const app = express();

app.use(morgan("dev"));

app.use("/locations", locationsController);
app.use("/machines", machineController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/special-events", specialEventsModel);

// get is a http method (same as post, delete .etc)
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// wild card - this is a middleware. This will make any page that is not created present this
app.use("*", (req, res) => {
  res.status(404).send("Sorry, page not found!");
});

module.exports = app;
