//PASO 1
import axios from 'axios';

const API_URL = 'https://6a305933a7f8866418d5eedc.mockapi.io/'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type':'application/json',
    },
});

export default api;