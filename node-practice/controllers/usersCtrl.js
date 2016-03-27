var users = require("../models/user");

module.exports = {
  index: function (req, res, next) {
    res.send(users);
  },
  show: function (req, res, next) {
    res.send(users[req.params.id]);
  },
  create: function (req, res, next) {
    users.push(req.body);
    res.json(users[users.length - 1]);
  },
  update: function (req, res, next) {
    users[req.params.id] = req.body;
    res.json(user[req.params.id]);
  },
  destroy: function (req, res, next) {
    users.splice(req.params.id, 1);
    res.status(204).send();
  }

};
