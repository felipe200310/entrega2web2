import axios from 'axios';
const api = axios.create({ baseURL: 'https://backend-4bh4.onrender.com/api' });

export const obtenerDirectores = () => api.get('/directores');
export const crearDirector = (datos) => api.post('/directores', datos);
export const actualizarDirector = (id, datos) => api.put(`/directores/${id}`, datos);
