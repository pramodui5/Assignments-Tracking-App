import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { createAssignmentsStart, updateAssignmentStart } from '../../modules/assignments/actions';
import PageTitle from '../../packages/PageTitle';
import Layout from '../Layout';

const initialState = {
  id: '',
  title: '',
  status: '',
  description: '',
};

const AddEditTask = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { assignments } = useSelector((state) => state.assignmentsReducer);
  const { title, status, description } = formValue;
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleTask = assignments.find((item) => item.id === Number(id));
      setFormValue({ ...singleTask });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status && description) {
      if (!editMode) {
        dispatch(createAssignmentsStart(formValue));
        toast.success('User added successfully');
        setTimeout(() => navigate('/taskDetails'), 500);
      } else {
        dispatch(updateAssignmentStart({ id, formValue }));
        setEditMode(false);
        toast.success('User updated successfully');
        setTimeout(() => navigate('/taskDetails'), 500);
      }
    }
  };

  return (
    <Layout>
      <MDBValidation className="row" noValidate onSubmit={handleSubmit}>
        <PageTitle>{!editMode ? 'Add Assignment' : 'Update Assignment'}</PageTitle>
        <div style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
          <MDBInput
            value={title || ''}
            name="title"
            type="text"
            onChange={onInputChange}
            required
            label="Title"
            validation="Please provide a title"
            invalid
            className="mb-3"
          />
          <MDBInput
            value={status || ''}
            name="status"
            type="text"
            onChange={onInputChange}
            required
            label="Status"
            validation="Please provide a Status"
            invalid
            className="mb-3"
          />
          <MDBInput
            value={description || ''}
            name="description"
            type="text"
            onChange={onInputChange}
            required
            label="Description"
            validation="Please provide a Description"
            invalid
            className="mb-3"
          />

          <div className="col-12">
            <MDBBtn style={{ marginRight: '10px' }} type="submit">
              {!editMode ? 'Add' : 'Update'}
            </MDBBtn>
            <MDBBtn onClick={() => navigate('/')} color="danger">
              Go Back
            </MDBBtn>
          </div>
        </div>
      </MDBValidation>
    </Layout>
  );
};

export default AddEditTask;
