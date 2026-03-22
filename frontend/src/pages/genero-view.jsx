import React, { useState, useEffect } from 'react';
import { obtenerGeneros, crearGenero } from '../services/genero-service';

const GeneroView = () => {
    const [generos, setGeneros] = useState([]);
    const [nombre, setNombre] = useState('');

    const listar = async () => {
        const { data } = await obtenerGeneros();
        setGeneros(data);
    };

    useEffect(() => { listar() }, []);

    const guardar = async (e) => {
        e.preventDefault();
        await crearGenero({ nombre, estado: 'Activo' });
        setNombre('');
        listar();
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={guardar} className="card p-3 shadow-sm">
                    <h5>Nuevo Género</h5>
                    <input type="text" className="form-control mb-2" value={nombre} onChange={e => setNombre(e.target.value)} required />
                    <button className="btn btn-primary">Guardar</button>
                </form>
            </div>
            <div className="col-md-8">
                <table className="table table-striped">
                    <thead><tr><th>Nombre</th><th>Estado</th></tr></thead>
                    <tbody>{generos.map(g => <tr key={g._id}><td>{g.nombre}</td><td>{g.estado}</td></tr>)}</tbody>
                </table>
            </div>
        </div>
    );
};
export default GeneroView;
