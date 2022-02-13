import React from 'react';
import styled from 'styled-components';

const ComponentTitle = styled.h2`
  font-size: 2rem;
  color: #4e4e4e;
  background-color: #fff;
  border-bottom: 1px solid #a1a1a1;
  margin: 0;
  font-weight: bold;
  line-height: normal;
  min-height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const PageTitle = (props) => {
  return <ComponentTitle>{props.children}</ComponentTitle>;
};

export default PageTitle;
