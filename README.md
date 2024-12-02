# CRUD Operation

This project provides APIs for managing **Products** and **Employees**. It supports CRUD operations for both entities and includes Swagger documentation for easy API exploration.

## Features

- **Product CRUD Operations**
  - Add a new product
  - Delete a product by ID
  - Get a product by its name
  - Get all products

- **Employee CRUD Operations**
  - Add a new employee
  - Delete an employee by ID
  - Get an employee by name
  - Get the employee with the highest salary

- **Swagger Documentation** for easy access to API endpoints and details.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Swagger** - API documentation
  - `swagger-jsdoc` for generating Swagger documentation from JSDoc comments
  - `swagger-ui-express` for serving Swagger UI

## Installation

Follow the steps below to set up the project locally:

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (Running instance or MongoDB Atlas account for cloud DB)

### Steps to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/junaidghazi/crud-in-node.git
   cd crud-in-node
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database connection in `config/db.js` with your MongoDB credentials.

4. Run the server:

   ```bash
   npm start
   ```

   now go to the url http://localhost:3000/api-docs to see the swagger documentation

## API Endpoints

- **Products**
  - Create a new product
  - Get all products
  - Get a product by ID
  - Update a product by ID
  - Delete a product by ID

- **Employees**
  - Create a new employee
  - Get all employees
  - Get an employee by ID
  - Update an employee by ID
  - Delete an employee by ID

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

