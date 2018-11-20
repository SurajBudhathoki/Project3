const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// API routes
require('./routes/api-routes.js')(app);

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost:27017/forumApp', { useNewUrlParser: true });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});