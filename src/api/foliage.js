import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    // baseURL: 'https://foliage-api.onrender.com'
    baseURL: 'https://0bac-2a02-6b60-9c6b-0-9906-ce46-4310-3a68.ngrok.io'
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