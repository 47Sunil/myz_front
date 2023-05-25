import React, { useState } from 'react';
import styled from 'styled-components';
import Purchase from '../../assets/svg/Purchase';
import Lead from '../../assets/svg/Lead';
import Other from '../../assets/svg/Other';
import { AiFillCaretDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { delay } from 'q';

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
const Boxes = ({ icon, text, className, expanded, setIsBoxClicked }) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleActive() {
    setIsClicked(!isClicked);
    setIsBoxClicked(isClicked);
  }
  const variants = {
    expanded: {
      opacity: 1,
      x: 0,
    },
    shrinked: {
      opacity: 0,
      x: -140,
    },
  };
  return (
    <div className='h-fit flex flex-col gap-2 overflow-hidden'>
      <motion.button
        className={className}
        onClick={handleActive}
        variants={variants}
        initial={{ opacity: 0, x: -140 }}
        animate={expanded ? 'expanded' : 'shrinked'}
        transition={{ duration: 1 }}
      >
        {icon}
        {text}
      </motion.button>
      {/* {isClicked && (
        <p className='font-poppins font-medium bg-[#4e4367] text-[10px] p-[2px_4px] rounded-[7px] text-center text-white'>
          Collect Payments or Sell Digital Products
        </p>
      )} */}
    </div>
  );
};

const BoxesDetails = ({
  expanded,
  paymentSelect,
  setPaymentSelect,
  setPageData,
  pageData,
}) => {
  const variants = {
    expanded: {
      opacity: 1,
      x: 0,
    },
    shrinked: {
      opacity: 0,
      x: 140,
    },
  };
  const handleClick = () => {
    setPaymentSelect(!paymentSelect);
  };
  const handleChangePrice = (e) => {
    const value = e.target.value;
    setPageData((prevState) => ({ ...prevState, price: value }));
  };
  const handleChangePdtName = (e) => {
    const value = e.target.value;
    setPageData((prevState) => ({ ...prevState, name: value }));
  };
  return (
    <motion.div
      variants={variants}
      initial={{ opacity: 0, x: 140 }}
      animate={expanded ? 'expanded' : 'shrinked'}
      transition={{ duration: 1 }}
      className='bg-[rgba(255,255,255,0.05)] rounded-[14px] p-3 col-span-2 flex flex-col items-center justify-center gap-4'
    >
      <input
        type='text'
        placeholder='Set a Price'
        className='bg-[#2A2439] rounded-[11px] border border-solid border-[#4C4759] placeholder:text-[#7B7784] text-white text-[12px] p-2 font-medium w-full focus:outline-none focus:border-white'
        onChange={(e) => handleChangePrice(e)}
        value={pageData.price}
      />
      <input
        type='text'
        placeholder='Type your product name'
        className='bg-[#2A2439] rounded-[11px] border border-solid border-[#4C4759] placeholder:text-[#7B7784] text-white text-[12px] p-2 font-medium w-full focus:outline-none focus:border-white'
        onChange={(e) => handleChangePdtName(e)}
        value={pageData.name}
      />
      <button
        className='bg-[#2A2439] rounded-[11px] border border-solid border-[#4C4759] text-[#7B7784] text-[12px] p-2 font-medium w-full hover:bg-gradient-landing-purple hover:text-white transition duration-500 hover:border-white'
        onClick={handleClick}
      >
        Select your payment gateway
      </button>
    </motion.div>
  );
};

const DropDown = ({
  paymentSelect,
  setPaymentSelect,
  displayModal,
  setDisplayModal,
  setPageData,
  pageData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  const variants = {
    rotate: {
      rotate: 0,
      transition: { duration: 0.5 },
    },
    stop: {
      rotate: 180,
      transition: { duration: 0.5 },
    },
    expanded: {
      height: '210px',
    },
    shrinked: {
      height: '45px',
    },
  };

  return (
    <motion.div
      className='bg-[#2a2439] border border-solid border-[rgba(255,255,255,0.16)] rounded-[11px] p-[10px_20px] text-white w-[92%] absolute top-1 z-10'
      variants={variants}
      animate={isExpanded ? 'expanded' : 'shrinked'}
    >
      <div className='flex justify-between w-full h-fit'>
        <PlaceHolder
          expanded={isExpanded}
          onClick={handleClick}
          className='cursor-pointer select-none'
        >
          Select a Page Goal*
        </PlaceHolder>
        <motion.button
          onClick={handleClick}
          className='absolute right-6 z-20 top-3'
          variants={variants}
          initial={{ rotate: 0 }}
          animate={isExpanded ? 'rotate' : 'stop'}
        >
          <AiFillCaretDown className='text-[#85878c] text-xl rotate-180 transition duration-500' />
        </motion.button>
      </div>
      {isExpanded && (
        <div className='grid grid-cols-3 gap-4 w-full text-white pt-1 min-h-[130px] items-center overflow-hidden'>
          <Boxes
            icon={<Purchase />}
            text={'Purchase'}
            className={
              'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-purple min-h-[7.5rem] flex flex-col items-center justify-center gap-2 w-full'
            }
            expanded={isExpanded}
          />
          <BoxesDetails
            expanded={isExpanded}
            setPaymentSelect={setPaymentSelect}
            paymentSelect={paymentSelect}
            displayModal={displayModal}
            setDisplayModal={setDisplayModal}
            setPageData={setPageData}
            pageData={pageData}
          />
          {/* {isBoxClicked && (
            <Boxes
              icon={<Lead />}
              text={'Lead'}
              className={
                'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-orange  flex flex-col items-center justify-center gap-2 w-full'
              }
              expanded={isExpanded}
              setIsBoxClicked={setIsBoxClicked}
            />
          )}
          {isBoxClicked && (
            <Boxes
              icon={<Other />}
              text={'Other'}
              className={
                'rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4 bg-gradient-add-page-blue  flex flex-col items-center justify-center gap-2 w-full'
              }
              expanded={isExpanded}
              setIsBoxClicked={setIsBoxClicked}
            />
          )} */}
        </div>
      )}
    </motion.div>
  );
};

export default DropDown;
