const mongoose = require("mongoose");

mongoose.connect(process.env.MINI_WMS || "mongodb://localhost/wms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
