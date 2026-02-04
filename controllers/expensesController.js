
const db = require("../config/firebase");

// GET 

const getExpenses = async (req, res) => {
  try {
    const expensesCol = db.collection("expenses");
    const snapshot = await expensesCol.get();
    const expenses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST 

const createExpense = async (req, res) => {
  try {
    const expense = req.body;

    if (!expense.body) return res.status(400).json({ error: "body is required" });
    if (!expense.Savings) return res.status(400).json({ error: "Savings is required" });
    if (!expense.PaymentObligation) return res.status(400).json({ error: "PaymentObligation is required" });
    if (!expense.Insurance) return res.status(400).json({ error: "Insurance is required" });
    if (!expense.Housing) return res.status(400).json({ error: "Housing is required" });
    if (!expense.Utilities) return res.status(400).json({ error: "Utilities is required" });
    if (!expense.Personal) return res.status(400).json({ error: "Personal is required" });

    const expensesCol = db.collection("expenses");
    const docRef = await expensesCol.add(expense);
    res.status(201).json({ id: docRef.id, ...expense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT 

const updateExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const expenseDoc = db.collection("expenses").doc(id);
    const docSnap = await expenseDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "Expense not found" });

    const updateData = req.body;
    await expenseDoc.update(updateData);

    res.json({ id, ...updateData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE 

const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const expenseDoc = db.collection("expenses").doc(id);
    const docSnap = await expenseDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "Expense not found" });

    await expenseDoc.delete();
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense
};

