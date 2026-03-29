import axios from 'axios';
const api = axios.create({ baseURL: 'https://backend-4bh4.onrender.com/api' });

export const obtenerMedias = () => api.get('/medias');
export const crearMedia = (datos) => api.post('/medias', datos);
