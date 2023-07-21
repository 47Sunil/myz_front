import React from 'react';
import { motion } from 'framer-motion';
import useSlide from '../../hooks/useSlideAnimation';
import GoToHomeBtn from '../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';

const FormLeft = ({
  logo,
  heading,
  headingIcon,
  form,
  isOtpScreen,
  children,
}) => {
  const { isChanged } = useSlide();
  console.log(heading);
  return (
    <>
      {!isChanged ? (
        <motion.div
          initial={{ x: '-120%' }}
          animate={{ x: 0 }}
          className='my-0 mx-auto w-[75%] '
        >
          <img
            className='logo_img scale-75 mt-[-20px] mb-[-30px]'
            alt='logo'
            src={logo}
          />
          <div>
            <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
              <h2 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
                {heading}
              </h2>
              {Object.keys(isOtpScreen).length === 0 && (
                <img
                  className='h-[40px] w-[40px]'
                  src={headingIcon}
                  alt='rocket'
                />
              )}
            </div>
            {children}
          </div>
          <Link to='/accounts/signin'>
            <GoToHomeBtn />
          </Link>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-120%' }}
          className='my-0 mx-auto w-[75%] '
        >
          <img
            className='logo_img scale-75 mt-[-20px] mb-[-30px]'
            alt='logo'
            src={logo}
          />
          <div>
            <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
              <h2 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
                {heading}
              </h2>
              <img
                className='h-[40px] w-[40px]'
                src={headingIcon}
                alt='rocket'
              />
            </div>
            {form}
          </div>
          <Link to='/accounts/signin'>
            <GoToHomeBtn />
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default FormLeft;
