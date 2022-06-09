
const express = require("express");

const router = express.Router();

const { getAllUsers, postNewUser, loginUser, getLoginUser, userLogOut, updateProfile } = require("../controllers/user.controller");

router.get("/user", getLoginUser);
router.get("", getAllUsers);
router.post("/create", postNewUser);
router.post("/login", loginUser);
router.delete("/logout/:id", userLogOut);

router.put("/edit/:id", updateProfile)

module.exports = router;