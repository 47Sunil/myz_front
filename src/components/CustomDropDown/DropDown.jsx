import React, { useState } from 'react';
import styled from 'styled-components';
import Purchase from '../../assets/svg/Purchase';
import Lead from '../../assets/svg/Lead';
import Other from '../../assets/svg/Other';
import { AiFillCaretDown } from 'react-icons/ai';

const DropDownCustom = styled.div`
  background: #2a2439;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 11px;
  padding: 10px 20px;
  color: white;
  width: 92%;
  top: 0.25rem;
  position: absolute;
  z-index: 10;
  min-height: ${(props) => props.expanded && '100px'};
`;
const PlaceHolder = styled.p`
  font-size: 15px;
  font-weight: normal;
  color: ${(props) => (props.expanded ? '#fff' : 'rgba(255, 255, 255, 0.38)')};
  width: 100%;
  height: fit-content;
`;
const Boxes = ({ icon, text, className }) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleActive() {
    setIsClicked(!isClicked);
  }
  return (
    <div className='h-full flex flex-col gap-2'>
      <button
        className={className}
        onClick={handleActive}
      >
        {icon}
        {text}
      </button>
      {isClicked && (
        <p className='font-poppins font-medium bg-[#4e4367] text-[10px] p-[2px_4px] rounded-[7px] text-center text-white'>
          Collect Payments or Sell Digital Products
        </p>
      )}
    </div>
  );
};

const BoxesDetails = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.05)] rounded-[14px] p-3 col-span-2 flex flex-col items-center justify-center gap-4'>
      <input
        type='text'
        placeholder='Set a Price'
        className='bg-[#2A2439] rounded-[11px] border border-solid border-[#4C4759] placeholder:text-[#7B7784] text-white text-[12px] p-2 font-medium w-full'
      />
      <input
        type='text'
        placeholder='Type your product name'
        className='bg-[#2A2439] rounded-[11px] border border-solid border-[#4C4759] placeholder:text-[#7B7784] text-white text-[12px] p-2 font-medium w-full'
      />
    </div>
  );
};

const DropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <DropDownCustom expanded={isExpanded}>
      <div className='flex justify-between w-full h-fit'>
        <PlaceHolder expanded={isExpanded}>Select a Page Goal*</PlaceHolder>
        <button
          onClick={handleClick}
          className='absolute right-6 z-20 top-3'
        >
          <AiFillCaretDown className='text-[#85878c] text-xl' />
        </button>
      </div>
      {isExpanded && (
        <div className='grid grid-cols-3 gap-4 w-full text-white pt-3 min-h-[130px]'>
          <Boxes
            icon={<Purchase />}
            text={'Purchase'}
            className={
              'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-purple h-[7rem] flex flex-col items-center justify-center gap-2 w-full'
            }
          />
          <BoxesDetails />
          {/* <Boxes
            icon={<Lead />}
            text={'Lead'}
            className={
              'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-orange h-[7rem] flex flex-col items-center justify-center gap-2 w-full'
            }
          />
          <Boxes
            icon={<Other />}
            text={'Other'}
            className={
              'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-blue h-[7rem] flex flex-col items-center justify-center gap-2 w-full'
            }
          /> */}
        </div>
      )}
    </DropDownCustom>
  );
};

export default DropDown;
