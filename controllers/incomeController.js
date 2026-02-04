
const db = require("../config/firebase");

// GET 

const getIncome = async (req, res) => {
  try {
    const incomeCol = db.collection("income");
    const snapshot = await incomeCol.get();
    const incomes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST 

const createIncome = async (req, res) => {
  try {
    const inc = req.body;

    if (!inc.body) return res.status(400).json({ error: "body is required" });
    if (inc.Wages === undefined) return res.status(400).json({ error: "Wages is required" });
    if (inc.SecondaryIncome === undefined) return res.status(400).json({ error: "SecondaryIncome is required" });
    if (inc.Interest === undefined) return res.status(400).json({ error: "Interest is required" });
    if (inc.SupportPayment === undefined) return res.status(400).json({ error: "SupportPayment is required" });
    if (inc.Others === undefined) return res.status(400).json({ error: "Others is required" });

    const incomeCol = db.collection("income");
    const docRef = await incomeCol.add(inc);
    res.status(201).json({ id: docRef.id, ...inc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT 

const updateIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const incomeDoc = db.collection("income").doc(id);
    const docSnap = await incomeDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "Income not found" });

    const updateData = req.body;
    await incomeDoc.update(updateData);

    res.json({ id, ...updateData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE 
const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const incomeDoc = db.collection("income").doc(id);
    const docSnap = await incomeDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "Income not found" });

    await incomeDoc.delete();
    res.json({ message: "Income deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getIncome,
  createIncome,
  updateIncome,
  deleteIncome
};
