import { LINE_COLOR_STATE } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case LINE_COLOR_STATE:
            return action.payload;
        default:
            return state;
    }
}