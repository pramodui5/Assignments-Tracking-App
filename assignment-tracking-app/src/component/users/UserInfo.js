import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import PageTitle from '../../packages/PageTitle';

const UserInfo = () => {
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();
  const history = useNavigate();
  const singleUser = users.find((item) => item.id === Number(id));
  return (
    <div style={{ marginTop: '100px' }}>
      <div style={{ margin: 'auto', padding: '15px', maxWidth: '450px', alignContent: 'center' }}>
        <PageTitle>User Detail</PageTitle>
      </div>
    </div>
  );
};

export default UserInfo;
