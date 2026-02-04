require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());  //middleware > read JSON > put to req.body

const PORT = process.env.PORT;



app.get("/", (req, res) => {
  res.json({
    message: "Simple REST API",
    endpoints: [
      "/users",
      "/expenses",
      "/income"
    ]
  });
});


const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);


const expensesRoutes = require("./routes/expenses");
app.use("/expenses", expensesRoutes);

const incomeRoutes = require("./routes/income");
app.use("/income", incomeRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
