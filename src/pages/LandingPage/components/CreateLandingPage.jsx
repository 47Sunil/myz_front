import React, { useEffect, useState } from 'react';
import SecondScreenWrapper from '../../../components/SecondScreen/SecondScreenWrapper';
import star from '../../../assets/images/star2.png';
import templateImage from '../../../assets/images/myzer-template2.png';
import TransparentButton from '../../../components/TransparentButton/TransparentButton';
import {
  AiOutlineSwap,
  AiFillCaretDown,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import SecondScreenForm from '../../../components/SecondScreen/Form';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import DropDown from '../../../components/CustomDropDown/DropDown';
import { Menu } from '@headlessui/react';
import Purchase from '../../../assets/svg/Purchase';
import Lead from '../../../assets/svg/Lead';
import Other from '../../../assets/svg/Other';
import magic from '../../../assets/icons/magic.png';
import razorPayLogo from '../../../assets/icons/razorpay.png';
import { Switch } from '@headlessui/react';
import styled from 'styled-components';
import SolarSvg from '../../../assets/svg/LandingPageSolar';
import { useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CreateLandingPage = () => {
  const [title, setTitle] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState(false);
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('templates');
  const ID = searchParams.get('id');
  const templateData = data?.data.filter((i) => {
    return i._id === ID;
  });
  const navigate = useNavigate();
  if (templateData === undefined) {
    navigate('/landing-pages/home');
    console.log('no template data');
  }
  useEffect(() => {
    window.onbeforeunload = function () {
      return 'Are you sure you want to refresh? All unsaved data will be lost.';
    };
    if (templateData === undefined) {
      navigate('/landing-pages/home');
      console.log('no template data');
    }
  }, []);

  return (
    <>
      {templateData === undefined ? (
        navigate('/landing-pages/home')
      ) : (
        <SecondScreenWrapper>
          <div className='w-full h-full flex items-center justify-center z-10 absolute inset-0'>
            <div className='bg-gradient-landing-blue w-[30vw] h-[80vh] rounded-[63px] overflow-hidden absolute left-[8%] top-[15%]'>
              <img
                src={star}
                alt=''
                className='object-cover h-full w-full'
              />
              <div className='absolute z-30 flex flex-col justify-center items-center inset-0 gap-4 w-full'>
                <h1 className='font-medium text-[25px] leading-[121%] text-white text-center'>
                  Selected Template
                </h1>
                <figure className='mb-8'>
                  <div className='bg-white w-[270px] h-[350px] rounded-3xl '>
                    <img
                      src={templateData[0].image}
                      alt=''
                      className='object-cover object-top w-full h-full rounded-3xl'
                    />
                    <figcaption className='capitalize font-medium text-[14px] leading-[121%] text-white text-center mt-3'>
                      {templateData[0].name}
                    </figcaption>
                  </div>
                </figure>
                <TransparentButton
                  buttonText={'Switch Template'}
                  icon={<AiOutlineSwap />}
                  dark={true}
                />
              </div>
            </div>
            <SecondScreenForm
              headingText={'Create Landing Page'}
              btnText={'Launch Builder'}
              className={
                'w-[62vw] h-[70vh] bg-[#100921] rounded-[22px] z-20 flex flex-col absolute top-[20%] left-[50%] translate-x-[-25%]'
              }
            >
              <div className='py-8 pl-4 flex-grow relative'>
                <div className='absolute right-[-13.4%] top-[50%] translate-y-[-50%] '>
                  <SolarSvg />
                </div>
                <div className='bg-gradient-ai-magic w-[237px] flex items-center gap-3 rounded-b-[16px] p-2 absolute top-0 left-[50%] translate-x-[-50%]'>
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
                  <div className='flex items-center gap-1 '>
                    <img
                      src={magic}
                      alt=''
                    />
                    <p className='text-[18px] text-white'>Enable AI Magic</p>
                  </div>
                </div>
                <div className='pr-[27rem] mt-6'>
                  <DynamicInputManager
                    htmlId='title-name'
                    label='Add a Title to the page'
                    isRequired={true}
                    placeholder={'Type page title here'}
                    states={[title, setTitle]}
                    multiline={false}
                    type={'text'}
                  />
                  <div className='px-5 relative flex items-center mb-4'>
                    <DropDown
                      paymentSelect={paymentSelect}
                      setPaymentSelect={setPaymentSelect}
                    />
                  </div>
                  <p className='text-[rgba(255,255,255,0.67)] text-[15px] font-normal px-5 absolute top-[60%]'>
                    What Exactly you want from this Page
                  </p>
                </div>
              </div>
            </SecondScreenForm>
          </div>
          {paymentSelect && (
            <div className='absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.54)] z-30 flex justify-center items-center'>
              <div className='bg-[#0A031B] rounded-[31px] border border-solid border-[rgba(255,255,255,0.29)] w-[60vw] h-[80vh] p-[34px_68px] overflow-y-scroll'>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-white text-[24px] leading-[121%] font-medium'>
                    Select Payment Gateway
                  </h1>
                  <AiOutlineInfoCircle className='text-white text-[24px] leading-[121%]' />
                </div>
                <hr className='w-full border border-solid border-[rgba(255,255,255,0.38)] my-[24px]' />
                <div className='grid grid-cols-4 gap-8 '>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,255,255,0.31)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'>
                    <button className='bg-gradient-landing-orange text-white text-[41px] leading-[51px] text-center h-[51px] w-[51px] font-medium rounded-full'>
                      +
                    </button>
                    <p className='font-medium text-[14px] leading-[121%] text-[#bebebe] w-full text-center '>
                      Add New Payment Gateway
                    </p>
                  </div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px] relative'>
                    <div className='bg-white p-2 rounded-b-[30px] absolute top-0'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='bg-white p-1 rounded-b-[30px]  invisible'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='w-full text-center'>
                      <p className='text-[14px] text-white leading-[18.9px] font-medium'>
                        Razor Pay
                      </p>
                      <p className='text-[12px] text-white leading-[18.9px] '>
                        (Yomize)
                      </p>
                    </div>
                    <button className='bg-gradient-landing-orange text-white text-[14px] leading-[18.9px] text-center font-medium w-full rounded-[6px] py-1'>
                      Select
                    </button>
                  </div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px] relative'>
                    <div className='bg-white p-2 rounded-b-[30px] absolute top-0'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='bg-white p-1 rounded-b-[30px]  invisible'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='w-full text-center'>
                      <p className='text-[14px] text-white leading-[18.9px] font-medium'>
                        Razor Pay
                      </p>
                      <p className='text-[12px] text-white leading-[18.9px] '>
                        (Yomize)
                      </p>
                    </div>
                    <button className='bg-gradient-landing-orange text-white text-[14px] leading-[18.9px] text-center font-medium w-full rounded-[6px] py-1'>
                      Select
                    </button>
                  </div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px] relative'>
                    <div className='bg-white p-2 rounded-b-[30px] absolute top-0'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='bg-white p-1 rounded-b-[30px]  invisible'>
                      <img
                        src={razorPayLogo}
                        alt=''
                      />
                    </div>
                    <div className='w-full text-center'>
                      <p className='text-[14px] text-white leading-[18.9px] font-medium'>
                        Razor Pay
                      </p>
                      <p className='text-[12px] text-white leading-[18.9px] '>
                        (Yomize)
                      </p>
                    </div>
                    <button className='bg-gradient-landing-orange text-white text-[14px] leading-[18.9px] text-center font-medium w-full rounded-[6px] py-1'>
                      Select
                    </button>
                  </div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'></div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'></div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'></div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'></div>
                  <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px]'></div>
                </div>
              </div>
            </div>
          )}
        </SecondScreenWrapper>
      )}
    </>
  );
};

export default CreateLandingPage;
