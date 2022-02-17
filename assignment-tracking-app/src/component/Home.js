import React from 'react';

import Layout from './Layout';
import AssignmentList from './assignments/AssignmentList';
import UserList from './users/UserList';
import Login from './users/Login';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <>
      {/* <UserList /> */}
      <AssignmentList />
      {/* <Dashboard /> */}
    </>
  );
};

export default Home;
