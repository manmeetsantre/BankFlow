# BankFlow

**Banking Transaction Management System**

A full-stack banking application built to manage users, account balances, money transfers, and transaction history.

## Features

* Create and manage users
* View registered users and individual user details
* Transfer money between users
* View transaction history
* Maintain user account balances
* Responsive web interface
* REST-based communication between the frontend and backend

## Tech Stack

* **Frontend:** React.js, HTML5, CSS3
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Language:** JavaScript

## Application Flow

```text
User
  ↓
React Frontend
  ↓
REST API Request
  ↓
Express.js Server
  ↓
Route / Controller
  ↓
MongoDB
  ↓
API Response
  ↓
React Frontend
```

## Core Modules

### User Management

Users can be created and their details can be viewed through the application.

### Money Transfer

The application allows a user to transfer money to another user. The backend processes the transfer and updates the relevant account information.

### Transaction History

Transactions are recorded and can be viewed to keep track of money transfers.

### Backend API

The backend is implemented using Node.js and Express.js. Routes handle requests from the frontend and communicate with MongoDB for storing and retrieving application data.

## Project Structure

```text
banking-transaction-management-system/
│
├── client/
├── controllers/
├── model/
├── routes/
├── views/
├── public/
├── app.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js
* MongoDB / MongoDB Atlas
* npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

If the frontend has separate dependencies, install them inside the client directory as well:

```bash
cd client
npm install
```

### Environment Configuration

Configure the MongoDB connection according to your local setup or MongoDB Atlas configuration.

### Run the Application

Start the backend using the project's configured start command:

```bash
npm start
```

Then open the application in the browser using the configured local port.

## What I Learned

* Building REST APIs using Node.js and Express.js
* Connecting a web application to MongoDB
* Designing routes and controllers for different application operations
* Handling data flow between a frontend and backend
* Implementing money-transfer and transaction-history functionality
* Structuring a full-stack web application

## Future Improvements

* User authentication and authorization
* Input validation and improved error handling
* Role-based access control
* Improved transaction consistency
* Pagination and filtering for transaction history
* Automated unit and integration testing

---

Built by **Manmeet Santre**
