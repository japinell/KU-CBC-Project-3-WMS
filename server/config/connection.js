const mongoose = require("mongoose");

mongoose.connect(process.env.WMS || "mongodb://localhost/wms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
