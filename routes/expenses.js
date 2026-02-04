
const express = require("express");
const router = express.Router();
const { getExpenses, createExpense, updateExpense, deleteExpense } = require("../controllers/expensesController");

// GET 
router.get("/", getExpenses);

// POST 
router.post("/", createExpense);

// PUT 
router.put("/:id", updateExpense);

// DELETE 
router.delete("/:id", deleteExpense);

module.exports = router;
