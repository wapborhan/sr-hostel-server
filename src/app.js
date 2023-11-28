const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3300;
const globalErrorHandler = require("./utils/globalErrorHandler");
const allMeals = require("./routes/meals/index");
const addUser = require("./routes/user/index");
const singleMeal = require("./routes/single-menu/index");
const allUsers = require("./routes/all-users/index");
const addMeals = require("./routes/add-meals/index");
const addUpcomingMeals = require("./routes/add-up-meals/UpcomingMeals");
const allMealsUpcomin = require("./routes/all-up-meals/AllMeals");

applyMiddleware(app);

// Routes
app.use(addMeals);
app.use(addUpcomingMeals);
app.use(allMeals);
app.use(allMealsUpcomin);
app.use(singleMeal);
app.use(addUser);
app.use(allUsers);

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
