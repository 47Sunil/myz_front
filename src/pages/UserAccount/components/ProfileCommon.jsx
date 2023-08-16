import { useRef, useState } from 'react';
import styled from 'styled-components';
import AccountDetails from './AccountDetails';
import PaymentHistory from './PaymentHistory';
import { FiEdit, FiCheckSquare } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useQueryClient } from 'react-query';
import {
  useImageUpload,
  useUserUpdateMutation,
} from '../../../actions/User/Accounts';
import user from '../../../assets/icons/user.png';
import { toast } from 'react-toastify';
const Wrapper = styled.div`
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
  border-radius: 18px;
`;

const Overlay1 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684247150/Account%20page/Group_198_nhghcr.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

const Overlay2 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684247150/Account%20page/Group_200_u3zid6.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

const ProfileCommon = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  // const queryClient = useQueryClient();
  // const data = queryClient.getQueryData('user');
  const { user } = JSON.parse(localStorage.getItem('user'));
  const { mutateAsync: upload, isLoading } = useImageUpload();
  const hiddenFileInput = useRef(null);
  const handleClickEdit = (e) => {
    hiddenFileInput.current.click();
    setIsEditing(!isEditing);
  };
  const handleClickUpload = async (e) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      await upload(formData);
      setIsEditing(!isEditing);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const fileUpload = e.target.files[0];
    setFile(fileUpload);
  };

  return (
    <>
      <div className='flex flex-col'>
        <Wrapper className='w-full h-36 z-20 '>
          <Overlay1>
            <Overlay2 className='relative'>
              {!isLoading && (
                <div className='w-32 h-32 absolute translate-x-1/2 right-1/2 bottom-0 rounded-full translate-y-1/2 bg-[#221154] p-1 '>
                  <img
                    src={user.profile || user}
                    alt='User Img'
                    className='rounded-full w-full h-full object-cover'
                  />
                  <input
                    type='file'
                    className='hidden'
                    ref={hiddenFileInput}
                    onChange={handleChange}
                  />
                  {isEditing ? (
                    <FiCheckSquare
                      className='absolute bottom-0 right-0 cursor-pointer '
                      onClick={handleClickUpload}
                    />
                  ) : (
                    <FiEdit
                      className='absolute bottom-0 right-0 cursor-pointer '
                      onClick={handleClickEdit}
                    />
                  )}
                </div>
              )}
            </Overlay2>
          </Overlay1>
        </Wrapper>
        <div className='bg-black/50 w-11/12 mx-auto h-4  z-10 -mt-3 blur-md'></div>
        <div className='bg-white w-11/12 mx-auto -mt-2 pt-16 rounded-b-xl'>
          <h4 className='w-full text-center py-4 text-lg'>{user.name}</h4>
          <div className='w-[500px] bg-gray-100 p-2 mx-auto rounded-full grid grid-cols-3 gap-2 text-sm'>
            <div
              className={
                'w-full p-2 rounded-full text-center cursor-pointer ' +
                (activeTab === 1 &&
                  ` bg-gradient-to-r from-[#D9CCFF] to-[#ECC8FF] `)
              }
              onClick={() => setActiveTab(1)}
            >
              Account Details
            </div>
            <div
              className={
                'w-full p-2 rounded-full text-center cursor-pointer ' +
                (activeTab === 2 &&
                  ` bg-gradient-to-r from-[#D9CCFF] to-[#ECC8FF] `)
              }
              onClick={() => setActiveTab(2)}
            >
              Payment History
            </div>
            <div className='w-full p-2 rounded-full text-center text-gray-300 cursor-not-allowed'>
              🔒 Manage Users
            </div>
          </div>
          {activeTab === 1 ? <AccountDetails /> : <PaymentHistory />}
        </div>
      </div>
    </>
  );
};

export const ContentItem = ({
  label,
  value,
  width = 'w-full',
  setFieldChanges,
  isEditable = true,
  stateKey,
  id,
  fieldChanges,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateUser = useUserUpdateMutation();
  // const ID = id;
  // console.log(fieldChanges);
  const handleUpdateUser = async (data) => {
    try {
      await updateUser.mutateAsync(data);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <div className={`relative flex flex-col overflow-hidden ` + width}>
        <label
          htmlFor=''
          className='text-sm py-1'
        >
          {label}
        </label>
        <div className='w-full bg-gray-100 rounded-md text-sm h-10 flex items-center pr-4'>
          <input
            type='text'
            value={value}
            className='bg-gray-100 rounded-md  py-2 px-3 w-full focus:outline-none'
            disabled={!isEditing}
            onChange={(e) =>
              setFieldChanges((prevState) => ({
                ...prevState,
                [stateKey]: e.target.value,
              }))
            }
          />
          {!isEditable &&
            (!isEditing ? (
              <AnimatePresence>
                <motion.button
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: 100 }}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <FiEdit />
                </motion.button>
              </AnimatePresence>
            ) : (
              <motion.button
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                onClick={() => (
                  setIsEditing(!isEditing), handleUpdateUser(fieldChanges)
                )}
              >
                <FiCheckSquare />
              </motion.button>
            ))}
        </div>
        {/* {!isEditing && (
          <div className='h-10 w-full absolute bg-transparent bottom-0 flex justify-end px-4'>
            <button>
              {' '}
              <FiEdit />
            </button>
          </div>
        )}
        {isEditing && (
          <div className='h-10 w-full absolute bg-transparent bottom-0 flex justify-end px-4'>
            <button>
              {' '}
              <FiCheckSquare />
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};

export default ProfileCommon;
