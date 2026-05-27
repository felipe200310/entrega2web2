const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Token no enviado.' });
    }

    try {
        const tokenLimpio = token.replace('Bearer ', '');
        const verificado = jwt.verify(tokenLimpio, process.env.JWT_SECRET || 'secreto');

        req.usuario = verificado;
        next();

    } catch (error) {
        res.status(401).json({ mensaje: 'Token no válido' });
    }
};

const permitirRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.usuario.rol)) {
            return res.status(403).json({ mensaje: 'No tienes permisos para esta acción' });
        }

        next();
    };
};

module.exports = {
    verificarToken,
    permitirRoles
};