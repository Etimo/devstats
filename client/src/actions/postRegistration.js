import axios from 'axios';
import { POST_REGISTRATION } from './actionTypes';
import { API_URL_DEVREGISTRATIONS } from '../config';

const postRegistrationAction = (devregistration) => {

    return (dispatch) => {

        // TODO: try/catch and error handling
        // TODO: async/await, but needs babelconfig...
        axios.post(API_URL_DEVREGISTRATIONS, devregistration)
            .then(response => {
                dispatch({ type: POST_REGISTRATION, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export default postRegistrationAction;