import axios from 'axios';
const api = axios.create({ baseURL: 'https://backend-4bh4.onrender.com/api' });

export const obtenerTipos = () => api.get('/tipos');
export const crearTipo = (datos) => api.post('/tipos', datos);
