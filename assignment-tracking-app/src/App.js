import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import Routing from './Routing';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  );
}

export default App;
