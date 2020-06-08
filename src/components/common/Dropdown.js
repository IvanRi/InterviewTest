import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'
//components
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Dropdown = ({ style, items, initialValue, handleChange }) => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    clickOutClose()
    !initialValue && setSelected(items[0])
  }, [initialValue, items]);

  const clickOutClose = () => {
    //event listener para cerrar el drop con un click afuera
    const body = document.getElementsByTagName('body')[0]
    body.addEventListener('click', e => setShowList(false))
  };

  const _handleSelect = item => {
    handleChange(item)
    setSelected(item)
    setShowList(false)
  };

  return <ContentLayout items={items} style={style} showList={showList} >
    <div className='controller' onClick={() => setShowList(!showList)}>
      <div className='label-container'>
        {selected || initialValue}
      </div>
      {
        !showList ?
          <MdKeyboardArrowDown
            style={{
              fontSize: '2rem'
            }}
          /> :
          <MdKeyboardArrowUp
            style={{
              fontSize: '2rem'
            }}
          />
      }
    </div>
    <List
      items={items}
      showList={showList}>
      {
        !!items &&
        items.map((item, i) => <div
          key={i}
          className='item'
          onClick={() => _handleSelect(item)}
        >
          {item}
        </div>
        )
      }
    </List>
  </ContentLayout>
};

const ContentLayout = styled.div`
  position: relative;
  width:15rem;
  font-size: .9rem;
  
  .controller{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label-container{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const List = styled.div`
  overflow:hidden;
  width:100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: height .3s;
  position:absolute;
  left: 0;
  top: 3rem;
  border-radius: .5rem;
  box-shadow: 2px 3px 13px -6px rgba(0,0,0,0.75);;
  background-color: white;
  height: ${ ({ showList, items }) => showList ? `${items.length * 3}rem` : "0px"};
  padding: ${ ({ showList }) => showList ? "1rem 0" : "0"};

  .item{
    min-height: 3rem;
    cursor: pointer;
    width: 100%;
    padding-left: 1rem ;
    display: flex;
    align-items: center;
      &:hover{
      background-color: rgb(65,130,252);
      color: white;
    }
  }
`;

export default Dropdown;
