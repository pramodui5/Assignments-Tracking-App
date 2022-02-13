import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../../modules/user/actions';
import { toast } from 'react-toastify';

import PageTitle from '../../packages/PageTitle';
import Header from '../Header';
import Sidebar from '../../packages/Sidebar';

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  password: '',
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { name, email, phone, password } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

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
        setTimeout(() => navigate('/'), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success('User updated successfully');
        setTimeout(() => navigate('/'), 500);
      }
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Container fluid className="pl-0 pr-0">
      <Header />
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>
          <MDBValidation className="row" noValidate onSubmit={handleSubmit}>
            <PageTitle>{!editMode ? 'User Registration' : 'Update User Detail'}</PageTitle>
            <div
              style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}
            >
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
        </Col>
      </Row>
    </Container>
  );
};

export default AddEditUser;
