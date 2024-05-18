const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Ferremas API',
            version: '1.0.0',
            description: 'API documentation for Ferremas'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
        components: {
            schemas: {
                Cliente: {
                    type: 'object',
                    required: ['nombre_cliente', 'correo_electronico', 'contraseña', 'domicilio'],
                    properties: {
                        id_cliente: {
                            type: 'integer',
                            description: 'ID del cliente'
                        },
                        nombre_cliente: {
                            type: 'string',
                            description: 'Nombre del cliente'
                        },
                        correo_electronico: {
                            type: 'string',
                            description: 'Correo electrónico del cliente'
                        },
                        contraseña: {
                            type: 'string',
                            description: 'Contraseña del cliente'
                        },
                        domicilio: {
                            type: 'string',
                            description: 'Domicilio del cliente'
                        }
                    }
                },
                Empleado: {
                    type: 'object',
                    required: ['nombre_empleado', 'rut_empleado', 'cargo_empleado', 'usuario', 'contraseña'],
                    properties: {
                        id_empleado: {
                            type: 'integer',
                            description: 'ID del empleado'
                        },
                        nombre_empleado: {
                            type: 'string',
                            description: 'Nombre del empleado'
                        },
                        rut_empleado: {
                            type: 'string',
                            description: 'RUT del empleado'
                        },
                        cargo_empleado: {
                            type: 'string',
                            enum: ['Bodeguero', 'Vendedor', 'Contador', 'Administrador'],
                            description: 'Cargo del empleado'
                        },
                        usuario: {
                            type: 'string',
                            description: 'Usuario del empleado'
                        },
                        contraseña: {
                            type: 'string',
                            description: 'Contraseña del empleado'
                        }
                    }
                },
                Producto: {
                    type: 'object',
                    required: ['codigo_producto', 'marca', 'codigo', 'nombre', 'fecha', 'valor', 'tipo_herramienta'],
                    properties: {
                        codigo_producto: {
                            type: 'string',
                            description: 'Código del producto'
                        },
                        marca: {
                            type: 'string',
                            description: 'Marca del producto'
                        },
                        codigo: {
                            type: 'string',
                            description: 'Código del producto'
                        },
                        nombre: {
                            type: 'string',
                            description: 'Nombre del producto'
                        },
                        fecha: {
                            type: 'string',
                            format: 'date',
                            description: 'Fecha de registro del producto'
                        },
                        valor: {
                            type: 'number',
                            format: 'float',
                            description: 'Valor del producto'
                        },
                        tipo_herramienta: {
                            type: 'object',
                            description: 'Tipos de herramientas'
                        }
                    }
                },
                Transaccion: {
                    type: 'object',
                    required: ['importe', 'nombre_cliente', 'fecha', 'numero_pedido', 'tipo_pago'],
                    properties: {
                        id_transaccion: {
                            type: 'integer',
                            description: 'ID de la transacción'
                        },
                        importe: {
                            type: 'number',
                            format: 'float',
                            description: 'Importe de la transacción'
                        },
                        nombre_cliente: {
                            type: 'string',
                            description: 'Nombre del cliente'
                        },
                        fecha: {
                            type: 'string',
                            format: 'date',
                            description: 'Fecha de la transacción'
                        },
                        numero_pedido: {
                            type: 'integer',
                            description: 'Número del pedido'
                        },
                        tipo_pago: {
                            type: 'string',
                            enum: ['Debito', 'Credito', 'Transferencia'],
                            description: 'Tipo de pago'
                        }
                    }
                },
                Pedido: {
                    type: 'object',
                    required: ['numero_pedido', 'fecha_pedido', 'nombre_cliente'],
                    properties: {
                        id_pedido: {
                            type: 'integer',
                            description: 'ID del pedido'
                        },
                        numero_pedido: {
                            type: 'integer',
                            description: 'Número del pedido'
                        },
                        fecha_pedido: {
                            type: 'string',
                            format: 'date',
                            description: 'Fecha del pedido'
                        },
                        nombre_cliente: {
                            type: 'string',
                            description: 'Nombre del cliente'
                        }
                    }
                }
            }
        }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
