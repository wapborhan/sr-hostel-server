const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3300;
const globalErrorHandler = require("./utils/globalErrorHandler");
const menuRoutes = require("./routes/menu/index");

applyMiddleware(app);

// Routes
app.use(menuRoutes);
app.get("/", (req, res) => {
  res.send("SR Hostel is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`SR Hostel is running on port ${port}`);
  });
};

main();
