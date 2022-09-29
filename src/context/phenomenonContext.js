import createDataContext from "./createDataContext";
import foliageApi from '../api/foliage';

const phenomenonReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_phenomena':
            return action.payload
        default:
            return state;
    }
};

const fetchAllPhenomena = dispatch => async (query) => {
    const response = await foliageApi.get('phenomena');
    dispatch({ type: 'fetch_phenomena', payload: response.data });
}

export const { Provider, Context } = createDataContext(
    phenomenonReducer,
    { fetchAllPhenomena },
    []
);