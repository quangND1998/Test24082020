var cors = require('cors')
var corsOptions = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    
  }
module.exports = app => {
    const post = require("../controller/postController");
  
    // Create a new Customer
    app.post("/post",cors(corsOptions["origin"]), post.create);
    app.get("/post",cors(corsOptions["origin"]), post.findAll);
  
  
}                                                                             