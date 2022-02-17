import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import Routing from './Routing/Routing';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer className="toast" />
      <Routing />
    </>
  );
}

export default App;
