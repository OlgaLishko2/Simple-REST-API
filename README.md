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
