const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Employee & Product API',
        version: '1.0.0',
        description: 'API documentation for Employee and Product operations',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to routes where Swagger comments are defined
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
