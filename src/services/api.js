import axios from 'axios';

const url = 'http://192.168.0.15';
const port = '3333'

const api = axios.create({
    baseURL: `${url}:${port}`,
});

export default api;