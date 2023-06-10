import { useState, useEffect } from 'react';
import { ContentItem } from './ProfileCommon';
import { useQuery, useQueryClient } from 'react-query';
import {
  useAccountData,
  useChangePasswordMutation,
} from '../../../actions/User/Accounts';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
const ChangePasswordModal = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AccountDetails = () => {
  const [modal, setModal] = useState(false);
  const [updatePassword, setUpdatePassword] = useState({
    oldPass: '',
    newPass: '',
    cnfPass: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const handleChangePassword = async () => {
    try {
      if (
        updatePassword.oldPass === '' ||
        updatePassword.newPass === '' ||
        updatePassword.cnfPass === ''
      ) {
        toast.error('Password cannot be empty');
      } else if (updatePassword.oldPass === updatePassword.newPass) {
        toast.error('New password cannot be same as old password');
      } else if (updatePassword.newPass !== updatePassword.cnfPass) {
        toast.error('New passwords do not match');
      } else {
        const res = await changePassword({
          oldPassword: updatePassword.oldPass,
          newPassword: updatePassword.newPass,
        });
        toast.success(res.message);
        setModal(!modal);
      }
    } catch (error) {
      toast.error(`${error.response.data.message} entered`);
    }
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  const { isLoading, mutateAsync: changePassword } =
    useChangePasswordMutation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('user');
  const [fieldChanges, setFieldChanges] = useState({
    id: data?.user?.userId,
    name: data?.user?.name,
    email: data?.user?.email,
    phone: data?.user?.phone,
    joiningDate: data?.user?.subscription?.start_date,
    address: data?.user?.metadata[0]?.address_1,
    country: data?.user?.metadata[0]?.billing_country,
    state: data?.user?.metadata[0]?.billing_state,
    city: data?.user?.metadata[0]?.billing_city,
    pincode: data?.user?.metadata[0]?.billing_postcode,
    gst: '',
  });
  console.log(fieldChanges);

  function convertDate(date) {
    const newFormatDate = new Date(date);
    const day = newFormatDate.getDate().toString().padStart(2, '0');
    const monthIndex = (newFormatDate.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const year = newFormatDate.getFullYear().toString();
    const formattedDate = `${day}-${monthIndex}-${year}`;
    return formattedDate;
  }
  return (
    <div className='p-7 grid grid-cols-3 gap-9'>
      <div className='pb-3 flex flex-row flex-wrap justify-between gap-2'>
        <h4 className='text-md mb-3 w-full'>General Details</h4>
        <ContentItem
          label='Name'
          value={fieldChanges.name}
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='name'
          id={fieldChanges.id}
          fieldChanges={fieldChanges}
        />
        <ContentItem
          label='Email'
          value={fieldChanges.email}
          id={fieldChanges.id}
        />
        <ContentItem
          label='Phone'
          value={fieldChanges.phone}
          id={fieldChanges.id}
        />
        <ContentItem
          label='Joining Date'
          value={convertDate(fieldChanges.joiningDate)}
          id={fieldChanges.id}
        />
      </div>
      <div className='pb-3 flex flex-row flex-wrap justify-between gap-2'>
        <h4 className='text-md mb-3 w-full'>Billing Details</h4>
        <ContentItem
          label='Street Address'
          value={fieldChanges.address}
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='address'
          id={fieldChanges.id}
        />
        <ContentItem
          label='Country'
          value={fieldChanges.country}
          width='w-[48%]'
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='country'
          id={fieldChanges.id}
        />
        <ContentItem
          label='State'
          value={fieldChanges.state}
          width='w-[48%]'
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='state'
          id={fieldChanges.id}
        />
        <ContentItem
          label='City'
          value={fieldChanges.city}
          width='w-[48%]'
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='city'
          id={fieldChanges.id}
        />
        <ContentItem
          label='Pincode'
          value={fieldChanges.pincode}
          width='w-[48%]'
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='pincode'
          id={fieldChanges.id}
        />
        <ContentItem
          label='GST Number'
          value={fieldChanges.gst}
          isEditable={false}
          setFieldChanges={setFieldChanges}
          stateKey='gst'
          id={fieldChanges.id}
        />
      </div>
      <div className='bg-gray-100/70 rounded-lg'>
        <h4 className='text-center text-md p-4'>Quick Actions</h4>
        <button
          className='cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between'
          onClick={toggleModal}
        >
          Change Password
          <div className='bg-gray-200 py-1 px-4 text-lg rounded'>&gt;</div>
        </button>
        <Link
          to='/subscription'
          className=' mt-4 cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between'
        >
          Check Subscription
          <div className='bg-gray-200 py-1 px-4 text-lg rounded'>&gt;</div>
        </Link>
      </div>
      {modal && (
        <ChangePasswordModal>
          <div className='min-w-[400px] w-[50vw] flex flex-col h-[55vh] bg-[#ddd] rounded-2xl overflow-hidden'>
            <div className='min-h-[50px] w-full bg-gradient-landing-blue flex justify-between px-4 py-2 items-center text-white rounded-t-2xl'>
              <h2>Change Password</h2>
              <RiCloseLine
                className='text-2xl cursor-pointer'
                onClick={toggleModal}
              />
            </div>
            <div className=' w-full h-full rounded-b-2xl py-4 px-8 flex justify-center items-center flex-col gap-4'>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='oldPassword'>Old Password</label>
                <input
                  type='password'
                  id='oldPassword'
                  className='bg-[rgba(255,255,255,.5)] px-3 py-1 rounded-lg '
                  onChange={(e) =>
                    setUpdatePassword((prev) => ({
                      ...prev,
                      oldPass: e.target.value,
                    }))
                  }
                />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='newPassword'>New Password</label>
                <input
                  type='password'
                  id='newPassword'
                  className='bg-[rgba(255,255,255,.5)] px-3 py-1 rounded-lg '
                  onChange={(e) =>
                    setUpdatePassword((prev) => ({
                      ...prev,
                      newPass: e.target.value,
                    }))
                  }
                />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  className='bg-[rgba(255,255,255,.5)] px-3 py-1 rounded-lg '
                  onChange={(e) =>
                    setUpdatePassword((prev) => ({
                      ...prev,
                      cnfPass: e.target.value,
                    }))
                  }
                />
              </div>
              <button
                className='bg-gradient-landing-orange text-whote px-2 py-1 mt-4 rounded-xl text-white'
                onClick={handleChangePassword}
              >
                {!isLoading ? 'Update Password' : 'Changing Password'}
              </button>
            </div>
          </div>
        </ChangePasswordModal>
      )}
    </div>
  );
};

export default AccountDetails;
