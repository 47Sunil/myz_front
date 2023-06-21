import React, { useState } from 'react';
import SecondScreenWrapper from '../../components/SecondScreen/SecondScreenWrapper';
import DynamicInputManager from '../../components/DynamicInputManager/DynamicInputManager';
// import TransparentButton from '../../components/TransparentButton/TransparentButton';

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <SecondScreenWrapper>
      <div className=' h-[80%] flex justify-center items-center p-4 z-[10000] relative'>
        <div className='bg-gray-900 w-[50%] h-full rounded-3xl py-8 px-12 flex flex-col justify-center items-center'>
          <DynamicInputManager
            htmlId='name'
            label='Name'
            isRequired={true}
            placeholder='John Doe'
            multiline={false}
            type='text'
            icon={''}
            states={[checkoutData.name, setCheckoutData, 'name']}
          />
          <DynamicInputManager
            htmlId='email'
            label='Email Address'
            isRequired={true}
            placeholder='john@gmail.com'
            multiline={false}
            type='email'
            icon={''}
            states={[checkoutData.email, setCheckoutData, 'email']}
          />
          <DynamicInputManager
            htmlId='phone'
            label='Phone'
            isRequired={true}
            placeholder='999xxxx9999'
            multiline={false}
            type='tel'
            icon={''}
            states={[checkoutData.phone, setCheckoutData, 'phone']}
          />
          <div className='w-full text-white flex justify-between mt-4  px-5 py-3 border-y-2 border-dashed border-gray-500'>
            <p>Myniwa Yoga Template</p>
            <p>Price: Rs 5000</p>
          </div>
          <button className='bg-gradient-landing-orange text-white rounded-lg px-4 py-2 mt-8'>
            Checkout
          </button>
        </div>
      </div>
    </SecondScreenWrapper>
  );
};

export default Checkout;
