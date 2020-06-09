import React from 'react';
import styled from 'styled-components';
//components
import CercleLoader from './CercleLoader'

const ContentCard = props => {
  const { loading } = props
  return <ContentLayout {...props}>
    {loading && <div className='is-loading'><CercleLoader /></div>}
    {props.children}
  </ContentLayout>
};

const ContentLayout = styled.div`
  position:relative;
  border-radius:.5rem;
  box-shadow: 2px 3px 13px -6px rgba(0,0,0,0.75);
  padding:1rem;
  box-sizing:border-box;
  background-color:white;
  overflow:hidden;

  .is-loading{
    background-color:#80808040;
    z-index:2;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ContentCard;
