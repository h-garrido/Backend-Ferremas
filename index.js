const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const sequelize = require('./config/database')
const swagger = require('./swagger');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Importar rutas
const clienteRoutes = require('./routes/clienteRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const productoRoutes = require('./routes/productoRoutes');
const transaccionRoutes = require('./routes/transaccionRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');

// Usar rutas
app.use('/clientes', clienteRoutes);
app.use('/empleados', empleadoRoutes);
app.use('/productos', productoRoutes);
app.use('/transacciones', transaccionRoutes);
app.use('/pedidos', pedidosRoutes);

// Middleware
app.use(morgan('dev'));

// Usar Swagger
app.use(swagger);

// Sincronizar modelos y luego iniciar el servidor
sequelize.sync()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });