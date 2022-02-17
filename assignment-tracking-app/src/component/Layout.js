import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Sidebar from '../packages/Sidebar';

const Layout = (props) => {
  const { data } = useParams();
  const [isLogin, setIsLogin] = useState(data);

  return (
    <Container fluid className="pl-0 pr-0">
      <Header />
      <Row>
        {/* {isLogin && (
          <Col sm={3}>
            <Sidebar />
          </Col>
        )} */}
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={8} style={{ overflow: 'auto', paddingBottom: '100px' }}>
          {props.children}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Layout;
