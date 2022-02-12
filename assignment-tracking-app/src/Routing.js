import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/users/Login';
import SignUp from './component/users/SignUp';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const AddEditTask = lazy(() => import('./pages/AddEditTask'));

const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/addTask" element={<AddEditTask />} />
          <Route path="/editTask/:id" element={<AddEditTask />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routing;
