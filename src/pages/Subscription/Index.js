import React from 'react';
import CommonHolder from './components/CommonHolder';
import { useQueryClient } from 'react-query';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { useAllPlans } from '../../actions/Subscription';
import { GrClose } from 'react-icons/gr';
import { useCheckoutUpgradeMutation } from '../../actions/Checkout';
import { toast } from 'react-hot-toast';

const Index = () => {
  const queryClient = useQueryClient();
  const { user } = queryClient.getQueryData('user');
  const plan = user.subscription.planName;
  const price = user.subscription.amount_paid;
  const subsId = user.subscription.plan_id;
  const [updateSubs, setUpdateSubs] = useState({
    plan_id: '',
    address_1: user.metadata[0].address_1,
    address_2: user.metadata[0].address_2,
    billing_city: user.metadata[0].billing_city,
    billing_state: user.metadata[0].billing_state,
    billing_country: user.metadata[0].billing_country,
    billing_postcode: user.metadata[0].billing_postcode,
  });

  const [enabled, setEnabled] = useState(false);
  const { data } = useAllPlans();
  console.log(data);
  const [modal, setModal] = useState(false);
  // console.log(data);
  const { mutateAsync: upgrade } = useCheckoutUpgradeMutation();
  // console.log(upgradeData, 'onSuccess upgrade');

  const handleSubmit = async (upgradeSubs, id) => {
    console.log(id, 'iddddddddddddd');

    setUpdateSubs((prev) => ({ ...prev, plan_id: id }));
    console.log(upgradeSubs, 'onbnasdajkdajk');

    try {
      await upgrade(upgradeSubs);
      // console.log('first');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {modal && (
        <div className='bg-[rgba(0,0,0,.5)] fixed inset-0 w-screen h-screen z-50 flex justify-center items-center'>
          <div className='bg-[#f2f2f2] w-[50vw] h-[65vh] rounded-2xl p-4 flex flex-col gap-4 items-center relative'>
            <GrClose
              className='text-2xl absolute right-4 top-4 cursor-pointer'
              onClick={() => setModal(!modal)}
            />
            <h1 className='bg-gradient-landing-blue text-transparent bg-clip-text text-[2.5rem] font-semibold'>
              Upgrade Your Plan
            </h1>
            <h2 className='text-[#1d1d1d] text-xl'>
              Current Plan: {user.subscription.planName}{' '}
            </h2>
            <div className='w-full h-full flex flex-col items-center gap-4'>
              <div className='flex gap-3 items-center justify-center'>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className='sr-only'>
                    {!enabled ? 'Monthly' : 'Yearly'}
                  </span>
                  <span
                    className={`${
                      enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <span>{!enabled ? 'Monthly' : 'Yearly'}</span>
              </div>
              {enabled ? (
                <div className=' w-full h-full grid grid-cols-3 gap-3'>
                  {data?.data
                    .filter(
                      (i) =>
                        i.planName !== plan &&
                        i.billing_interval !== 'Monthly' &&
                        i.price > price
                    )
                    .map((i, idx) => (
                      <div
                        className='bg-gradient-landing-purple rounded-2xl w-full h-full flex flex-col items-center justify-between px-2 py-8'
                        key={idx}
                      >
                        <div className='flex flex-col gap-4 items-center'>
                          <h1 className='text-[1.5rem] text-white font-semibold'>
                            {i.planName.split('_')[0]}
                          </h1>
                          <h2 className='text-[1rem] text-white font-semibold'>
                            Rs {i.price}
                          </h2>
                        </div>
                        <button
                          className='bg-gradient-landing-orange text-white font-semibold text-[1rem] px-4 py-2 rounded-lg'
                          onClick={() => handleSubmit(updateSubs, i.id)}
                        >
                          Upgrade
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <div className=' w-full h-full flex gap-3 justify-center items-center '>
                  {data?.data
                    .filter(
                      (i) =>
                        i.planName !== plan &&
                        i.billing_interval !== 'Yearly' &&
                        i.price > price
                    )
                    .map((i, idx) => (
                      <div
                        className='bg-gradient-landing-purple rounded-2xl w-full h-full flex flex-col items-center justify-between px-2 py-8 max-w-[33%]'
                        key={idx}
                      >
                        <div className='flex flex-col gap-4 items-center'>
                          <h1 className='text-[1.5rem] text-white font-semibold'>
                            {i.planName}
                          </h1>
                          <h2 className='text-[1rem] text-white font-semibold'>
                            Rs {i.price}
                          </h2>
                        </div>
                        <button
                          className='bg-gradient-landing-orange text-white font-semibold text-[1rem] px-4 py-2 rounded-lg'
                          onClick={() => handleSubmit(updateSubs, i.id)}
                        >
                          Upgrade
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <CommonHolder
        setModal={setModal}
        modal={modal}
        planName={plan}
        subsId={subsId}
      />
    </>
  );
};

export default Index;
