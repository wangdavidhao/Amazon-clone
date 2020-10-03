//Fetching librairies axios

import axios from 'axios';

const instance = axios.create({
    baseURL: '...' //API Cloud
});

export default instance;