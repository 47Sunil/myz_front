import React, { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useQuery, useQueryClient } from 'react-query';
const PaymentModal = ({
  setPageData,
  paymentSelect,
  setPaymentSelect,
  isExpanded,
  setIsExpanded,
  isPaymentMethodSelected,
  setIsPaymentMethodSelected,
  pageData,
}) => {
  const [isSelected, setIsSelected] = useState(pageData.paymentGateway);
  const queryClient = useQueryClient();
  const paymentData = queryClient.getQueryData('paymentData');
  console.log(paymentData, 'payment modal payment data');
  console.log(isSelected, 'is selected');
  return (
    <div className='absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.54)] z-30 flex justify-center items-center'>
      <div className='bg-[#0A031B] rounded-[31px] border border-solid border-[rgba(255,255,255,0.29)] w-[60vw] h-[80vh] p-[34px_68px] overflow-hidden relative'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-white text-[24px] leading-[121%] font-medium'>
            Select Payment Gateway
          </h1>
          <AiOutlineInfoCircle className='text-white text-[24px] leading-[121%]' />
        </div>
        <hr className='w-full border border-solid border-[rgba(255,255,255,0.38)] my-[24px]' />
        <div className='grid grid-cols-4 gap-8 overflow-y-scroll p-3 h-[calc(100%-120.25px)]'>
          <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,255,255,0.31)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px] hover:outline hover:outline-white hover:outline-offset-4 hover:outline-2'>
            <button className='bg-gradient-landing-orange text-white text-[41px] leading-[51px] text-center h-[51px] w-[51px] font-medium rounded-full'>
              +
            </button>
            <p className='font-medium text-[14px] leading-[121%] text-[#bebebe] w-full text-center '>
              Add New Payment Gateway
            </p>
          </div>

          {!paymentData.isLoading &&
            paymentData?.data.map((i) => {
              return (
                <PaymentMethod
                  title={i.title}
                  brand={i.brand}
                  id={i._id}
                  key={i._id}
                  icon={i.icon}
                  setIsSelected={setIsSelected}
                  isSelected={isSelected}
                  isPaymentMethodSelected={isPaymentMethodSelected}
                  setIsPaymentMethodSelected={setIsPaymentMethodSelected}
                />
              );
            })}
        </div>
        <div className='bg-[#181424] w-full py-4 flex justify-center items-center absolute bottom-0 left-0 gap-16'>
          <button
            className='rounded-[8px] bg-[rgba(255,255,255,0.12)] leading-[157.5%] text-[18px] py-2 w-[170px] font-medium text-white'
            onClick={() => (
              setIsExpanded(!isExpanded),
              setPaymentSelect(!paymentSelect),
              setPageData((prevState) => ({
                ...prevState,
                paymentGateway: '',
              })),
              setIsPaymentMethodSelected(true)
            )}
          >
            Cancel
          </button>
          <button
            className='rounded-[8px] bg-gradient-landing-orange leading-[157.5%] text-[18px] py-2 w-[170px] font-medium text-white'
            onClick={() => (
              setIsExpanded(!isExpanded),
              setPaymentSelect(!paymentSelect),
              setPageData((prevState) => ({
                ...prevState,
                paymentGateway: isSelected,
              }))
            )}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
