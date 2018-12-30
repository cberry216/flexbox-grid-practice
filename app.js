/* eslint-disable no-console */
const express = require("express");
const exphb = require("express-handlebars");
const path = require("path");

// Initialize Express application
const app = express();

app.engine("handlebars", exphb({ defaultLayout: "main" }));

//  Configure the application's port and view engine
const port = process.env.PORT || 3000;
app.set("view engine", "handlebars");

// Allowing serving of static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("flex");
});

app.get("/grid", (req, res) => {
  res.render("grid");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
