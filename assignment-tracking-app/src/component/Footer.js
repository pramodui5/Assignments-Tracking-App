import React from 'react';
import styled from 'styled-components';

import Copyright from '../packages/Copyright';

const FooterContainer = styled.div`
  padding: 6px;
  margin-top: 10px;
  background-color: #e6e6e6;
  position: fixed;
  z-index: 11;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright />
    </FooterContainer>
  );
}

export default Footer;
