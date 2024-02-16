const express = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const { signIn, signUp } = require("../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name", "Name is required.").not().isEmpty(),
    check("email", "Email is required.").isEmail(),
    check(
      "password",
      "The password must have at least six characters"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  signUp
);

router.post(
  "/signin",
  [
    check("email", "Email is required.").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  signIn
);

module.exports = router;
