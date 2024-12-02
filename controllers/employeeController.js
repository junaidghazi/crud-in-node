const Employee = require('../models/Employee'); // Assuming Employee model exists.

// Add Employee
const addEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Employee by Name
const getEmployeeByName = async (req, res) => {
    try {
        const employee = await Employee.findOne({ name: req.params.name });
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Employee with highest salary
const getHighestSalaryEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne().sort({ salary: -1 }).limit(1);
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addEmployee, deleteEmployee, getEmployeeByName, getHighestSalaryEmployee };
