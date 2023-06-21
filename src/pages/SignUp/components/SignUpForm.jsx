import React, { useState } from 'react';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import MailIcon from '../../../assets/svg/Mail';
import PhoneIcon from '../../../assets/svg/Phone';
// import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
// import { countryCode } from '../../../utils/Data/constant';
import EyeOpenIcon from '../../../assets/svg/EyesOpen';
import EyeCloseIcon from '../../../assets/svg/EyesClose';
import PinkButton from '../../../components/PinkButton/PinkButton';
import { useSignupMutation } from '../../../actions/User/Signup';
// import { useQueryClient } from 'react-query';

// const CountryCodeSelector = ({ setCountryCode }) => {
//   const selectHandler = (e) => {
//     setCountryCode(e.target.value);
//   };
//   return (
//     <select
//       name='country'
//       id='country'
//       className='ml-14 h-14 w-16 rounded-md bg-[#ffffff0d] text-white absolute pl-2 '
//     >
//       {countryCode.map((country) => {
//         return (
//           <option
//             key={country.dial_code}
//             value={country.dial_code}
//             onClick={selectHandler}
//             className='h-40 bg-red-500 '
//           >
//             <span className='mr-4'>{country.code}</span>{' '}
//             <span className='ml-2'>{country.flag}</span>
//           </option>
//         );
//       })}
//     </select>
//   );
// };

const SignUpForm = ({ setSignUpError }) => {
  // const [countryCode, setCountryCode] = useState('');
  const [signupData, setSignupData] = useState({
    name: 'arsh ali',
    email: 'arshali.763z@gmail.com',
    phone: '9956440846',
    password: 'localhost',
  });
  const { mutateAsync: signup, isLoading } = useSignupMutation();
  const handleSubmit = async (e, data) => {
    e.preventDefault();
    try {
      await signup(data);
    } catch (error) {
      // console.log(error.response.data.message);
    }
  };
  const [eye, setEye] = useState(false);

  return (
    <form
      method='POST'
      className='mb-[1.6rem] flex flex-col'
      onSubmit={(e) => handleSubmit(e, signupData)}
    >
      <DynamicInputManager
        htmlId='name'
        label='Name'
        isRequired={true}
        placeholder='John Doe'
        multiline={false}
        type='text'
        icon={<UserIcon />}
        states={[signupData.name, setSignupData, 'name']}
      />
      <DynamicInputManager
        htmlId='email'
        label='Email Address'
        isRequired={true}
        multiline={false}
        type='email'
        icon={<MailIcon />}
        states={[signupData.email, setSignupData, 'email']}
      />
      <DynamicInputManager
        htmlId='phone'
        label='Phone'
        isRequired={true}
        multiline={false}
        type='tel'
        icon={<PhoneIcon />}
        states={[signupData.phone, setSignupData, 'phone']}
      />
      <DynamicInputManager
        htmlId='password'
        label='Password'
        isRequired={true}
        multiline={false}
        type='password'
        icon={
          isLoading ? <LockIcon /> : eye ? <EyeOpenIcon /> : <EyeCloseIcon />
        }
        setEye={setEye}
        eye={eye}
        states={[signupData.password, setSignupData, 'password']}
      />
      <PinkButton text='Sign Up' />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        Already have an account?{' '}
        <Link
          to='/accounts/signin'
          className='text-[#bd61ec] cursor-pointer hover:underline'
        >
          <span>Sign In</span>
        </Link>
      </p>
      {/* <div className='px-5 pb-5'>
        <GoToHomeBtn text={'Go Back To Home'} />
      </div> */}
    </form>
  );
};

export default SignUpForm;
