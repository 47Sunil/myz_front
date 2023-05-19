import React, { useState } from 'react';
import DocumentImage1 from '../../assets/images/banner1_landingPage.jpg';
import DocumentImage2 from '../../assets/images/banner2_landingPage.jpg';
import TemplateSlider from './components/TemplateSlider';
import LandingPagesList from './components/LandingPagesList';
import LandingPageListItem from './components/LandingPagesListItem';
import ViewAllTemplatesModal from './components/ViewAllTemplatesModal';
import Banner from './components/Banner';

const LandingPages = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {isOpened && <ViewAllTemplatesModal />}
      <div className=' relative z-[33333] overflow-y-scroll'>
        <Banner />
        <TemplateSlider
          open={isOpened}
          setOpen={setIsOpened}
        />

        <div className='heading-filter-container flex space-between mt-9'>
          <h4 className='text-xl text-white'>Landing pages</h4>
        </div>
        <div className='rounded-xl mt-3 p-4 border border-gray-50/20 flex flex-col gap-4'>
          <LandingPagesList />
          <LandingPageListItem />
        </div>
      </div>
    </>
  );
};

export default LandingPages;
