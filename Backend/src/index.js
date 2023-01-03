const express = require("express");
const route = require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());
mongoose.set('strictQuery', true);

const url ="mongodb+srv://group67:n1plamTjStICrIRT@cluster0.e8wifql.mongodb.net/assignment";
const port = process.env.PORT || 4200;

mongoose.connect(url, {useNewUrlParser: true})
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function () {
  console.log("Express is running on port " + port);
});

