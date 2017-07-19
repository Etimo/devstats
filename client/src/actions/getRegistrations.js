import axios from 'axios';
import { GET_REGISTRATIONS } from './actionTypes';
import { API_URL_DEVREGISTRATIONS } from '../config';

const getRegistrationsAction = () => {

    return (dispatch) => {

        // TODO: try/catch and error handling
        // TODO: async/await, but needs babelconfig...

        axios.get(API_URL_DEVREGISTRATIONS)
            .then(response => {
                dispatch({ type: GET_REGISTRATIONS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export default getRegistrationsAction;