const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/:CompanyId/:userId/:isManager/index", (req, res) => {
    const { CompanyId, isManager } = req.params;
    const id = req.params.userId;

    console.log(CompanyId, isManager, id);

    if (isManager === true) {
      console.log(isManager === true);
      db.User.findAll({
        where: { CompanyId }
      }).then(User => {
        res.render("myschedule", {
          users: User
        });
      });
    } else {
      console.log(isManager === true);
      db.User.findOne({
        where: { id, CompanyId }
      }).then(User => {
        res.render("myschedule", {
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

  app.get("/", (req, res) => {
    res.render("login");
  });

  app.get("/:CompanyId/:userId/:isManager/scheduler", (req, res) => {
    const { CompanyId, isManager, userId } = req.params;

    if (isManager) {
      db.User.findAll({
        where: { CompanyId }
      }).then(User => {
        res.render("index", {
          users: User
        });
      });
    } else {
      db.User.findOne({
        where: { CompanyId, userId }
      }).then(User => {
        res.render("myschedule", {
          users: User
        });
      });
    }
  });

  // Render the login page for any unmatched routes
  app.get("*", (req, res) => {
    res.redirect("/");
  });
};
