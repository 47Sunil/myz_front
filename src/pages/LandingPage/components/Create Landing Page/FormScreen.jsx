import React, { useState } from 'react';
import SecondScreenForm from '../../../../components/SecondScreen/Form';
import DynamicInputManager from '../../../../components/DynamicInputManager/DynamicInputManager';
import DropDown from '../../../../components/CustomDropDown/DropDown';
import magic from '../../../../assets/icons/magic.png';
import { Switch } from '@headlessui/react';
import SolarSvg from '../../../../assets/svg/LandingPageSolar';
import { useLandingPageMutation } from '../../../../actions/LandingPage/index';
import AdvanceOptions from './AdvanceOptions';
import { useQuery } from 'react-query';
import { useLandingDomainData } from '../../../../actions/LandingPage/index';
import { motion } from 'framer-motion';
import solar from '../../../../assets/images/solar.png';
import ai from '../../../../assets/images/ai.png';
import star1 from '../../../../assets/images/Star-1.png';
import domainBG from '../../../../assets/images/domainBG.png';
import styled from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';

const Loader = styled.div`
  background: url(${domainBG});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

// * form component
const FormScreen = ({
  paymentSelect,
  setPaymentSelect,
  setPageData,
  pageData,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const domainData = useQuery('domainData', useLandingDomainData);
  const pageMutation = useLandingPageMutation();
  const handleCreatePage = async (data) => {
    await pageMutation.mutateAsync(data);
  };
  const handlePdtName = (e) => {
    const value = e.target.value;
    setPageData((prevState) => ({
      ...prevState,
      metadata: {
        aidata: { ...prevState.metadata.aidata, productName: value },
      },
    }));
  };
  const handleDesc = (e) => {
    const value = e.target.value;
    setPageData((prevState) => ({
      ...prevState,
      metadata: {
        aidata: { ...prevState.metadata.aidata, Description: value },
      },
    }));
  };
  const handleUSP = (e) => {
    const value = e.target.value;
    setPageData((prevState) => ({
      ...prevState,
      metadata: { aidata: { ...prevState.metadata.aidata, USP: value } },
    }));
  };
  const variants = {
    grow: {
      scale: 1,
      transition: { duration: 1 },
    },
    shrink: {
      scale: 0,
      transition: { duration: 1 },
    },
    enter: {
      x: 120,
    },
    exit: {
      x: 0,
    },
    enterai: {
      x: 350,
    },
    exitai: {
      x: 0,
    },
  };
  if (pageMutation.isLoading) {
    return (
      <Loader>
        <GridLoader color='#F87837' />
        <h1 className='text-[#ddd]'>Loading Editor ...</h1>
      </Loader>
    );
  }
  return (
    <SecondScreenForm
      headingText={'Create Landing Page'}
      btnText={!enabled ? 'Launch Builder' : 'Build Landing Page With AI'}
      className={
        'w-[62vw] h-[70vh] bg-[#100921] rounded-[22px] z-20 flex flex-col absolute top-[20%] left-[50%] translate-x-[-25%] overflow-hidden'
      }
      to=''
      onClick={() => handleCreatePage(pageData)}
    >
      <motion.div
        initial={{ scale: 0 }}
        variants={variants}
        animate={enabled ? 'grow' : 'shrink'}
        className='bg-gradient-ai-bg-enabled w-[1500px] h-[1500px] rounded-full absolute z-[-2] left-[-28%] top-[-110%]'
      ></motion.div>

      <div className='py-8 pl-4 flex-grow relative overflow-y-scroll overflow-x-hidden h-full'>
        <motion.div
          initial={{ x: 200 }}
          animate={enabled ? 'enter' : 'exit'}
          variants={variants}
          className='fixed right-[-130px] top-[28%] translate-y-[-50%]'
        >
          <SolarSvg />
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={!enabled ? 'enterai' : 'exitai'}
          variants={variants}
          className='bg-gradient-ai-solar rounded-full w-[300px] h-[300px] fixed right-[-130px] top-[23%] translate-y-[-50%] z-20'
        >
          <motion.div className='bg-[#1D0A44] rounded-full w-[150px] h-[150px] absolute left-[-75px] top-[75px] '>
            <img
              src={solar}
              alt=''
            />
            <img
              src={ai}
              alt=''
              className='absolute top-[-9px] left-[-4px] scale-[.6]'
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
            className='border-2 border-solid border-[rgba(250,239,255,0.08)] w-[250px] h-[250px] rounded-full absolute top-[1.5rem] left-[-8rem]'
          >
            <motion.img
              src={star1}
              alt=''
              className='absolute left-11'
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
            />
            <motion.img
              src={star1}
              alt=''
              className='absolute left-[-5px] top-[10rem]'
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
            />
            <motion.img
              src={star1}
              alt=''
              className='absolute right-[0.5rem] top-8'
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
            />
            <motion.img
              src={star1}
              alt=''
              className='absolute right-[3rem] bottom-[0px]'
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
            />
          </motion.div>
        </motion.div>
        <div
          className={`${
            !enabled ? 'bg-gradient-ai-magic' : 'bg-[#100921]'
          } w-[250px] flex items-center gap-3 rounded-b-[16px] p-2 fixed top-[85px] left-[50%] translate-x-[-50%] z-50`}
        >
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`bg-white
          relative inline-flex h-[14px] w-[34px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 drop-shadow-lg`}
          >
            <span
              aria-hidden='true'
              className={`${
                enabled
                  ? 'translate-x-4 translate-y-[-2.5px] bg-gradient-ai-magic-toggle'
                  : 'translate-x-0 translate-y-[-2.5px] bg-[#100921]'
              }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full  shadow-lg ring-0 transition-all duration-200 ease-in-out`}
            />
          </Switch>
          <div className='flex items-center gap-1'>
            <img
              src={magic}
              alt=''
            />
            {enabled ? (
              <p className='text-[18px] text-white'>Disable AI Magic</p>
            ) : (
              <p className='text-[18px] text-white'>Enable AI Magic</p>
            )}
          </div>
        </div>
        <div className='pr-[27rem] mt-6'>
          <DynamicInputManager
            htmlId='title-name'
            label='Add a Title to the page'
            isRequired={true}
            placeholder={'Type page title here'}
            states={[pageData.funnelName, setPageData, 'funnelName']}
            multiline={false}
            type={'text'}
          />
          <div className='px-5 relative flex items-center mb-4'>
            <DropDown
              paymentSelect={paymentSelect}
              setPaymentSelect={setPaymentSelect}
              setPageData={setPageData}
              pageData={pageData}
            />
          </div>
          <p className='text-[rgba(255,255,255,0.67)] text-[15px] font-normal px-5 mt-[5rem]'>
            What Exactly you want from this Page
          </p>
        </div>
        <div className=' w-[51%] pl-[20px]'>
          <p className=' my-[10px] text-white'>Advance Options</p>
          <div className='flex justify-between items-center mb-[8px]'>
            {' '}
            <AdvanceOptions
              label={'Custom Domain'}
              id={'customDomain'}
              isChecked={isChecked1}
              setIsChecked={setIsChecked1}
            />{' '}
            {isChecked1 && (
              <select
                name='custom_domain'
                id='custom_domain'
                className='h-8 px-4 bg-[#2A2439] text-[#7B7784] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer w-[60%]'
                value={'Select your Custom Domain'}
                onChange={(e) =>
                  setPageData((prevState) => ({
                    ...prevState,
                    domain: e.target.value,
                  }))
                }
              >
                <option
                  hidden
                  value='select a custom domain'
                >
                  Select your Custom Domain
                </option>
                {!domainData.isLoading &&
                  domainData?.data.data.map((i) => {
                    return <option value={i._id}>{i.domain_name}</option>;
                  })}
              </select>
            )}
          </div>
          <div className='flex justify-between items-center mb-[8px] '>
            {' '}
            <AdvanceOptions
              label={'Redirect After Payment'}
              id={'redirect'}
              isChecked={isChecked2}
              setIsChecked={setIsChecked2}
            />{' '}
            {isChecked2 && (
              <input
                type='text'
                className='h-8 px-4 bg-[#2A2439] text-[#b2adbe] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer placeholder:text-[#7B7784] w-[60%] focus:outline-none focus:border-white'
                placeholder='URL To Redirect'
              />
            )}
          </div>
          <div className='flex justify-between items-start mb-[20px]'>
            {' '}
            <AdvanceOptions
              label={'Show Custom Message After Payment'}
              id={'customMssg'}
              isChecked={isChecked3}
              setIsChecked={setIsChecked3}
            />{' '}
            {isChecked3 && (
              <textarea
                type='text'
                className='px-4 bg-[#2A2439] text-[#b2adbe] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer placeholder:text-[#7B7784] w-[60%] focus:outline-none focus:border-white resize-none h-[150px] overflow-y-scroll py-2'
                placeholder='Type your message'
              />
            )}
          </div>
        </div>
        {enabled && (
          <div className=' w-[51%] pl-[20px]'>
            <p className=' my-[10px] text-white'>AI Options</p>
            <div className='flex justify-between items-center mb-[8px]'>
              {' '}
              <label
                htmlFor='productName'
                className='text-white text-[12px] cursor-pointer'
              >
                Product Name
              </label>
              <input
                type='text'
                id='productName'
                className='h-8 px-4 bg-[#2A2439] text-[#b2adbe] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer placeholder:text-[#7B7784] w-[60%] focus:outline-none focus:border-white'
                placeholder='Product Name'
                onChange={(e) => handlePdtName(e)}
              />
            </div>
            <div className='flex justify-between items-start mb-[8px] '>
              {' '}
              <label
                htmlFor='description'
                className='text-white text-[12px] cursor-pointer'
              >
                Description
              </label>
              <textarea
                type='text'
                id='description'
                className='px-4 bg-[#2A2439] text-[#b2adbe] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer placeholder:text-[#7B7784] w-[60%] focus:outline-none focus:border-white resize-none h-[150px] overflow-y-scroll py-2'
                placeholder='Describe your product'
                onChange={(e) => handleDesc(e)}
              />
            </div>
            <div className='flex justify-between items-center mb-[20px]'>
              <label
                htmlFor='USP'
                className='text-white text-[12px] cursor-pointer'
              >
                USP
              </label>
              <input
                type='text'
                id='USP'
                className='h-8 px-4 bg-[#2A2439] text-[#b2adbe] border border-solid border-[#4C4759] rounded-[11px] cursor-pointer placeholder:text-[#7B7784] w-[60%] focus:outline-none focus:border-white'
                placeholder='USP of the product'
                onChange={(e) => handleUSP(e)}
              />
            </div>
          </div>
        )}
      </div>
    </SecondScreenForm>
  );
};

export default FormScreen;
