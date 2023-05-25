import React, { useEffect, useState } from 'react';
import SecondScreenWrapper from '../../../components/SecondScreen/SecondScreenWrapper';
import star from '../../../assets/images/star2.png';
import templateImage from '../../../assets/images/myzer-template2.png';
import TransparentButton from '../../../components/TransparentButton/TransparentButton';
import { AiOutlineSwap, AiFillCaretDown } from 'react-icons/ai';
import SecondScreenForm from '../../../components/SecondScreen/Form';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import DropDown from '../../../components/CustomDropDown/DropDown';
import { Menu } from '@headlessui/react';
import Purchase from '../../../assets/svg/Purchase';
import Lead from '../../../assets/svg/Lead';
import Other from '../../../assets/svg/Other';
import magic from '../../../assets/icons/magic.png';
import { Switch } from '@headlessui/react';
import styled from 'styled-components';
import SolarSvg from '../../../assets/svg/LandingPageSolar';
import { useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CreateLandingPage = () => {
  const [title, setTitle] = useState('');
  const [enabled, setEnabled] = useState(false);
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
                    {/* <DropDown
                  menuClass={
                    'bg-[rgba(255,255,255,0.16)] border border-solid border-[rgba(255,255,255,0.16)] rounded-[11px] p-[10px_20px] text-white w-full flex relative'
                  }
                  menuBtnText={'Select a Page Goal*'}
                  menuBtnClass={'text-[15px] text-[rgba(255,255,255,0.38)]'}
                >
                  <Menu.Items className='absolute top-[50px] z-[20] grid grid-cols-3 gap-4 bg-[#2A2439] border border-solid border-[rgba(255,255,255,0.1)] rounded-[13px]  text-white w-full p-3 left-0'>
                    <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4'>
                      <TooltipCard className='flex-grow bg-gradient-add-page-purple flex justify-center items-center'>
                        <TooltipText>
                          <button className='flex flex-col  items-center justify-center   gap-2'>
                            <Purchase />
                            Purchase
                          </button>
                        </TooltipText>
                        <TooltipBox>
                          Collect Payments or Sell Digital Products
                        </TooltipBox>
                      </TooltipCard>
                    </Menu.Item>
                    <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4'>
                      <TooltipCard className='flex-grow bg-gradient-add-page-orange flex justify-center items-center'>
                        <TooltipText>
                          <button className='flex flex-col  items-center justify-center p-4 py-5  gap-2'>
                            <Lead />
                            Lead
                          </button>
                        </TooltipText>
                        <TooltipBox>
                          Collect Payments or Sell Digital Products
                        </TooltipBox>
                      </TooltipCard>
                    </Menu.Item>
                    <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2 hover:outline hover:outline-1 hover:outline-white hover:outline-offset-4'>
                      <TooltipCard className='flex-grow bg-gradient-add-page-blue flex justify-center items-center'>
                        <TooltipText>
                          <button className='flex flex-col  items-center justify-center p-4 py-5  gap-2'>
                            <Other />
                            Other
                          </button>
                        </TooltipText>
                        <TooltipBox>
                          Collect Payments or Sell Digital Products
                        </TooltipBox>
                      </TooltipCard>
                    </Menu.Item>
                    <Menu.Item>
                      <p className='text-white font-medium bg-[#4e4367] text-[10px] p-[2px_4px] rounded-[7px] text-center'>
                        Collect Payments or Sell Digital Products
                      </p>
                    </Menu.Item>
                    <Menu.Item>
                      <p className='text-white font-medium bg-[#4e4367] text-[10px] p-[2px_4px] rounded-[7px] text-center'>
                        Collect Payments or Sell Digital Products
                      </p>
                    </Menu.Item>
                    <Menu.Item>
                      <p className='text-white font-medium bg-[#4e4367] text-[10px] p-[2px_4px] rounded-[7px] text-center'>
                        Collect Payments or Sell Digital Products
                      </p>
                    </Menu.Item>
                  </Menu.Items>
                </DropDown> */}
                    <DropDown />
                  </div>
                  <p className='text-[rgba(255,255,255,0.67)] text-[15px] font-normal px-5 absolute top-[60%]'>
                    What Exactly you want from this Page
                  </p>
                </div>
              </div>
            </SecondScreenForm>
          </div>
        </SecondScreenWrapper>
      )}
    </>
  );
};

export default CreateLandingPage;
