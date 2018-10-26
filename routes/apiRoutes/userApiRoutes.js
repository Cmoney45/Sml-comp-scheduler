const db = require("../../models");

module.exports = app => {
  // Get all Users
  app.get("/api/users/", (req, res) => {
    db.User.findAll({
      include: [db.Company]
    }).then(dbUserAll => {
      res.json(dbUserAll);
    });
  });

  // Get first user Account
  app.get("/api/users/:userAccount", (req, res) => {
    const { userAccount } = req.params;

    db.User.findOne({
      where: { userAccount },
      include: [db.Company]
    }).then(dbUserUnique => {
      res.json(dbUserUnique);
    });
  });

  // Get specific User
  app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;

    db.User.findAll({
      where: { id },
      include: [db.Company]
    }).then(dbUserUnique => {
      res.json(dbUserUnique);
    });
  });

  // Get specific Company Users
  app.get("/api/company/:CompanyId/users", (req, res) => {
    const { CompanyId } = req.params;

    db.User.findAll({
      where: { CompanyId },
      include: [db.Company]
    }).then(dbUserUnique => {
      res.json(dbUserUnique);
    });
  });

  // Create a new User
  app.post("/api/users/", (req, res) => {
    db.User.create(req.body).then(dbUserPost => {
      res.json(dbUserPost);
    });
  });

  // Delete an example by id
  app.delete("/api/User/:id", (req, res) => {
    const { id } = req.params;

    db.User.destroy({ where: { id } }).then(dbUserDelete => {
      res.json(dbUserDelete);
    });
  });
};
