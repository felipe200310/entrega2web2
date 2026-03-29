import axios from 'axios';
const api = axios.create({ baseURL: 'https://backend-4bh4.onrender.com/api' });

export const obtenerProductoras = () => api.get('/productoras');
export const crearProductora = (datos) => api.post('/productoras', datos);
