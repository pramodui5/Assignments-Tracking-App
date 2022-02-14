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
      <Row style={{ height: '100vh' }}>
        {/* {isLogin && (
          <Col sm={3}>
            <Sidebar />
          </Col>
        )} */}

        <Col sm={12}>{props.children}</Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Layout;
