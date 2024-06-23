const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const sequelize = require('./config/database');
const path = require('path');

dotenv.config();

const app = express();

// Importar rutas
const clienteRoutes = require('./routes/clienteRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const productoRoutes = require('./routes/productoRoutes');
const transaccionRoutes = require('./routes/transaccionRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');
const detallePedidosRoutes = require('./routes/detallePedidosRoutes');
const transbankRoutes = require('./routes/transbankRoutes');  // Nueva ruta de Transbank
const empleadoRolRoutes = require('./routes/empleadoRolRoutes');
const rolRoutes = require('./routes/rolRoutes');

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Sirviendo archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Usar rutas
app.use('/clientes', clienteRoutes);
app.use('/empleados', empleadoRoutes);
app.use('/productos', productoRoutes);
app.use('/transacciones', transaccionRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/detalle-pedidos', detallePedidosRoutes);
app.use('/transbank', transbankRoutes);
app.use('/empleados-roles', empleadoRolRoutes);
app.use('/roles', rolRoutes);

// Sincronizar modelos y luego iniciar el servidor
sequelize
  .sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });