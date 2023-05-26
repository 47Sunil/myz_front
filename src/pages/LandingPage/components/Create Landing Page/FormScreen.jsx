import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import SecondScreenForm from '../../../../components/SecondScreen/Form';
import DynamicInputManager from '../../../../components/DynamicInputManager/DynamicInputManager';
import DropDown from '../../../../components/CustomDropDown/DropDown';
import magic from '../../../../assets/icons/magic.png';
import { Switch } from '@headlessui/react';
import SolarSvg from '../../../../assets/svg/LandingPageSolar';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { useLandingDomainData } from '../../../../actions/LandingPage';
import { useLandingPageMutation } from '../../../../actions/LandingPage/index';
// * form component
const FormScreen = ({
  paymentSelect,
  setPaymentSelect,
  setPageData,
  pageData,
}) => {
  const [enabled, setEnabled] = useState(false);
  const domainData = useQuery('domainData', useLandingDomainData);
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
  const [isExpanded, setIsExpanded] = useState(false);
  const pageMutation = useLandingPageMutation();
  const handleCreatePage = async (data) => {
    await pageMutation.mutateAsync(data);
  };
  return (
    <SecondScreenForm
      headingText={'Create Landing Page'}
      btnText={'Launch Builder'}
      className={
        'w-[62vw] h-[70vh] bg-[#100921] rounded-[22px] z-20 flex flex-col absolute top-[20%] left-[50%] translate-x-[-25%] overflow-hidden'
      }
      to=''
      onClick={() => handleCreatePage(pageData)}
    >
      <div className='py-8 pl-4 flex-grow relative overflow-y-scroll overflow-x-hidden h-full'>
        <div className='absolute right-[-13.4%] top-[50%] translate-y-[-50%] '>
          <SolarSvg />
        </div>
        <div className='bg-gradient-ai-magic w-[250px] flex items-center gap-3 rounded-b-[16px] p-2 absolute top-0 left-[50%] translate-x-[-50%]'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${!enabled ? 'bg-white' : 'bg-[#100921]'}
          relative inline-flex h-[14px] w-[34px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 drop-shadow-lg`}
          >
            <span
              aria-hidden='true'
              className={`${
                enabled
                  ? 'translate-x-4 translate-y-[-2.5px]'
                  : 'translate-x-0 translate-y-[-2.5px]'
              }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-gradient-ai-magic-toggle shadow-lg ring-0 transition duration-200 ease-in-out`}
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
          <p className='text-[rgba(255,255,255,0.67)] text-[15px] font-normal px-5 absolute top-[60%]'>
            What Exactly you want from this Page
          </p>
        </div>
        <div className=' w-[51%] absolute top-[280px] px-[20px]'>
          <div className='flex justify-between items-center'>
            <p className=' py-[10px] text-white'>Advance Options</p>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className='absolute right-6 z-20 top-3'
              variants={variants}
              initial={{ rotate: 0 }}
              animate={isExpanded ? 'rotate' : 'stop'}
            >
              <AiFillCaretDown className='text-[#85878c] text-xl rotate-180 transition duration-500' />
            </motion.button>
          </div>
          <div className='flex gap-4 '>
            <input
              type='checkbox'
              id='customDomain'
              className='cursor-pointer'
            />
            <label
              htmlFor='customDomain'
              className='text-white text-[12px]'
            >
              Custom Domain
            </label>
            <select
              name='customDomain'
              id='customDomain'
              className='h-5 px-4'
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
                custom domain
              </option>
              {!domainData.isLoading &&
                domainData?.data.data.map((i) => {
                  return <option value={i._id}>{i.domain_name}</option>;
                })}
            </select>
          </div>
          <div className='flex gap-4'>
            <input
              type='checkbox'
              id='redirectAfterPayment'
            />
            <label
              htmlFor='redirectAfterPayment'
              className='text-white text-[12px]'
            >
              Redirect After Payment
            </label>
            <input
              type='text'
              placeholder='Enter url to redirect after payment'
              className='h-5 px-4'
              onChange={(e) =>
                setPageData((prevState) => ({
                  ...prevState,
                  redirectPage: e.target.value,
                }))
              }
            />
          </div>
          <div className='flex gap-4'>
            <input
              type='checkbox'
              id='customMessage'
            />
            <label
              htmlFor='customMessage'
              className='text-white text-[12px]'
            >
              Show Custom Message After Payment
            </label>
            <textarea
              type='text'
              placeholder='Enter custom message'
              className='h-5 px-4'
              onChange={(e) =>
                setPageData((prevState) => ({
                  ...prevState,
                  customMessage: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </SecondScreenForm>
  );
};

export default FormScreen;
