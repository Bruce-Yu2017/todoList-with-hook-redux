import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deletetodo, toggle_alert } from '../actions/actions';

const DeleteModal = (props) => {
  const deleteRow = (row) => {
    props.deletetodo(row);
    props.onHide();
  }
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reminder
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to delete todo list with content of: <strong>{props.delete_modal_state.data ? props.delete_modal_state.data.content : ''}</strong> ?</h4>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="danger" onClick={() => deleteRow(props.delete_modal_state.data ? props.delete_modal_state.data : null)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { deletetodo, toggle_alert })(DeleteModal);