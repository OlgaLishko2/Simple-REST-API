
const express = require("express");
const router = express.Router();
const { getIncome, createIncome, updateIncome, deleteIncome } = require("../controllers/incomeController");

// GET 
router.get("/", getIncome);

// POST 
router.post("/", createIncome);

// PUT update 
router.put("/:id", updateIncome);

// DELETE 
router.delete("/:id", deleteIncome);

module.exports = router;
