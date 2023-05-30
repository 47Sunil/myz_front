import { useState, useEffect } from 'react';
import { ContentItem } from './ProfileCommon';
import { useQuery, useQueryClient } from 'react-query';
import { useAccountData } from '../../../actions/User/Accounts';
const AccountDetails = () => {
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
        <div className='cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between'>
          Change Password
          <div className='bg-gray-200 py-1 px-4 text-lg rounded'>&gt;</div>
        </div>
        <div className=' mt-4 cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between'>
          Check Subscription
          <div className='bg-gray-200 py-1 px-4 text-lg rounded'>&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
