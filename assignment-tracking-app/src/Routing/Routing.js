import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../component/users/Login';

const Home = lazy(() => import('../component/Home'));
const AddEditTask = lazy(() => import('../component/assignments/AddEditTask'));
const AssignmentList = lazy(() => import('../component/assignments/AssignmentList'));
const TaskInfo = lazy(() => import('../component/assignments/TaskInfo'));

const AddEditUser = lazy(() => import('../component/users/AddEditUser'));
const UserInfo = lazy(() => import('../component/users/UserInfo'));
const UserList = lazy(() => import('../component/users/UserList'));

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddEditUser />} />
          <Route exact path="/addEditUser/:id" element={<AddEditUser />} />
          <Route exact path="/userInfo/:id" element={<UserInfo />} />
          <Route exact path="/userDetails" element={<UserList />} />

          <Route path="/addTask" element={<AddEditTask />} />
          <Route path="/editTask/:id" element={<AddEditTask />} />
          <Route exact path="/taskInfo/:id" element={<TaskInfo />} />
          <Route exact path="/taskDetails" element={<AssignmentList />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
