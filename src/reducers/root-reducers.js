import { combineReducers } from 'redux';
import formReducer from './formReducer';
import tableReducer from './tableReducer';
import deleteModalReducer from './deleteModalReducer';
import editModalReducer from './editModalReducer';
import alertReducer from './alertReducer';
import lineColorReducer from './lineColorReducer';

export default combineReducers({
    form_state: formReducer,
    table_state: tableReducer,
    delete_modal_state: deleteModalReducer,
    edit_modal_state: editModalReducer,
    alert_state: alertReducer,
    line_color_state: lineColorReducer,

})