const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(routes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://ejcoder:bADsWcW@ds129393.mlab.com:29393/heroku_vbzd5k4x");

// mongodb://fawncirclellc:fc123999@ds161335.mlab.com:61335/heroku_r8nb83jj

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
