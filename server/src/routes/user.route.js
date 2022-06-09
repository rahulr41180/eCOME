
const express = require("express");

const router = express.Router();

const { getAllUsers, postNewUser, loginUser, getLoginUser, userLogOut } = require("../controllers/user.controller");

router.get("/user", getLoginUser);
router.get("", getAllUsers);
router.post("/create", postNewUser);
router.post("/login", loginUser);
router.delete("/logout/:id", userLogOut);

module.exports = router;