import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:4000/api' });

export const obtenerTipos = () => api.get('/tipos');
export const crearTipo = (datos) => api.post('/tipos', datos);
