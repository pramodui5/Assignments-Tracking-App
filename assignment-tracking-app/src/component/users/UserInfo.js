import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import PageTitle from '../../packages/PageTitle';
import Layout from '../Layout';

const UserInfo = () => {
  const { users } = useSelector((state) => state.usersReducer);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleUser = users.find((item) => item.id === Number(id));
  console.log({ singleUser });
  return (
    <Layout>
      <div style={{ margin: 'auto', padding: '15px', alignContent: 'center' }}>
        <PageTitle>User Detail</PageTitle>
        <p className="col-md-6 fw-bold">
          ID: <span className="fw-normal">{singleUser.id}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Name: <span className="fw-normal">{singleUser.name}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Email: <span className="fw-normal">{singleUser.email}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Contact Number: <span className="fw-normal">{singleUser.phone}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Password: <span className="fw-normal">{singleUser.password}</span>
        </p>
      </div>
      <MDBBtn onClick={() => navigate('/userDetails')} color="danger">
        Go Back
      </MDBBtn>
    </Layout>
  );
};

export default UserInfo;
