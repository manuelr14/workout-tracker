var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
 
};
