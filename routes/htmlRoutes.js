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

  // Load example page and pass in an example by id
  app.get("/example/:id", (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
