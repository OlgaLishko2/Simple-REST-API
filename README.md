# Simple-REST-API
Overview

This is a simple REST API built with Node.js and Express.
It manages Users, Expenses, and Income.

You can create, read, update, and delete these resources.

Installation

Clone the repo:

git clone https://github.com/OlgaLishko2/Simple-REST-API
cd SimpleRESTAPI


Install dependencies:
npm install


Create a .env file with:

PORT=3000

Running the server
node server.js


Server will run at http://localhost:3000.

Endpoints
Users

GET /users – get all users

POST /users – create user

PUT /users/:id – update user

DELETE /users/:id – delete user

Expenses

GET /expenses – get all expenses

POST /expenses – create expense

PUT /expenses/:id – update expense

DELETE /expenses/:id – delete expense

Income

GET /income – get all income

POST /income – create income

PUT /income/:id – update income

DELETE /income/:id – delete income



Example Request Body
Users (POST /users)
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "suite": "Apt 1",
    "city": "Toronto",
    "zipcode": "M1A1A1"
  }
}

Expenses (POST /expenses)
{
  "body": "Monthly Expenses",
  "Savings": { "RRSP": 500, "Investments": 300 },
  "PaymentObligation": { "CreditCard": 200, "Loan": 150 },
  "Insurance": { "Life": 50, "Health": 100 },
  "Housing": { "Rent": 1200, "Utilities": 200 },
  "Utilities": { "Phone": 50, "Internet": 60 },
  "Personal": { "Dining": 100, "Hobbies": 50 }
}

Income (POST /income)
{
  "body": "Monthly Income",
  "Wages": 3000,
  "SecondaryIncome": 500,
  "Interest": 50,
  "SupportPayment": 200,
  "Others": 100
}

Dependencies:

Node.js
Express
dotenv (for environment variables)

Install with:
npm install express dotenv
