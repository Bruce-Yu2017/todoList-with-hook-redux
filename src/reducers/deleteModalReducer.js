import { OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, SELECTED_DELETED_ROW } from '../actions/types';

const initialState = {status: false, data: null};
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DELETE_MODAL:
      return {...state, status: true};
    case CLOSE_DELETE_MODAL:
      return {...state, status: false};
    case SELECTED_DELETED_ROW:
      return {...state, data: action.payload}
    default:
      return state;
  }
}