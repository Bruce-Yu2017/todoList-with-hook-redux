import { CONTENT_UPDATE, DATE_UPDATE, CREATE_LIST, FETCH_LISTS, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, SELECTED_DELETED_ROW, SELECTED_EDITED_ROW, DELETE_TODO, TOGGLE_ALERT, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, EDIT_TODO, LINE_COLOR_STATE } from './types';
import axios from 'axios';

export const contentUpdate = (content) => {
  return {
    type: CONTENT_UPDATE,
    payload: content
  }
}

export const dateUpdate = (date) => {
  return {
    type: DATE_UPDATE,
    payload: date
  }
}

export const createTodo = (obj) => dispatch => {
  axios.post('http://localhost:3001/todos', obj).then((res) => {
    dispatch({
      type: CREATE_LIST,
      payload: res.data
    });
    dispatch(toggle_alert({ status: true, msg: obj.content, type: 'created' }));
    setTimeout(() => {
      dispatch(toggle_alert({ status: false, msg: '', type: '' }));
    }, 3000);
  })
}

export const fetchAllTodos = () => dispatch => {
  axios.get('http://localhost:3001/todos').then((res) => {
    dispatch({
      type: FETCH_LISTS,
      payload: res.data
    })
  })
}

export const openDeleteModal = () => {
  return {
    type: OPEN_DELETE_MODAL,
    payload: true
  };
}

export const closeDeleteModal = () => {
  return {
    type: CLOSE_DELETE_MODAL,
    payload: false
  }
}

export const openEditModal = () => {
  return {
    type: OPEN_EDIT_MODAL,
    payload: true
  };
}

export const closeEditModal = () => {
  return {
    type: CLOSE_EDIT_MODAL,
    payload: false
  }
}

export const selectedDeletedRow = (data) => {
  return {
    type: SELECTED_DELETED_ROW,
    payload: data
  }
}

export const selectedEdittedRow = (data) => {
  return {
    type: SELECTED_EDITED_ROW,
    payload: data
  }
}

export const deletetodo = (obj) => dispatch => {
  axios.delete(`http://localhost:3001/todos/${obj.id}`).then((res) => {
    dispatch({
      type: DELETE_TODO,
      payload: obj.id
    })
    dispatch(toggle_alert({ status: true, msg: obj.content, type: 'deleted' }));
    setTimeout(() => {
      dispatch(toggle_alert({ status: false, msg: '', type: '' }));
    }, 3000);
  })
}

export const toggle_alert = (alert) => {
  return {
    type: TOGGLE_ALERT,
    payload: alert
  }
}

export const edittodo = (obj) => dispatch => {
  axios.patch(`http://localhost:3001/todos/${obj.id}`, obj).then((res) => {
    dispatch({
      type: EDIT_TODO,
      payload: res.data
    })
    dispatch(toggle_alert({ status: true, msg: obj.content, type: 'editted' }));
    dispatch(line_color_change(obj.id, true));
    setTimeout(() => {
      dispatch(toggle_alert({ status: false, msg: '', type: '' }));
      dispatch(line_color_change(obj.id, false));
    }, 3000);
  })
}

export const line_color_change = (id, status) => {
  return {
    type: LINE_COLOR_STATE,
    payload: {id: id, status: status}
  }
}