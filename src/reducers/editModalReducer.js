import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, SELECTED_EDITED_ROW } from '../actions/types';

const initialState = { status: false, data: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EDIT_MODAL:
      return { ...state, status: true };
    case CLOSE_EDIT_MODAL:
      return { ...state, status: false };
    case SELECTED_EDITED_ROW:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}