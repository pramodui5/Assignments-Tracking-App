import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const CopyrightContainer = styled.div`
  padding: 10px 15px 15px 15px;
  line-height: 24px;
  @media (min-width: 1023px) {
    margin: 0 60px;
  }
`;

function Copyright() {
  return (
    <CopyrightContainer className="d-lg-flex justify-content-lg-end">
      <Paragraph>© 2020 Assignment Tracker. </Paragraph>
      <Paragraph> &nbsp; Last Updated 10 Feb 2022.</Paragraph>
    </CopyrightContainer>
  );
}

export default Copyright;
