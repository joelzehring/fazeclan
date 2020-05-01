const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findUser: function(req, res) {
    db.User
      .find({ name: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ name: req.params.username }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
