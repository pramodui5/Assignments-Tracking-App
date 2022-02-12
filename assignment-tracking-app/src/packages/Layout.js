import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { loadUsersStart } from '../modules/actions/actions';

import Header from '../component/Header';
// import SignUp from '../component/users/SignUp';
import Sidebar from './Sidebar';

const Layout = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  });

  return (
    <Container fluid className="pl-0 pr-0">
      <Header />
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>
          {/* <SignUp /> */}
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th>phone</th>
              <th>role</th>
            </tr>
            {users.map((item, index) => {
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                </tr>
              </tbody>;
            })}
            <tr>
              <td></td>
            </tr>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
