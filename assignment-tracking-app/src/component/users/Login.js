import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import { logInStart } from '../../modules/login/actions';
import Card from '../../packages/Card';
import PageTitle from '../../packages/PageTitle';
import Layout from '../Layout';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = credentials;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log({ credentials });
    dispatch(logInStart(credentials));
  };

  return (
    <Layout>
      <Card>
        <MDBValidation className="row" noValidate onSubmit={handleLogin}>
          <PageTitle>Login</PageTitle>
          <div
            style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}
          >
            <MDBInput
              value={email || ''}
              name="email"
              type="text"
              onChange={onInputChange}
              required
              label="E-Mail"
              validation="Please provide a E-Mail"
              invalid
              className="mb-3"
            />
            <MDBInput
              value={password || ''}
              name="password"
              type="password"
              onChange={onInputChange}
              required
              label="Password"
              validation="Please provide a Password"
              invalid
              className="mb-3"
            />

            <div className="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
              <MDBBtn style={{ marginRight: '10px' }} type="submit">
                Login
              </MDBBtn>
              <MDBBtn style={{ marginRight: '10px' }} type="submit">
                Reset
              </MDBBtn>
            </div>
            <div style={{ textAlign: 'center', margin: '20px', textDecoration: 'underline' }}>
              <a role="button">Forgot password? Reset here</a>
            </div>
          </div>
        </MDBValidation>
      </Card>
    </Layout>
  );
};

export default Login;
