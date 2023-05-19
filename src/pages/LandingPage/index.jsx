import React, { useState } from 'react';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import TemplateSlider from './components/TemplateSlider';
import LandingPagesList from './components/LandingPagesList';
import LandingPageListItem from './components/LandingPagesListItem';
import ViewAllTemplatesModal from './components/ViewAllTemplatesModal';
import Banner from './components/Banner';
import FilterIcon from '../../assets/svg/FilterIcon';
import Bitmoji from '../../assets/images/bitmoji_landingpage.png';
import { useParams } from 'react-router-dom';
import CreateLandingPage from './components/CreateLandingPage';

const LandingPages = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { method } = useParams();
  return (
    <>
      {method === 'home' ? (
        <div>
          {isOpened && <ViewAllTemplatesModal />}
          <div className=' relative z-[33333] overflow-y-scroll'>
            <Banner />
            <TemplateSlider
              open={isOpened}
              setOpen={setIsOpened}
            />

            <div className='heading-filter-container flex justify-between mt-4'>
              <h4 className='text-xl text-white'>Landing pages</h4>
              <TransparentButton
                buttonText={'Filter'}
                transparent={true}
                filterBtn={true}
                icon={<FilterIcon />}
              />
            </div>
            {isEmpty ? (
              <div className='rounded-xl mt-3 py-14 border w-full border-gray-50/20 flex items-center gap-16 bg-[rgba(255,255,255,.1)]'>
                <div className='bg-[#1e2833] w-[500px] h-[200px] rounded-r-[300px] relative'>
                  <img
                    src={Bitmoji}
                    alt=''
                    className=' h-[120%] absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]'
                  />
                </div>
                <div className='flex flex-col justify-center w-[40%]'>
                  <h2 className='uppercase text-white text-[30px] leading-[58px] tracking-[0.04em] font-semibold'>
                    {' '}
                    no landing page found
                  </h2>
                  <p className='capitalize text-[22px] leading-[45px] tracking-[0.04em] text-[#D1D1D1]'>
                    Select A Template to Create a Landing page in 7 Minutes
                  </p>
                </div>
              </div>
            ) : (
              <div className='rounded-xl mt-3 p-4 border border-gray-50/20 flex flex-col gap-4  bg-[rgba(255,255,255,.1)]'>
                <LandingPagesList />
                <LandingPageListItem />
              </div>
            )}
          </div>
        </div>
      ) : (
        <CreateLandingPage />
      )}
    </>
  );
};

export default LandingPages;
