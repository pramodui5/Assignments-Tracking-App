import React from 'react';
import styled from 'styled-components';

const ComponentTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  background-color: #fff;
  margin: 0;
  font-weight: bold;
  line-height: normal;
  min-height: 50px;
  margin-bottom: 30px;
  text-align: center;
`;

const PageTitle = (props) => {
  return <ComponentTitle>{props.children}</ComponentTitle>;
};

export default PageTitle;
