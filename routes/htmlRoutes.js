module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/adduser", (req, res) => {
    res.render("adduser");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("index");
  });
};
