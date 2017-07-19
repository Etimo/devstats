import { GET_REGISTRATIONS, POST_REGISTRATION } from '../actions/actionTypes';

const INITIAL_STATE = { devregistrations: [] };

const registrationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_REGISTRATIONS:
            return { ...state, devregistrations: action.payload };
        case POST_REGISTRATION:
            state.devregistrations.push(action.payload);
            return { ...state, devregistrations: state.devregistrations };
        default:
            break;
    }
    return state;
};

export default registrationReducer;