const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const sequelize = require("./config/database");

dotenv.config();

const app = express();

// Importar rutas
const clienteRoutes = require("./routes/clienteRoutes");
const empleadoRoutes = require("./routes/empleadoRoutes");
const productoRoutes = require("./routes/productoRoutes");
const transaccionRoutes = require("./routes/transaccionRoutes");
const pedidosRoutes = require("./routes/pedidosRoutes");
const detallePedidosRoutes = require("./routes/detallePedidosRoutes");

app.use(bodyParser.json());
// Middleware
app.use(morgan("dev"));

// Usar rutas
app.use("/clientes", clienteRoutes);
app.use("/empleados", empleadoRoutes);
app.use("/productos", productoRoutes);
app.use("/transacciones", transaccionRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/detalle-pedidos", detallePedidosRoutes);

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
    console.error("Unable to connect to the database:", err);
  });
