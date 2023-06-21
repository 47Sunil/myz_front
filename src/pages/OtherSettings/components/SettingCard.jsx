import { useState } from 'react';
import { useIntegrationPhoneMutation } from '../../../actions/OtherSettings';
import { useQueryClient } from 'react-query';

const SettingCard = ({ label, img, description, docs, type = 'text' }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='bg-gray-100 border border-gray-300/50 rounded-xl p-4 '>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          label={label}
          type={type}
        />
      )}
      <div className='flex items-center'>
        <img
          src={img}
          alt={label}
          className='w-12'
        />
        <h4 className='text-md text-gray-800'>{label}</h4>
      </div>
      <p className='text-gray-600 mt-2 mb-2'>{description}</p>
      <div className='mt-2 flex items-center'>
        <button
          className=' px-5 text-sm text-center flex items-center rounded-full bg-white border border-gray-200'
          onClick={handleModal}
        >
          <span className='text-xl p-2 font-thin'>+</span>
          Configure
        </button>
        <a
          href={docs}
          className='text-sm text ml-5 cursor-pointer'
        >
          Read Docs
        </a>
      </div>
    </div>
  );
};
const Modal = ({ setShowModal, showModal, label, type }) => {
  const queryClient = useQueryClient();
  const { user: userData } = queryClient.getQueryData('user');
  // console.log(userData, 'adsadadadadjkhdkfhkjajajkjhfhjahjkd');
  const [whatsapp, setWhatsapp] = useState({
    enable: false,
    value: userData.orderNotify.whatsapp.value,
  });
  const [email, setEmail] = useState({
    enable: false,
    value: userData.orderNotify.email.value,
  });
  const [webhook, setWebhook] = useState({
    enable: false,
    value: userData.orderNotify.webhook.value,
  });
  const handleChangePhone = (e) => {
    if (e.target.value !== '') {
      setWhatsapp((prevData) => ({
        ...prevData,
        value: e.target.value,
        enable: true,
      }));
    }
  };

  // Assuming handleChangePhone was called with a non-empty value
  // console.log(data);

  const handleChangeEmail = (e) => {
    if (e.target.value !== '') {
      setEmail((prevData) => ({
        ...prevData,
        value: e.target.value,
        enable: true,
      }));
    }
  };
  const handleChangeWebhook = (e) => {
    if (e.target.value !== '') {
      setWebhook((prevData) => ({
        ...prevData,
        value: e.target.value,
        enable: true,
      }));
    }
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const sendUserData = useIntegrationPhoneMutation();

  const handleSubmit = async (data) => {
    await sendUserData.mutateAsync(data);
    setShowModal(!showModal);
  };
  return (
    <div className='w-screen h-screen fixed bg-[rgba(0,0,0,.5)] inset-0 z-[10000000] flex justify-center items-center'>
      <div className='w-[50vw] h-[50vh] bg-white rounded-2xl overflow-hidden flex flex-col'>
        <div className='w-full bg-gradient-landing-blue h-16 flex items-center p-4'>
          <p className='text-white text-2xl'>
            {' '}
            Add Your{' '}
            {type === 'email'
              ? 'Email'
              : type === 'tel'
              ? 'Phone Number'
              : 'URL'}
          </p>
        </div>
        <div className='bg-[#f2f2f2] w-full h-full flex items-center justify-center flex-col gap-8'>
          <input
            type={type}
            placeholder={
              type === 'email'
                ? 'johnDoe@gamil.com'
                : type === 'tel'
                ? '+91999xxx9922'
                : 'https://www.xyz.com'
            }
            className='px-4 py-3 rounded-lg outline-[#f3f3f3] w-[16rem]'
            required
            onChange={
              type === 'email'
                ? handleChangeEmail
                : type === 'tel'
                ? handleChangePhone
                : handleChangeWebhook
            }
            value={
              type === 'email'
                ? email.value
                : type === 'tel'
                ? whatsapp.value
                : webhook.value
            }
            maxLength={label === 'Email Notifications' ? '100' : '10'}
          />
          <div className='flex gap-[5rem]'>
            <button
              className='bg-[#e2e2e2] px-4 py-2 rounded-lg'
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              className='bg-[#b4e3b2] px-4 py-2 rounded-lg'
              onClick={
                type === 'email'
                  ? () => handleSubmit({ email })
                  : type === 'tel'
                  ? () => handleSubmit({ whatsapp })
                  : () => handleSubmit({ webhook })
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
