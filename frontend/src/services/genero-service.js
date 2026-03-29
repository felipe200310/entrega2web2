import axios from 'axios';
const api = axios.create({ baseURL: 'https://backend-4bh4.onrender.com/api' });
export const obtenerGeneros = () => api.get('/generos');
export const crearGenero = (datos) => api.post('/generos', datos);
