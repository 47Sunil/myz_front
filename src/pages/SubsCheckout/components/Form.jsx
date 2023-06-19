import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import PinkButton from '../../../components/PinkButton/PinkButton';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import { useCheckoutMutation } from '../../../actions/Checkout';
import { toast } from 'react-hot-toast';

const SignForm = () => {
  const [plan, setPlan] = useState({
    plan_id: 433,
    address_1: 'New Home 1',
    address_2: 'new Hime 2',
    billing_country: 'India',
    billing_state: 'Madhya Pradesh',
    billing_city: 'Bhopal',
    billing_postcode: '239992',
  });
  const { mutateAsync: checkout, data } = useCheckoutMutation();
  const handleSubmit = async (e, plan) => {
    try {
      e.preventDefault();
      await checkout(plan);
      console.log(data, 'form data');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <form
      className='mb-[1.6rem] flex flex-col'
      onSubmit={(e) => handleSubmit(e, plan)}
    >
      <DynamicInputManager
        htmlId='address1'
        label='Street Address 1'
        isRequired={true}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.address_1, setPlan, 'address_1']}
      />
      <DynamicInputManager
        htmlId='address2'
        label='Street Address 2'
        isRequired={false}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.address_2, setPlan, 'address_2']}
      />
      <DynamicInputManager
        htmlId='country'
        label='Country'
        isRequired={true}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.billing_country, setPlan, 'billing_country']}
      />
      <DynamicInputManager
        htmlId='state'
        label='State'
        isRequired={true}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.billing_state, setPlan, 'billing_state']}
      />
      <DynamicInputManager
        htmlId='city'
        label='City'
        isRequired={true}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.billing_city, setPlan, 'billing_city']}
      />
      <DynamicInputManager
        htmlId='pincode'
        label='Pincode'
        isRequired={true}
        multiline={false}
        type='text'
        icon={<LockIcon />}
        states={[plan.billing_postcode, setPlan, 'billing_postcode']}
      />

      <PinkButton text='Continue to Payment' />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        <Link
          to='/accounts/signup'
          className='text-[#bd61ec] cursor-pointer hover:underline'
        >
          <span>All details are encrypted and safe</span>
        </Link>
      </p>
      {/* <div className='px-5 pb-5'>
        <GoToHomeBtn text={'Go Back To Home'} />
      </div> */}
    </form>
  );
};

export default SignForm;
