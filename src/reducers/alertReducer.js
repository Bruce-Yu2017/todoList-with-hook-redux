import { TOGGLE_ALERT } from '../actions/types';

const initialState = { status: false, msg: '', type: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ALERT:
            return action.payload;
        default:
            return state;
    }
}