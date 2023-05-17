import React from 'react';
import styled from 'styled-components';
const TransparentBtn = styled.button`
  background: ${(props) =>
    props.transparent
      ? 'rgba(255,255,255,.13)'
      : 'linear-gradient(93.41deg, #FF6B00 7.25%, #FF9900 116.27%)'};
  border-radius: 8px;
  color: ${(props) =>
    props.transparent ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255,255,255,1)'};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  line-height: ${(props) => (!props.filterBtn ? '32px' : '26px')};
  padding-inline: ${(props) => (!props.filterBtn ? '1.25rem' : '2rem')};
  padding-block: ${(props) => (!props.filterBtn ? '.25rem' : '0.15rem')};
  cursor: pointer;
  font-size: ${(props) => (!props.filterBtn ? '21px' : '17px')};
`;

const TransparentButton = ({ buttonText, transparent, filterBtn, icon }) => {
  return (
    <TransparentBtn
      transparent={transparent}
      filterBtn={filterBtn}
      className='flex items-center gap-3'
    >
      {icon}
      {buttonText}
    </TransparentBtn>
  );
};

export default TransparentButton;
