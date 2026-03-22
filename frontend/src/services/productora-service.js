import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:4000/api' });

export const obtenerProductoras = () => api.get('/productoras');
export const crearProductora = (datos) => api.post('/productoras', datos);
