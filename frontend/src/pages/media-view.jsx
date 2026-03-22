import React, { useState, useEffect } from 'react';
import { obtenerMedias, crearMedia } from '../services/media-service';
import { obtenerGeneros } from '../services/genero-service';
import { obtenerDirectores } from '../services/director-service';
import { obtenerProductoras } from '../services/productora-service';
import { obtenerTipos } from '../services/tipo-service';

const MediaView = () => {
    const [medias, setMedias] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [directores, setDirectores] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);

    const [valores, setValores] = useState({
        serial: '', titulo: '', url: '', genero: '', director: '', productora: '', tipo: ''
    });

    const listarTodo = async () => {
        const [respM, respG, respD, respP, respT] = await Promise.all([
            obtenerMedias(), obtenerGeneros(), obtenerDirectores(), obtenerProductoras(), obtenerTipos()
        ]);
        setMedias(respM.data);
        setGeneros(respG.data.filter(g => g.estado === 'Activo'));
        setDirectores(respD.data.filter(d => d.estado === 'Activo'));
        setProductoras(respP.data.filter(p => p.estado === 'Activo'));
        setTipos(respT.data);
    };

    useEffect(() => { listarTodo() }, []);

    const handleChange = (e) => setValores({ ...valores, [e.target.name]: e.target.value });

    const guardar = async (e) => {
        e.preventDefault();
        try {
            await crearMedia(valores);
            setValores({ serial: '', titulo: '', url: '', genero: '', director: '', productora: '', tipo: '' });
            listarTodo();
        } catch (error) { alert('Error al crear Media') }
    };

    return (
        <div className="container-fluid">
            <form onSubmit={guardar} className="row g-2 mb-4 p-3 bg-light rounded shadow-sm">
                <div className="col-md-2"><input type="text" name="serial" placeholder="Serial" className="form-control" value={valores.serial} onChange={handleChange} required /></div>
                <div className="col-md-3"><input type="text" name="titulo" placeholder="Título" className="form-control" value={valores.titulo} onChange={handleChange} required /></div>
                <div className="col-md-3"><input type="url" name="url" placeholder="URL" className="form-control" value={valores.url} onChange={handleChange} required /></div>
                <div className="col-md-1">
                    <select name="genero" className="form-select" value={valores.genero} onChange={handleChange} required>
                        <option value="">Género</option>
                        {generos.map(g => <option key={g._id} value={g._id}>{g.nombre}</option>)}
                    </select>
                </div>
                <div className="col-md-1">
                    <select name="director" className="form-select" value={valores.director} onChange={handleChange} required>
                        <option value="">Director</option>
                        {directores.map(d => <option key={d._id} value={d._id}>{d.nombres}</option>)}
                    </select>
                </div>
                <div className="col-md-1">
                    <select name="productora" className="form-select" value={valores.productora} onChange={handleChange} required>
                        <option value="">Productora</option>
                        {productoras.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)}
                    </select>
                </div>
                <div className="col-md-1">
                    <select name="tipo" className="form-select" value={valores.tipo} onChange={handleChange} required>
                        <option value="">Tipo</option>
                        {tipos.map(t => <option key={t._id} value={t._id}>{t.nombre}</option>)}
                    </select>
                </div>
                <div className="col-md-12 text-end"><button className="btn btn-primary px-5">Registrar</button></div>
            </form>

            <table className="table table-hover shadow-sm">
                <thead className="table-dark"><tr><th>Ser</th><th>Título</th><th>Gén</th><th>Dir</th><th>Prod</th><th>Tipo</th></tr></thead>
                <tbody>{medias.map(m => <tr key={m._id}><td>{m.serial}</td><td>{m.titulo}</td><td>{m.genero?.nombre}</td><td>{m.director?.nombres}</td><td>{m.productora?.nombre}</td><td>{m.tipo?.nombre}</td></tr>)}</tbody>
            </table>
        </div>
    );
};
export default MediaView;
