import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '8245a79850d565fdfe21e94a2bd8ae81',
    language: 'es-ES'
  }
});

export default instance;
