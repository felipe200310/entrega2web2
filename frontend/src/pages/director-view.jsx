import React, { useState, useEffect } from 'react';
import { obtenerDirectores, crearDirector } from '../services/director-service';

const DirectorView = () => {
    const [directores, setDirectores] = useState([]);
    const [nombres, setNombres] = useState('');

    const listar = async () => {
        const { data } = await obtenerDirectores();
        setDirectores(data);
    };

    useEffect(() => { listar() }, []);

    const guardar = async (e) => {
        e.preventDefault();
        await crearDirector({ nombres, estado: 'Activo' });
        setNombres('');
        listar();
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={guardar} className="card p-3 shadow-sm border-0">
                    <h5 className="text-success">Nuevo Director</h5>
                    <div className="mb-2">
                        <label className="form-label small text-muted">Nombre Completo</label>
                        <input type="text" className="form-control" value={nombres} onChange={e => setNombres(e.target.value)} required />
                    </div>
                    <button className="btn btn-success">Registrar</button>
                </form>
            </div>
            <div className="col-md-8">
                <div className="table-responsive shadow-sm">
                    <table className="table table-hover bg-white mb-0">
                        <thead className="table-dark"><tr><th>Nombres</th><th>Estado</th></tr></thead>
                        <tbody>{directores.map(d => <tr key={d._id}><td>{d.nombres}</td><td><span className="badge bg-success">{d.estado}</span></td></tr>)}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default DirectorView;
