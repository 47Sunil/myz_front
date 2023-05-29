import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import templateImage from '../../../assets/images/myzer-templates.png';
import DropDown from '../../../components/DropDown/DropDown';
import { Menu } from '@headlessui/react';
import { useQuery } from 'react-query';
import { useAllTemplatesData } from '../../../actions/LandingPage';
import { motion, stagger } from 'framer-motion';

const ViewAllTemplatesModal = () => {
  const [isClosed, setIsClosed] = useState(true);
  function handleClick() {
    setIsClosed(!isClosed);
  }
  const [page, setPage] = useState(1);
  const { data, isLoading, isPreviousData, isFetching } =
    useAllTemplatesData(page);
  {
    !isLoading &&
      console.log(data, 'allTemplates', isLoading, 'isLoading or not');
  }
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  return (
    <>
      {isClosed && (
        <div className='fixed w-screen h-screen z-[33333388] bg-[rgba(10,17,24,0.74)] flex justify-center items-center overflow-hidden inset-0'>
          <div className='w-[65vw] h-[80vh] bg-[#0A1118] relative rounded-[9px] overflow-hidden'>
            <div className='h-[50px] bg-white rounded-t-[9px] px-8 py-2 flex justify-between items-center w-full'>
              <h1 className='text-[20px] font-medium capitalize'>
                our premium templates
              </h1>
              <button onClick={handleClick}>
                <FiX className='text-[30px] font-medium' />
              </button>
            </div>
            <div className='w-full h-full px-8 py-6'>
              <div className='flex gap-5 items-center w-full mb-4 '>
                <div className='relative flex flex-grow items-center'>
                  <label
                    htmlFor='search-templates'
                    className='absolute left-4'
                  >
                    <AiOutlineSearch className='text-[#85878c] text-xl' />
                  </label>
                  <input
                    type='text'
                    id='search-templates'
                    className='bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(255,255,255,0.1)] rounded-[13px] h-[50px] text-white w-full  px-10'
                  />
                </div>
                <div className='relative flex items-center'>
                  <label
                    htmlFor='category'
                    className='absolute left-4 z-10'
                  >
                    <AiFillCaretDown className='text-[#85878c] text-xl' />
                  </label>
                  <DropDown
                    menuClass={
                      'bg-[#161D24] border border-solid border-[rgba(255,255,255,0.1)] rounded-[13px] h-[50px] text-white w-[220px] flex justify-center relative'
                    }
                    menuBtnText={'Category'}
                    menuBtnClass={'text-[22px] font-medium'}
                  >
                    <Menu.Items className='absolute top-[50px] z-[20] flex flex-col gap-4 bg-[#161D24] border border-solid border-[rgba(255,255,255,0.1)] rounded-[13px]  text-white w-[220px] p-4 overflow-y-scroll h-[182px]'>
                      <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2'>
                        <button>Course</button>
                      </Menu.Item>
                      <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2'>
                        <button>E-Commerce</button>
                      </Menu.Item>
                      <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2'>
                        <button>SAAS</button>
                      </Menu.Item>
                      <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2'>
                        <button>Webinar</button>
                      </Menu.Item>
                      <Menu.Item className='bg-[rgba(251,251,251,0.22)] rounded-[10px] py-2'>
                        <button>Digital Product</button>
                      </Menu.Item>
                    </Menu.Items>
                  </DropDown>
                </div>
              </div>
              <motion.div
                variants={variants}
                initial='initial'
                animate='animate'
                className='grid grid-cols-landingPage gap-3 h-full overflow-y-scroll pb-[10rem]'
              >
                {!isLoading &&
                  data?.data.map((i) => (
                    <motion.div
                      variants={variants}
                      className='bg-black border border-solid border-[rgba(255,255,255,.15)] rounded-[15px] h-[269px] p-2 flex flex-col items-center relative'
                    >
                      <figure className='w-full h-full'>
                        <img
                          src={i.image}
                          alt=''
                          className='mb-1 w-full h-[180px] object-cover object-top'
                        />
                        <figcaption className='font-medium text-[14px] text-white'>
                          {i.name}
                          <span className='block text-[11px]'>
                            by{' '}
                            <span className='bg-gradient-landing-text text-transparent bg-clip-text'>
                              {i.author}
                            </span>
                          </span>
                        </figcaption>
                      </figure>
                      <div className='bg-gradient-orange-text rounded-full w-[95px] h-[22px] text-white text-center leading-[22px] text-[13px] absolute right-3 top-3'>
                        Featured
                      </div>
                      <div className='text-[#474040] text-[10px] bg-white text-center w-[116px] h-[21px] leading-[21px] uppercase rounded-t-[10px] absolute bottom-0'>
                        {i.description}
                      </div>
                    </motion.div>
                  ))}

                {/* <div className='bg-black border border-solid border-[rgba(255,255,255,.15)] rounded-[15px] h-[269px] p-2 flex flex-col items-center relative'>
                  <figure>
                    <img
                      src={templateImage}
                      alt=''
                      className='mb-1'
                    />
                    <figcaption className='font-medium text-[14px] text-white'>
                      Agency Course Template
                      <span className='block text-[11px]'>
                        by{' '}
                        <span className='bg-gradient-landing-text text-transparent bg-clip-text'>
                          Myzer.ai
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                  <div className='bg-gradient-orange-text rounded-full w-[95px] h-[22px] text-white text-center leading-[22px] text-[13px] absolute right-3 top-3'>
                    Featured
                  </div>
                  <div className='text-[#474040] text-[10px] bg-white text-center w-[116px] h-[21px] leading-[21px] uppercase rounded-t-[10px] absolute bottom-0'>
                    ai ready template
                  </div>
                </div>
                <div className='bg-black border border-solid border-[rgba(255,255,255,.15)] rounded-[15px] h-[269px] p-2 flex flex-col items-center relative'>
                  <figure>
                    <img
                      src={templateImage}
                      alt=''
                      className='mb-1'
                    />
                    <figcaption className='font-medium text-[14px] text-white'>
                      Agency Course Template
                      <span className='block text-[11px]'>
                        by{' '}
                        <span className='bg-gradient-landing-text text-transparent bg-clip-text'>
                          Myzer.ai
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                  <div className='bg-gradient-orange-text rounded-full w-[95px] h-[22px] text-white text-center leading-[22px] text-[13px] absolute right-3 top-3'>
                    Featured
                  </div>
                  <div className='text-[#474040] text-[10px] bg-white text-center w-[116px] h-[21px] leading-[21px] uppercase rounded-t-[10px] absolute bottom-0'>
                    ai ready template
                  </div>
                </div>
                <div className='bg-black border border-solid border-[rgba(255,255,255,.15)] rounded-[15px] h-[269px] p-2 flex flex-col items-center relative'>
                  <figure>
                    <img
                      src={templateImage}
                      alt=''
                      className='mb-1'
                    />
                    <figcaption className='font-medium text-[14px] text-white'>
                      Agency Course Template
                      <span className='block text-[11px]'>
                        by{' '}
                        <span className='bg-gradient-landing-text text-transparent bg-clip-text'>
                          Myzer.ai
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                  <div className='bg-gradient-orange-text rounded-full w-[95px] h-[22px] text-white text-center leading-[22px] text-[13px] absolute right-3 top-3'>
                    Featured
                  </div>
                  <div className='text-[#474040] text-[10px] bg-white text-center w-[116px] h-[21px] leading-[21px] uppercase rounded-t-[10px] absolute bottom-0'>
                    ai ready template
                  </div>
                </div> */}
              </motion.div>
            </div>
            <div className='w-full h-[50px] bg-[#ddd] absolute bottom-0 flex justify-center items-center gap-4'>
              <button
                className='rounded-md px-4 py-1 text-2xl bg-transparent hover:bg-gradient-landing-blue hover:text-white border border-solid border-black hover:border-white transition duration-500'
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
              >
                <MdNavigateBefore />
              </button>
              <p>{page}</p>
              <button
                className='rounded-md px-4 py-1 text-2xl bg-transparent hover:bg-gradient-landing-blue hover:text-white border border-solid border-black hover:border-white transition duration-500'
                onClick={() => {
                  if (!isPreviousData && Math.ceil(data?.totaltemplate / 10)) {
                    setPage((old) => old + 1);
                  }
                }}
                disabled={
                  isPreviousData || page === Math.ceil(data?.totaltemplate / 10)
                }
              >
                <MdNavigateNext />
              </button>
              {isFetching ? <span> Loading...</span> : null}{' '}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewAllTemplatesModal;
