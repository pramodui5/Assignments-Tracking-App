import React from 'react';
import styled from 'styled-components';

const ContainerFluid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Container = (props) => {
  return <ContainerFluid>{props.children}</ContainerFluid>;
};

export default Container;
