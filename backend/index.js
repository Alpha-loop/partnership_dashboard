
import axios from 'axios';

const fetchData = axios.create({
    baseURL: 'https://churchplusv3coreapi.azurewebsites.net/',
    headers: {
        'Content-Type': 'application/json',
    },
});

fetchData.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


fetchData.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
       
        if (error.response) {
            switch (error.response.status) {
                case 401: 
                    console.error('Unauthorized: Please log in again.');
                    
                    localStorage.removeItem('authToken');
                    window.location.href = '/login'; 
                    break;
                case 403:
                    console.error('Forbidden: You do not have permission to access this resource.');
                    break;
                case 404:
                    console.error('Resource not found.');
                    break;
                case 500:
                    console.error('Server error: Something went wrong on the server.');
                    break;
                default:
                    console.error(`API Error: ${error.response.status} - ${error.response.data.message || error.message}`);
            }
        } else if (error.request) {
            console.error('Network Error: No response received from server.');
        } else {
            console.error('Request Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default fetchData;