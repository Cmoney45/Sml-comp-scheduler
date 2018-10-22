module.exports = app => {
  require("./apiRoutes/companyApiRoutes")(app);
  require("./apiRoutes/userApiRoutes")(app);
};
