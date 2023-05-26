import React, { useEffect, useState } from 'react';
import SecondScreenWrapper from '../../../components/SecondScreen/SecondScreenWrapper';
import star from '../../../assets/images/star2.png';
import TransparentButton from '../../../components/TransparentButton/TransparentButton';
import { AiOutlineSwap, AiFillCaretDown } from 'react-icons/ai';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  useLandingDomainData,
  useLandingPageMutation,
} from '../../../actions/LandingPage';
import PaymentModal from './Create Landing Page/PaymentModal';
import FormScreen from './Create Landing Page/FormScreen';

// * MAIN PAGE
const CreateLandingPage = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('templates');
  const ID = searchParams.get('id');
  const [pageData, setPageData] = useState({
    funnelName: 'MY first',
    pageName: 'mist',
    pageGoal: 'purchase',
    name: 'Most',
    price: 144,
    paymentGateway: '',
    template_id: ID,
    domain: '646de61a2fbf77e799432df9',
    redirectPage: 'https//google.com/',
    customMessage: 'Hiee',
    metadata: {},
  });

  const [paymentSelect, setPaymentSelect] = useState(false);
  const templateData = data?.data.filter((i) => {
    return i._id === ID;
  });
  const navigate = useNavigate();
  if (templateData === undefined) {
    navigate('/landing-pages/home');
    console.log('no template data');
  }
  useEffect(() => {
    window.onbeforeunload = function () {
      return 'Are you sure you want to refresh? All unsaved data will be lost.';
    };
    if (templateData === undefined) {
      navigate('/landing-pages/home');
      console.log('no template data');
    }
  }, []);

  return (
    <>
      {templateData === undefined ? (
        navigate('/landing-pages/home')
      ) : (
        // * THIS WRAPPER IS A GLOBAL COMPONENT, IT IS USED IN  DOMAIN SCREEN ALSO
        <SecondScreenWrapper>
          <div className='w-full h-full flex items-center justify-center z-10 absolute inset-0'>
            <div className='bg-gradient-landing-blue w-[30vw] h-[80vh] rounded-[63px] overflow-hidden absolute left-[8%] top-[15%]'>
              <img
                src={star}
                alt=''
                className='object-cover h-full w-full'
              />
              <div className='absolute z-30 flex flex-col justify-center items-center inset-0 gap-4 w-full'>
                <h1 className='font-medium text-[25px] leading-[121%] text-white text-center'>
                  Selected Template
                </h1>
                <figure className='mb-8'>
                  <div className='bg-white w-[270px] h-[350px] rounded-3xl '>
                    <img
                      src={templateData[0]?.image}
                      alt=''
                      className='object-cover object-top w-full h-full rounded-3xl'
                    />
                    <figcaption className='capitalize font-medium text-[14px] leading-[121%] text-white text-center mt-3'>
                      {templateData[0]?.name}
                    </figcaption>
                  </div>
                </figure>
                <TransparentButton
                  buttonText={'Switch Template'}
                  icon={<AiOutlineSwap />}
                  dark={true}
                />
              </div>
            </div>
            <FormScreen
              paymentSelect={paymentSelect}
              setPaymentSelect={setPaymentSelect}
              setPageData={setPageData}
              pageData={pageData}
            />
          </div>
          {paymentSelect && (
            <PaymentModal
              setPageData={setPageData}
              setPaymentSelect={setPaymentSelect}
              paymentSelect={paymentSelect}
            />
          )}
        </SecondScreenWrapper>
      )}
    </>
  );
};

export default CreateLandingPage;
