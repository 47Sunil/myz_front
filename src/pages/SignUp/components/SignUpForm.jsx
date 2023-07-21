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
  const [lockFields, setLockFields] = useState(false);

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
      setLockFields(true);
      await signup({ data, setLockFields });
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
        lock={lockFields}
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
        lock={lockFields}
        htmlId='email'
        label='Email Address'
        isRequired={true}
        placeholder='johndoe@xyz.com'
        multiline={false}
        type='email'
        icon={<MailIcon />}
        states={[signupData.email, setSignupData, 'email']}
      />
      <DynamicInputManager
        lock={lockFields}
        htmlId='phone'
        label='Phone'
        isRequired={true}
        multiline={false}
        placeholder={'94xxxxxx78'}
        type='tel'
        icon={<PhoneIcon />}
        states={[signupData.phone, setSignupData, 'phone']}
      />
      <div className='relative w-full'>
        <DynamicInputManager
          lock={lockFields}
          htmlId='password'
          label='Password'
          isRequired={true}
          multiline={false}
          placeholder={'Enter Password'}
          type={eye ? 'text' : 'password'}
          icon={<LockIcon />}
          states={[signupData.password, setSignupData, 'password']}
        />
        <div
          className='absolute right-[2rem] top-[2.9rem] cursor-pointer '
          onClick={() => setEye(!eye)}
        >
          {eye ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </div>
      </div>

      <PinkButton
        text='Sign Up'
        lock={lockFields}
      />
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
