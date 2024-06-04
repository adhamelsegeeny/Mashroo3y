const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, type) => {
  return jwt.sign({ id, type }, "supersecret", {
    expiresIn: maxAge,
  });
};