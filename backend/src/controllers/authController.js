const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrar = async (req, res) => {
    try {

        const { nombre, correo, password, rol } = req.body;

        // Verificar si el usuario ya existe
        const existeUsuario = await Usuario.findOne({ correo });

        if (existeUsuario) {
            return res.status(400).json({
                mensaje: 'El usuario ya existe'
            });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada = await bcrypt.hash(password, salt);

        // Crear usuario
        const usuario = new Usuario({
            nombre,
            correo,
            password: passwordEncriptada,
            rol
        });

        await usuario.save();

        res.status(201).json({
            mensaje: 'Usuario registrado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }
};

const login = async (req, res) => {

    try {

        const { correo, password } = req.body;

        // Buscar usuario
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        // Comparar contraseña
        const passwordValida = await bcrypt.compare(password, usuario.password);

        if (!passwordValida) {
            return res.status(400).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        // Generar token
        const token = jwt.sign(
            {
                id: usuario._id,
                rol: usuario.rol
            },
            process.env.JWT_SECRET || 'secreto',
            {
                expiresIn: '4h'
            }
        );

        res.json({
            mensaje: 'Login exitoso',
            token
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }
};

module.exports = {
    registrar,
    login
};