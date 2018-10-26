const db = require("../../models");

module.exports = app => {
  // Get all Schedulers
  app.get("/api/scheduler/", (req, res) => {
    db.Scheduler.findAll({}).then(dbSchedulerAll => {
      res.json(dbSchedulerAll);
    });
  });

  // Get specific Schedule for a user
  app.get("/api/user/:UserId/scheduler/", (req, res) => {
    const { UserId } = req.params;

    db.Scheduler.findAll({
      where: { UserId },
      include: [db.User]
    }).then(dbSchedulerUnique => {
      res.json(dbSchedulerUnique);
    });
  });

  // Get specific Scheduler
  app.get("/api/scheduler/:id", (req, res) => {
    const { id } = req.params;

    db.Scheduler.findAll({
      where: { id }
    }).then(dbSchedulerUnique => {
      res.json(dbSchedulerUnique);
    });
  });

  // Create a new Scheduler
  app.post("/api/scheduler/", (req, res) => {
    db.Scheduler.create(req.body).then(dbSchedulerPost => {
      res.json(dbSchedulerPost);
    });
  });

  // Delete a Scheudled Date by id
  app.delete("/api/Scheduler/:id", (req, res) => {
    const { id } = req.params;

    db.Scheduler.destroy({ where: { id } }).then(dbSchedulerDelete => {
      res.json(dbSchedulerDelete);
    });
  });
};
