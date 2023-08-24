import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 60px;
  min-height: 100vh;
  background: rgb(30, 30, 30);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    background-color: rgba(30, 30, 30, 0.5);
    position: absolute;
    inset: 0;
    z-index: 10;
    height: 100%;
  }
`;
const PurpleDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1072px;
  height: 1072px;
  right: -50%;
  bottom: -50%;
  background-color: rgba(97, 23, 255, 0.57);
  filter: blur(500px);
`;
const RedDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1094px;
  height: 1094px;
  left: -30%;
  top: -65%;
  background-color: rgba(172, 32, 1, 0.8);
  filter: blur(500px);
`;
const BlueDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1225px;
  height: 1225px;
  left: -10%;
  top: -65%;
  background-color: rgba(28, 146, 255, 0.57);
  filter: blur(500px);
`;
const Sidebar = () => {
  return (
    <Wrapper>
      <PurpleDiv />
      <RedDiv />
      <BlueDiv />
      <h1 className='text-white relative z-20 rotate-[-90deg] h-[50px] w-[100vh] text-[36px] whitespace-nowrap font-bold'>
        HELLO - नमस्ते - ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ - নমস্কার - आदाब - प्रणाम - வணக்கம் -
        నమస్కరం
      </h1>
    </Wrapper>
  );
};

export default Sidebar;
