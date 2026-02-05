
const express = require("express");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/usersController");

// // GET 
router.get("/", getUsers);

// POST 
router.post("/", createUser);

// PUT 
router.put("/:id", updateUser);

// DELETE 
router.delete("/:id", deleteUser);

module.exports = router;
