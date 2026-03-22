const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { getConnection } = require('./config/db');

// Inicializar la aplicación Express
const app = express();

// Conectar a la base de datos
getConnection();

// Middlewares globales
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Registro de rutas modulares
app.use('/api/generos', require('./routes/generoRoute'));
app.use('/api/directores', require('./routes/directorRoute'));
app.use('/api/productoras', require('./routes/productoraRoute'));
app.use('/api/tipos', require('./routes/tipoRoute'));
app.use('/api/medias', require('./routes/mediaRoute'));

// Ruta de prueba inicial
app.get('/health', (req, res) => {
    res.json({ status: 'API Funcionando', timestamp: new Date() });
});

// Configuración del puerto
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
