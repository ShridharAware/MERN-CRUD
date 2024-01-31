const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/getUser", userController.getUser);
router.post("/register", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
