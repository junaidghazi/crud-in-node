const express = require('express');
const { addEmployee, deleteEmployee, getEmployeeByName, getHighestSalaryEmployee } = require('../controllers/employeeController');
const router = express.Router();

/**
 * @swagger
 * /api/employees/highest-salary:
 *   get:
 *     summary: Get employee with highest salary
 *     responses:
 *       200:
 *         description: Employee with the highest salary
 */
router.get('/highest-salary', getHighestSalaryEmployee);

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Add a new employee
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               position:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post('/', addEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete('/:id', deleteEmployee);

/**
 * @swagger
 * /api/employees/{name}:
 *   get:
 *     summary: Get employee by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee found
 */
router.get('/:name', getEmployeeByName);

module.exports = router;
