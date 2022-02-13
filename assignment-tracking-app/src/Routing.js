import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/users/Login';
import SignUp from './component/users/SignUp';
import UserInfo from './component/users/UserInfo';

const Home = lazy(() => import('./component/Home'));
const UserProfile = lazy(() => import('./component/users/UserProfile'));
const AddEditUser = lazy(() => import('./component/users/AddEditUser'));
const AddEditTask = lazy(() => import('./component/assignments/AddEditTask'));

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/addUser" element={<AddEditUser />} />
          <Route exact path="/addEditUser/:id" element={<AddEditUser />} />
          <Route exact path="/userInfo/:id" element={<UserInfo />} />

          <Route path="/addTask" element={<AddEditTask />} />
          <Route path="/editTask/:id" element={<AddEditTask />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
