const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/company/:CompanyId/:userId/:isManager", (req, res) => {
    const { CompanyId } = req.params;
    const { isManager } = req.params;
    const { userId } = req.params;

    if (isManager) {
      db.User.findAll({
        where: { CompanyId }
      }).then(User => {
        res.render("index", {
          msg: "Welcome!",
          users: User
        });
      });
    } else {
      db.User.findOne({
        where: { CompanyId, userId }
      }).then(User => {
        res.render("index", {
          msg: "Welcome!",
          users: User
        });
      });
    }
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
    res.render("schedule", {
      schedule: Schedule
    });
  });

  // Render the index page for any unmatched routes
  app.get("*", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("login", {
        msg: "Welcome!",
        users: User
      });
    });
  });
};
