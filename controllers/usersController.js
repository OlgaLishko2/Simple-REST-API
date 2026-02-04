
const db = require("../config/firebase");

// GET 
const getUsers = async (req, res) => {
  try {
    const usersCol = db.collection("users");
    const snapshot = await usersCol.get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST 
const createUser = async (req, res) => {
  try {
    const user = req.body;

    if (!user.name) return res.status(400).json({ error: "name is required" });
    if (!user.username) return res.status(400).json({ error: "username is required" });
    if (!user.email) return res.status(400).json({ error: "email is required" });
    if (!user.address || typeof user.address !== "object") return res.status(400).json({ error: "address is required" });
    if (!user.address.street) return res.status(400).json({ error: "address.street is required" });
    if (!user.address.suite) return res.status(400).json({ error: "address.suite is required" });
    if (!user.address.city) return res.status(400).json({ error: "address.city is required" });
    if (!user.address.zipcode) return res.status(400).json({ error: "address.zipcode is required" });

    const usersCol = db.collection("users");
    const docRef = await usersCol.add(user);
    res.status(201).json({ id: docRef.id, ...user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT 
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;

    const userDoc = db.collection("users").doc(id);
    const docSnap = await userDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "User not found" });

    await userDoc.update(userData);
    res.json({ id, ...userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE 

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userDoc = db.collection("users").doc(id);
    const docSnap = await userDoc.get();
    if (!docSnap.exists) return res.status(404).json({ error: "User not found" });

    await userDoc.delete();
    res.json({ message: "User deleted", id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
