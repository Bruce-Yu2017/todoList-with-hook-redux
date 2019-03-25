import { CONTENT_UPDATE, DATE_UPDATE } from '../actions/types';

const initialState = {
    content: '',
    date: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTENT_UPDATE:
            return { ...state, content: action.payload };
        case DATE_UPDATE:
            return { ...state, date: action.payload };
        default:
            return state;
    }
}