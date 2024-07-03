const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const allMeals = require("./routes/meals/index");
const addUser = require("./routes/user/index");
const singleMeal = require("./routes/single-menu/index");
const allUsers = require("./routes/all-users/index");
const addMeals = require("./routes/add-meals/index");
const addUpcomingMeals = require("./routes/add-up-meals/UpcomingMeals");
const allMealsUpcomin = require("./routes/all-up-meals/AllMeals");
const addRequestMeals = require("./routes/add-req-meals/addRequestMeals");
const allRequestMeals = require("./routes/all-req-meals/allRequestMeals");
const allServMeals = require("./routes/all-serv-meals/allServMeals");
const allAdminUser = require("./routes/get-admin/allAdminUser");
const allPricing = require("./routes/pricing/allPricing");
const createPayIntent = require("./routes/create-pay-intent/createPayIntent");
const addPayment = require("./routes/add-payment/addPayment");
const makeUserAdmin = require("./routes/add-admin/makeAdmin");
const deleteMeals = require("./routes/del-meals/deleteMeals");
const updateMeals = require("./routes/update-meals/updateMeals");
const upRequestMeals = require("./routes/update-req-meals/upRequestMeals");
const singleUsers = require("./routes/singleUsers/singleUsers");

app.use(express.static(path.join(__dirname, "public")));

applyMiddleware(app);

// Routes
app.use(addMeals);
app.use(addUpcomingMeals);
app.use(allMeals);
app.use(updateMeals);
app.use(deleteMeals);
app.use(allMealsUpcomin);
app.use(addRequestMeals);
app.use(allRequestMeals);
app.use(upRequestMeals);
app.use(allServMeals);
app.use(singleMeal);
app.use(addUser);
app.use(allUsers);
app.use(singleUsers);
app.use(makeUserAdmin);
app.use(allAdminUser);
app.use(allPricing);
app.use(createPayIntent);
app.use(addPayment);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`SR Hostel is running on port ${port}`);
//   });
// };

// main();

module.exports = app;
