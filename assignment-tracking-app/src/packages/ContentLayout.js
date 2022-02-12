import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
`;

const ContentLayout = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default ContentLayout;
