import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Sidebar from '../packages/Sidebar';

const Layout = (props) => {
  return (
    <Container fluid className="pl-0 pr-0">
      <Header />
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
