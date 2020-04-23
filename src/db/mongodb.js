const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});
