const mongoose = require('mongoose');
const dns = require('dns');

// Forzar el uso de DNS de Google para resolver registros SRV de Atlas
dns.setServers(['8.8.8.8', '8.8.4.4']);

/**
 * Función para conectar a la base de datos de MongoDB Atlas.
 */
const getConnection = async () => {
    try {
        const url = process.env.MONGO_URI;
        await mongoose.connect(url, {
            family: 4 // Forza a usar IPv4
        });
        console.log('--- Conexión establecida con MongoDB Atlas ---');
    } catch (error) {
        console.error('--- Error al conectar a MongoDB ---', error);
        process.exit(1);
    }
};

module.exports = { getConnection };
