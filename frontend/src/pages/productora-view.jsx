import React, { useState, useEffect } from 'react';
import { obtenerProductoras, crearProductora } from '../services/productora-service';

const ProductoraView = () => {
    const [productoras, setProductoras] = useState([]);
    const [nombre, setNombre] = useState('');
    const [slogan, setSlogan] = useState('');

    const listar = async () => {
        const { data } = await obtenerProductoras();
        setProductoras(data);
    };

    useEffect(() => { listar() }, []);

    const guardar = async (e) => {
        e.preventDefault();
        await crearProductora({ nombre, slogan, estado: 'Activo' });
        setNombre(''); setSlogan('');
        listar();
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={guardar} className="card p-3 shadow-sm border-0">
                    <h5 className="text-info">Nueva Productora</h5>
                    <input type="text" placeholder="Nombre" className="form-control mb-2" value={nombre} onChange={e => setNombre(e.target.value)} required />
                    <input type="text" placeholder="Slogan" className="form-control mb-2" value={slogan} onChange={e => setSlogan(e.target.value)} />
                    <button className="btn btn-info text-white">Registrar</button>
                </form>
            </div>
            <div className="col-md-8">
                <table className="table table-hover shadow-sm bg-white">
                    <thead className="table-dark"><tr><th>Nombre</th><th>Slogan</th></tr></thead>
                    <tbody>{productoras.map(p => <tr key={p._id}><td>{p.nombre}</td><td>{p.slogan}</td></tr>)}</tbody>
                </table>
            </div>
        </div>
    );
};
export default ProductoraView;
