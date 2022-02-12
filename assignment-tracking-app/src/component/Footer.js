import React from 'react';
import styled from 'styled-components';

import Copyright from '../packages/Copyright';

const FooterContainer = styled.div`
  padding: 15px;
  margin-top: 10px;
  background-color: #e6e6e6;
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright />
    </FooterContainer>
  );
}

export default Footer;
