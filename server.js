const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;


// const apiRoutes = require('./routes/api');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://manuelr14:18877MSca@ds147167.mlab.com:47167/heroku_42fsz5wr", {
  useNewUrlParser: true,
  useFindAndModify: false
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});