import React, { useState, useEffect } from 'react';
import { obtenerTipos, crearTipo } from '../services/tipo-service';

const TipoView = () => {
    const [tipos, setTipos] = useState([]);
    const [nombre, setNombre] = useState('');

    const listar = async () => {
        const { data } = await obtenerTipos();
        setTipos(data);
    };

    useEffect(() => { listar() }, []);

    const guardar = async (e) => {
        e.preventDefault();
        await crearTipo({ nombre });
        setNombre('');
        listar();
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={guardar} className="card p-3 shadow-sm border-0">
                    <h5 className="text-warning">Nuevo Tipo</h5>
                    <input type="text" className="form-control mb-2" value={nombre} onChange={e => setNombre(e.target.value)} required />
                    <button className="btn btn-warning">Registrar</button>
                </form>
            </div>
            <div className="col-md-8">
                <table className="table table-hover shadow-sm bg-white">
                    <thead className="table-dark"><tr><th>Nombre</th><th>Fecha</th></tr></thead>
                    <tbody>{tipos.map(t => <tr key={t._id}><td>{t.nombre}</td><td>{new Date(t.fechaCreacion).toLocaleDateString()}</td></tr>)}</tbody>
                </table>
            </div>
        </div>
    );
};
export default TipoView;
