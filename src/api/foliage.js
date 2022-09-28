import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'http://7468-2a02-6b60-9c6b-0-d100-d63d-cc38-460f.ngrok.io'
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