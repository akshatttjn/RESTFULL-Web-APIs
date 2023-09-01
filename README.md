# RESTful Web APIs with Node.js, Express, and MongoDB

This project demonstrates the implementation of a basic RESTful Web APIs using Node.js, Express, MongoDB, and Mongoose. The APIs are designed to perform CRUD (Create, Read, Update, Delete) operations on Olympics Rankings data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Features

- Create new Olympics Ranking records
- Retrieve Olympics Ranking records
- Update existing records
- Delete records

## Prerequisites

- Node.JS
- Express
- Mongoose
- dotenv

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   Install dependencies from requirements.txt file:
   Create a .env file in the root directory of your project and add your MongoDB Atlas connection string like this:
   MONGODB_URI=your_mongodb_connection_string_here

   cd src                                   
   run app.js file to start the server

The server will be running at http://localhost:3000.

## API Endpoints

The following endpoints are available for interacting with the Olympics Ranking records.

### Create a New Record

- **POST** `/mens/`
  Create a new Olympics Ranking record.

### Retrieve Records

- **GET** `/mens/`
  Retrieve all Olympics Ranking records.

### Retrieve a Specific Record by ID

- **GET** `/mens/:id`
  Retrieve a specific Olympics Ranking record by its ID.

### Update a Record (Partial Update)

- **PATCH** `/mens/:id`
  Update a specific Olympics Ranking record by its ID. This performs a partial update.

### Update a Record (Full Update)

- **PUT** `/mens/:id`
  Update a specific Olympics Ranking record by its ID completely. This replaces the entire record.

### Delete a Record

- **DELETE** `/mens/:id`
  Delete a specific Olympics Ranking record by its ID.



## Testing
You can use tools like Postman to test the API endpoints. Import the provided Postman collection for easy testing.
