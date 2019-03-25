import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { contentUpdate, dateUpdate, createTodo, toggle_alert, edittodo } from '../actions/actions';
import uuid from 'uuid';

const Form = (props) => {
  const [content, setContent] = useState('');
  const [date, setDate] = useState(null);
  useEffect(() => {
    if (props.editInfo) {
      setContent(props.editInfo.content);
      setDate(new Date(props.editInfo.date))
    }
  }, [])

  const contentOnChange = (content) => {
    // props.contentUpdate(content);
    setContent(content);
  }

  const dateChange = (date) => {
    // props.dateUpdate(date);
    setDate(date)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (!props.editInfo) {
      let obj = {
        content: content,
        date: date.toLocaleDateString(),
        id: uuid.v1()
      }
      props.createTodo(obj);
      setContent('');
      setDate(null);
    }
    else {
      let obj = {
        content: content,
        date: date.toLocaleDateString(),
        id: props.editInfo.id
      }
      console.log(obj)
      props.edittodo(obj);
      setContent('');
      setDate(null);
      props.onhide();
    }
    
  }

  
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-group">
          <label>Content</label>
          <input value={content} onChange={(e) => {contentOnChange(e.target.value)}} type="text" className="form-control" placeholder="Enter content" />
        </div>
        <div className="form-group">
          <label style={{"display": "block"}}>Date</label>
          <DatePicker
            className="form-control"
            selected={date}
            minDate={new Date()}
            onChange={(selectedDate) => dateChange(selectedDate)}
            placeholderText="Select a date"
          />
        </div>
        <button type="submit" className="btn btn-primary">{props.editInfo ? 'Edit' : 'Submit'}</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.form_state
}

export default connect(mapStateToProps, { contentUpdate, dateUpdate, createTodo, toggle_alert, edittodo })(Form);