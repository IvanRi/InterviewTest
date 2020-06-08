import React from 'react';
import styled from 'styled-components';

const ContentCard = props => {
  return <ContentLayout {...props}>
    {props.children}
  </ContentLayout>
};

const ContentLayout = styled.div`
  border-radius:.5rem;
  box-shadow: 2px 3px 13px -6px rgba(0,0,0,0.75);
  padding:1rem;
  box-sizing:border-box;
  background-color:white;
`;

export default ContentCard;
