const express = require("express");
const exphb = require("express-handlebars");

// Initialize Express application
const app = express();

app.engine("handlebars", exphb({ defaultLayout: "main" }));

//  Configure the application's port and view engine
const port = process.env.PORT || 3000;
app.set("view engine", "handlebars");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
