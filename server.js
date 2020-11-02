const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const players = require("./routes/api/players");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

const db = require("./client/src/utils/config/keys").mongoURI;

// Connect to the Mongo DB
mongoose.connect(db,
  { useNewUrlParser: true }
)
  .then(() => console.log("MongoDB sucessfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./client/src/utils/config/passport")(passport);
// Routes/
app.use("/api/users", players);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
