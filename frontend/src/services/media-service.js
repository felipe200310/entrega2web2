import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:4000/api' });

export const obtenerMedias = () => api.get('/medias');
export const crearMedia = (datos) => api.post('/medias', datos);
