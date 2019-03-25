import React from 'react'
import Form from './form';
import Table from './table';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className='container'>
      {props.status &&
        <div className="alert alert-warning" role="alert">
          Your todo list: <strong>{props.msg}</strong> has been {props.type} successfully!
        </div>}
      <h1 className='title'>Todo List</h1>
      <Form />
      <Table />
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.alert_state;
}

export default connect(mapStateToProps)(App);