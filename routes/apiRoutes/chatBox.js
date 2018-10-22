const db = require("../../models");

module.exports = app => {
  // Get all Companies
  app.get("/api/chatbox/", (req, res) => {
    db.ChatBox.findAll({}).then(dbChatBoxAll => {
      res.json(dbChatBoxAll);
    });
  });

  // Get specific ChatBox
  app.get("/api/chatbox/:id", (req, res) => {
    const { id } = req.params;

    db.ChatBox.findAll({
      where: { id }
    }).then(dbChatBoxUnique => {
      res.json(dbChatBoxUnique);
    });
  });

  // Get all chat dialogue for a company
  app.get("/api/chatbox/:companyId/", (req, res) => {
    const { companyId } = req.params;

    db.ChatBox.findAll({
      where: { companyId }
    }).then(dbChatBoxUnique => {
      res.json(dbChatBoxUnique);
    });
  });

  // Create a new ChatBox
  app.post("/api/chatbox/", (req, res) => {
    db.ChatBox.create(req.body).then(dbChatBoxPost => {
      res.json(dbChatBoxPost);
    });
  });

  // Delete an example by id
  app.delete("/api/chatbox/:id", (req, res) => {
    const { id } = req.params;

    db.ChatBox.destroy({ where: { id } }).then(dbChatBoxDelete => {
      res.json(dbChatBoxDelete);
    });
  });
};
