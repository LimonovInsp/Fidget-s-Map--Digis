const mongoose = require("mongoose");
const Joi = require("joi");
// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});
// Model
const Users = new mongoose.model("registered-users", userSchema);
// Validation using Joi
function registrationValidation(user) {
  const schema = {
    username: Joi.string()
      .min(4)
      .max(15)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  };
  return Joi.validate(user, schema);
}
function loginValidation(user) {
  const schema = {
    username: Joi.string()
      .min(4)
      .max(15)
      .required(),
    password: Joi.string().required()
  };
  return Joi.validate(user, schema);
}
exports.Users = Users;
exports.regValidate = registrationValidation;
exports.logValidate = loginValidation;
