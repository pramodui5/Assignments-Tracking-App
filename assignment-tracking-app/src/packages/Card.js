import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  max-width: 480px;
  min-width: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
