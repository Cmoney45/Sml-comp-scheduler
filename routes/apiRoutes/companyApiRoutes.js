const db = require("../../models");

module.exports = app => {
  // Get all Companies
  app.get("/api/company/", (req, res) => {
    db.Company.findAll({}).then(dbCompanyAll => {
      res.json(dbCompanyAll);
    });
  });

  // Get specific Company
  app.get("/api/company/:id", (req, res) => {
    const { id } = req.params;

    db.Company.findAll({
      where: { id }
    }).then(dbCompanyUnique => {
      res.json(dbCompanyUnique);
    });
  });

  // Create a new Company
  app.post("/api/company/", (req, res) => {
    db.Company.create(req.body).then(dbCompanyPost => {
      res.json(dbCompanyPost);
    });
  });

  // Delete an example by id
  app.delete("/api/company/:id", (req, res) => {
    const { id } = req.params;

    db.Company.destroy({ where: { id } }).then(dbCompanyDelete => {
      res.json(dbCompanyDelete);
    });
  });
};
