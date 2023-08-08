import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PinkButton from '../../../components/PinkButton/PinkButton';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import useSlide from '../../../hooks/useSlideAnimation';
import { useLoginMutation } from '../../../actions/User/Login';
import { toast } from 'react-hot-toast';
import { useUnSubsMutation } from '../../../actions/Unsubscribed';
import { useQueryClient } from 'react-query';

const UnsubscribedForm = () => {
  const [lockFields, setLockFields] = useState(false);
  const { id } = useParams();
  const [subsRequest, setSubsRequest] = useState({
    plan_id: Number(id),
    address_1: 'Rms',
    address_2: 'gfd',
    billing_city: 'Mumbai',
    billing_state: 'Maharashtra',
    billing_postcode: 400086,
    billing_country: 'India',
  });
  //   enum: [
  //     'Active',
  //     'Suspended',
  //     'Cancel Pending',
  //     'Cancelled',
  //     'Inactive',
  //     'Payment Pending',
  //     'Grace Period',
  //   ],

  const { mutate: takeSubs } = useUnSubsMutation();
  const navigate = useNavigate();
  const handleSubsForm = (e) => {
    e.preventDefault();
    handleSubs();
  };

  const handleSubs = async () => {
    try {
      setLockFields(true);
      await takeSubs(subsRequest);
      navigate('/accounts');
      toast.success('Welcome To Myzer');
    } catch (err) {
      setLockFields(false);
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <form
      action=''
      method='POST'
      className='mb-[1.6rem] flex flex-col '
      onSubmit={(e) => handleSubsForm(e)}
    >
      <DynamicInputManager
        htmlId='address_1'
        label='Address 1'
        isRequired={true}
        placeholder='Enter your address'
        multiline={false}
        type='text'
        icon={''}
        states={[subsRequest.address_1, setSubsRequest, 'address_1']}
        lock={lockFields}
      />
      <DynamicInputManager
        htmlId='address_2'
        label='Address 2'
        isRequired={true}
        multiline={false}
        placeholder={'Enter your address'}
        type={'text'}
        icon={''}
        states={[subsRequest.address_2, setSubsRequest, 'address_2']}
        lock={lockFields}
      />
      <div className='flex gap-4 items-center justify-center'>
        <DynamicInputManager
          htmlId='billing_city'
          label='City'
          isRequired={true}
          multiline={false}
          placeholder={'Enter your City'}
          type={'text'}
          icon={''}
          states={[subsRequest.billing_city, setSubsRequest, 'billing_city']}
          lock={lockFields}
          paddingX={false}
        />
        <DynamicInputManager
          htmlId='billing_state'
          label='State'
          isRequired={true}
          multiline={false}
          placeholder={'Enter your State'}
          type={'text'}
          icon={''}
          states={[subsRequest.billing_state, setSubsRequest, 'billing_state']}
          lock={lockFields}
          paddingX={false}
        />
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <DynamicInputManager
          htmlId='billing_country'
          label='Country'
          isRequired={true}
          multiline={false}
          placeholder={'Enter your Country'}
          type={'text'}
          icon={''}
          states={[
            subsRequest.billing_country,
            setSubsRequest,
            'billing_country',
          ]}
          lock={lockFields}
          paddingX={false}
        />
        <DynamicInputManager
          htmlId='billing_postcode'
          label='Postcode'
          isRequired={true}
          multiline={false}
          placeholder={'Enter your Postcode'}
          type={'text'}
          icon={''}
          states={[
            subsRequest.billing_postcode,
            setSubsRequest,
            'billing_postcode',
          ]}
          lock={lockFields}
          paddingX={false}
        />
      </div>

      <PinkButton
        text='Continue To Payment'
        lock={lockFields}
      />
      <p className='mt-4 font-normal text-[16px] leading-8 text-[#9483BC] px-5 pb-5 text-center'>
        All details are encrypted and safe{' '}
      </p>
    </form>
  );
};

export default UnsubscribedForm;
