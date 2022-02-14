import React from 'react';

import Layout from './Layout';
import AssignmentList from './assignments/AssignmentList';
import UserList from './users/UserList';
import Login from './users/Login';

const Home = () => {
  return (
    <Layout>
      {/* <UserList /> */}
      <AssignmentList />
    </Layout>
  );
};

export default Home;
