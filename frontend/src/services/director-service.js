import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:4000/api' });

export const obtenerDirectores = () => api.get('/directores');
export const crearDirector = (datos) => api.post('/directores', datos);
export const actualizarDirector = (id, datos) => api.put(`/directores/${id}`, datos);
