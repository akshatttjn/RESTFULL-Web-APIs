# RESTful Web APIs with Node.js, Express, and MongoDB

This project demonstrates the implementation of a basic RESTful Web APIs using Node.js, Express, MongoDB, and Mongoose. The APIs are designed to perform CRUD (Create, Read, Update, Delete) operations on Olympics Rankings data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
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

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   Install dependencies from requirements.txt file:
   cd src
   run app.js file to start the server

The server will be running at http://localhost:3000.

## API Endpoints
POST /mens/ - Create a new Olympics Ranking record
GET /mens/ - Retrieve all Olympics Ranking records
GET /mens/:id - Retrieve a specific Olympics Ranking record by ID
PATCH /mens/:id - Update a specific Olympics Ranking record by ID
PUT /mens/:id - Update a specific Olympics Ranking record by ID completely
DELETE /mens/:id - Delete a specific Olympics Ranking record by ID

## Testing
You can use tools like Postman to test the API endpoints. Import the provided Postman collection for easy testing.
