import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    // baseURL: 'https://foliage-api.onrender.com'
    baseURL: 'http://f46b-2a02-c7c-5c03-6300-407f-279b-3cf4-3b3c.ngrok.io'
});

// Automatically add token to every request
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance