import { FETCH_LISTS, CREATE_LIST, DELETE_TODO, EDIT_TODO } from '../actions/types';

const initialState = { allList: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return { allList: [action.payload, ...state.allList] }
    case FETCH_LISTS:
      return { allList: action.payload };
    case DELETE_TODO:
      let id = action.payload;
      let arr = state.allList.filter((item) => {
        return item.id !== id;
      })
      return { allList: arr };
    case EDIT_TODO:
      console.log(action.payload)
      return {allList: state.allList.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      })}
      
    default:
      return state;
  }
}