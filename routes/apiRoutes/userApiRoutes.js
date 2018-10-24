const db = require(`../../models`);

module.exports = app => {
  // Get all Users
  app.get("/api/users/", (req, res) => {
    db.User.findAll({}).then(dbUserAll => {
      res.json(dbUserAll);
    });
  });

  // Get specific User
  app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;

    db.User.findAll({
      where: { id }
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