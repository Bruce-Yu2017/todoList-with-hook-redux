import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllTodos, openDeleteModal, closeDeleteModal, selectedDeletedRow, selectedEdittedRow, openEditModal, closeEditModal } from '../actions/actions'
import DeleteModal from './deleteModal';
import EditModal from './editModal';
const Table = (props) => {
  useEffect(() => {
    props.fetchAllTodos();
  }, [])

  const modalClose = () => {
    props.closeDeleteModal();
    props.selectedDeletedRow({content: '', date: '', id: ''});
    props.closeEditModal();
    props.selectedEdittedRow({content: '', date: '', id: ''});
  }

  const modalOpen = (row, type) => {
    if (type === 'delete') {
      props.selectedDeletedRow(row);
      props.openDeleteModal();
    }
    else {
      props.selectedEdittedRow(row);
      props.openEditModal();
    }
  }

  const renderLists = () => {
    if (!props.table_state.allList.length) {
      return;
    }
    return props.table_state.allList.map((item, index) => {
      return (
        <tr key={index} className={item.id === props.line_color_state.id && props.line_color_state.status ? 'lineBackground' : ''}>
          <td>{index}</td>
          <td>{item.content}</td>
          <td>{item.date}</td>
          <td>
            <button className='btn btn-danger' onClick={() => modalOpen(item, 'delete')}>Delete</button>
            <button className='btn btn-warning ml-2' onClick={() => modalOpen(item, 'edit')}>Edit</button>
          </td>
        </tr>
      )
    })
  }
  return (
    <div>
      {props.table_state.allList.length > 0 && <table className="table mt-3">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Content</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderLists()}
        </tbody>
      </table>}
      {props.delete_modal_state.status && <DeleteModal
        show={props.delete_modal_state.status}
        onHide={modalClose}
      />}
      {props.edit_modal_state.status && <EditModal
        show={props.edit_modal_state.status}
        onHide={modalClose}
      />}
    </div>

  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { fetchAllTodos, openDeleteModal, closeDeleteModal, selectedDeletedRow, selectedEdittedRow, openEditModal, closeEditModal })(Table);