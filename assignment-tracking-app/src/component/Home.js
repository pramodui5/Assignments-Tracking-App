import React, { useState } from 'react';
import Layout from './Layout';
import UserList from './users/UserList';

import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
  MDBSpinner,
} from 'mdb-react-ui-kit';

const Home = () => {
  const { addUser, setAddUser } = useState('false');
  const { showUser, setShowUser } = useState('false');

  const handleAddUser = (e) => {
    e.preventDefault();
  };
  const handleViewUser = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <MDBBtn className="m-1" title="Add User" tag="a" onClick={() => handleAddUser()}>
        Add User
      </MDBBtn>
      <MDBBtn className="m-1" title="Show User" tag="a" onClick={() => handleViewUser()}>
        Show User
      </MDBBtn>
      <UserList />
    </Layout>
  );
};

export default Home;
