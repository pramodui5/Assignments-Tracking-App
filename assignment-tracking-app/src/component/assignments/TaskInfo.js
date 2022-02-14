import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import PageTitle from '../../packages/PageTitle';
import Layout from '../Layout';

const TaskInfo = () => {
  const { assignments } = useSelector((state) => state.assignmentsReducer);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleAssignment = assignments.find((item) => item.id === Number(id));
  console.log({ singleAssignment });
  return (
    <Layout>
      <div style={{ margin: 'auto', padding: '15px', alignContent: 'center' }}>
        <PageTitle>User Detail</PageTitle>
        <p className="col-md-6 fw-bold">
          ID: <span className="fw-normal">{singleAssignment.id}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Title: <span className="fw-normal">{singleAssignment.title}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Status: <span className="fw-normal">{singleAssignment.status}</span>
        </p>

        <p className="col-md-6 fw-bold">
          Description: <span className="fw-normal">{singleAssignment.description}</span>
        </p>
      </div>
      <MDBBtn onClick={() => navigate('/')} color="danger">
        Go Back
      </MDBBtn>
    </Layout>
  );
};

export default TaskInfo;
