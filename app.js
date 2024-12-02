const express = require('express');
const mongoose = require('mongoose');
const { swaggerSpec, swaggerUi } = require('./swagger/swagger');
const productRoutes = require('./routes/productRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const db = require('./config/db');

const app = express();
app.use(express.json());

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/employees', employeeRoutes);

// MongoDB connection
mongoose.connect(db.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error:', err));

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
