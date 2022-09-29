import createDataContext from "./createDataContext";
import foliageApi from '../api/foliage';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_location_results':
            return action.payload
        // case 'fetch_location':
        //     return action.payload
        default:
            return state;
    }
};

const fetchLocationResults = dispatch => async (query) => {
    const response = await foliageApi.get(`locationautocomplete?name=${query}`);
    dispatch({ type: 'fetch_location_results', payload: response.data });
}

// const fetchLocation = dispatch => async (id) => {
//     const response = await foliageApi.get('locations')
// }

export const { Provider, Context } = createDataContext(
    locationReducer,
    { fetchLocationResults },
    []
);