import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import foliageApi from '../api/foliage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'log_in':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const createAccount = dispatch => async ({email, password}) => {
    // make api request to sign up with email and password
    try {
        const response = await foliageApi.post('createaccount', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'log_in', payload: response.data.token});
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with creating your account.'});
    }

}


const logIn = dispatch => async ({email, password}) => {
    try {
        const response = await foliageApi.post('login', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'log_in', payload: response.data.token });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with loggin you in.'});
    }
}


const logOut = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { createAccount, logIn, logOut },
    { token: null, errorMessage: '' }
)