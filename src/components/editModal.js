import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import Form from './form';

const EditModal = (props) => {
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
            Edit Your Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            editInfo={props.data}
            onhide={props.onHide}
          />

        </Modal.Body>
      </Modal>
    </div>

  );
}

const mapStateToProps = (state) => {
  return state.edit_modal_state
}

export default connect(mapStateToProps)(EditModal)