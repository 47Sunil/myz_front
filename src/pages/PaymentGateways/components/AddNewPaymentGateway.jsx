import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { data } from '../../../utils/Data/PaymentOptionsData';
import styled from 'styled-components';
import { MdNavigateNext } from 'react-icons/md';
import { usePaymentMutation } from '../../../actions/Payment';

const FormContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  .text-gradient-animation {
    background: linear-gradient(
      97.42deg,
      #fff61a 2.07%,
      #1af1ff 23.26%,
      #1aff5a 45.05%,
      #ffa31a 68.82%,
      #ff1ae8 99.17%
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Cta = styled.button`
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
`;

const AddNewPaymentGateway = () => {
  const [searchParams] = useSearchParams();
  const [paymentGateway, setPaymentGateway] = useState({});
  const [requestData, setRequestData] = useState({
    payment_gateway: paymentGateway.id,
    payment_gateway_status: true,
    payment_title: '',
    payment_gateway_data: {},
  });
  // console.log(requestData, 'id payment');
  const addPaymentGateway = usePaymentMutation();
  const handleAddPaymentGateway = async (data) => {
    (await addPaymentGateway).mutateAsync(data);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    // Update the payment_gateway_status field
    if (name === 'payment_gateway_status') {
      const newValue = type === 'checkbox' ? event.target.checked : value;
      setRequestData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
    }

    // Update the payment_title field
    else if (name === 'payment_title') {
      setRequestData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Update the payment_gateway_data field
    else {
      setRequestData((prevData) => ({
        ...prevData,
        payment_gateway_data: {
          ...prevData.payment_gateway_data,
          [name]: value,
        },
      }));
    }
  };

  const searchInPgData = (id) => {
    const foundObject = data.find((obj) => obj.id === id);
    return foundObject || null;
  };

  useEffect(() => {
    const gateway = searchParams.get('gateway');
    setPaymentGateway(searchInPgData(gateway));
    setRequestData((prevState) => ({
      ...prevState,
      payment_gateway: searchParams.get('gateway'),
    }));
  }, [searchParams]);

  return (
    <>
      <div className='h-full grid grid-cols-12 rounded-3xl overflow-hidden'>
        <FormContainer className='col-span-7 h-full p-5'>
          <h4 className='text-xl font-medium tracking-wider text-white pb-5 border-b border-white/30'>
            Adding {paymentGateway.name}
          </h4>
          <div className='flex mt-4 flex-col w-4/6 gap-3'>
            <div className='w-full flex flex-col'>
              <label
                HtmlFor='payment_gateway_title'
                className='text-md text-white/80 mb-2 font-medium tracking-wide'
              >
                Title
              </label>
              <input
                type='text'
                name='payment_title'
                id='payment_gateway_title'
                value={requestData.payment_title}
                onChange={handleInputChange}
                className='bg-[#FFFFFF] shadow py-3 px-4 rounded-lg outline-none border border-[#FFFFFF36] text-gray-800 font-medium text-md'
              />
            </div>
          </div>
          {paymentGateway?.fields?.map((item) => {
            return (
              <div
                key={item.name}
                className='flex mt-4 flex-col w-4/6 gap-3'
              >
                <div className='w-full flex flex-col'>
                  <label className='text-md text-white/80 mb-2'>
                    {item.label}
                  </label>
                  <input
                    type='text'
                    name={item.name}
                    value={requestData.payment_gateway_data[item.name]}
                    onChange={handleInputChange}
                    className='bg-[#FFFFFF] py-3 px-4 rounded-lg outline-none border border-[#FFFFFF36] text-gray-800 font-medium'
                  />
                </div>
              </div>
            );
          })}
          <Cta
            className='text-white p-4 w-4/6 mt-[50px] rounded-md text-xl font-medium'
            onClick={() => handleAddPaymentGateway(requestData)}
          >
            Add {paymentGateway.name}
          </Cta>
        </FormContainer>
        <HelpPart
          className='col-span-5'
          gateway={paymentGateway}
        />
      </div>
    </>
  );
};

const HelpContainer = styled.div`
  background: linear-gradient(
    160.14deg,
    #5e36ce 6.85%,
    #bd61ec 48.13%,
    #ff6b00 92.08%
  );
  .help-overlay {
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684109728/Supported%20Payment%20Gateways/element_help_pg_d5whnq.png);
  }
`;

const HelpPart = ({ className, gateway }) => {
  return (
    <HelpContainer className={className}>
      <div className=' help-overlay h-full py-2 flex items-center flex-col'>
        <div className='bg-white p-2 w-full shadow '>
          <img
            src={gateway.logo}
            alt={gateway.name}
            className='h-12 object-contain mx-auto w-full'
          />
        </div>
        <div className='flex mx-auto mt-8 flex-col gap-4'>
          <h4 className='font-medium text-2xl text-white'>
            Having Problem in Adding?
          </h4>
          <div className='w-full bg-white shadow rounded p-3 flex flex-row cursor-pointer items-between'>
            <div className='grow text-gray-800 text-xs flex items-center'>
              How to get Payment Gateway Credentials?
            </div>
            <div className=' font-bold text-gray-900 bg-gray-200 p-1 text-xl text-center rounded'>
              <MdNavigateNext />
            </div>
          </div>
          <div className='w-full bg-white shadow rounded p-3 flex flex-row cursor-pointer items-between'>
            <div className='grow text-gray-800 text-xs flex items-center'>
              How to Apply {gateway.name} Payment Gateway?
            </div>
            <div className=' font-bold text-gray-900 bg-gray-200 p-1 text-xl text-center rounded'>
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </HelpContainer>
  );
};

export default AddNewPaymentGateway;
