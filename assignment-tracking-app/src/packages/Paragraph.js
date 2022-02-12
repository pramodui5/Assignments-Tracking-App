import React from 'react';
import styled from 'styled-components';

const Paratext = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  margin: 0;
`;

function Paragraph(props) {
  return <Paratext>{props.children}</Paratext>;
}

export default Paragraph;
