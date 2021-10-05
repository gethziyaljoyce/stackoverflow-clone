const express = require("express");
const route = express.Router();

const service = require("../services/users.service");

route.post("/signup",service.signup);

route.post("/logIn",service.logIn);

route.get("/",service.posts);


module.exports = route;