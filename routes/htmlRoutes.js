const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("index", {
        msg: "Welcome!",
        users: User
      });
    });
  });

  app.get("/adduser", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("adduser", {
        users: User
      });
    });
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.get("/schedule", (req, res) => {
    db.Scheduler.findAll({}).then(Scheduler => {
      res.render("schedule", {
        schedule: Scheduler
      });
    });
  });

  // Render the index page for any unmatched routes
  app.get("*", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("index", {
        msg: "Welcome!",
        users: User
      });
    });
  });
};
