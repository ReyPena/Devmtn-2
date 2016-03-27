var express = require("express")
  , bodyParser = require("body-parser")
  , userCtrl = require("./controllers/usersCtrl")
  , port = 3000;

var  app = express();

app.use(bodyParser.json());

app.get("/users", userCtrl.index);
app.get("/users/:id", userCtrl.show);
app.post("users", userCtrl.create);
app.put("users", userCtrl.update);
app.delete("users", userCtrl.destroy);



app.listen(port, function () {
  console.log("listening to port " + port);
});
