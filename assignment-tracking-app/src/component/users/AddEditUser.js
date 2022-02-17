import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { createUserStart, updateUserStart } from '../../modules/users/actions';
import PageTitle from '../../packages/PageTitle';
import Layout from '../Layout';

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  password: '',
};

const AddEditUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.usersReducer);
  const { name, email, phone, password } = formValue;
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && password) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success('User added successfully');
        setTimeout(() => navigate('/userDetails'), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success('User updated successfully');
        setTimeout(() => navigate('/userDetails'), 500);
      }
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Layout>
      <MDBValidation className="row" noValidate onSubmit={handleSubmit}>
        <PageTitle>{!editMode ? 'User Registration' : 'Update User Detail'}</PageTitle>
        <div style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
          <MDBInput
            value={name || ''}
            name="name"
            type="text"
            onChange={onInputChange}
            required
            label="Name"
            validation="Please provide a name"
            invalid
            className="mb-3"
          />
          <MDBInput
            value={email || ''}
            name="email"
            type="text"
            onChange={onInputChange}
            required
            label="E-Mail"
            validation="Please provide a E-Mail"
            invalid
            className="mb-3"
          />
          <MDBInput
            value={phone || ''}
            name="phone"
            type="text"
            onChange={onInputChange}
            required
            label="Contact Number"
            validation="Please provide a Contact Number"
            invalid
            className="mb-3"
          />
          <MDBInput
            value={password || ''}
            name="password"
            type="password"
            onChange={onInputChange}
            required
            label="Password"
            validation="Please provide a Password"
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

export default AddEditUser;
