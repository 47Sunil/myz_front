import React, { useState } from 'react';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import MailIcon from '../../../assets/svg/Mail';
import PhoneIcon from '../../../assets/svg/Phone';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
import { countryCode } from '../../../utils/Data/constant';
import PinkButton from '../../../components/PinkButton/PinkButton';

const CountryCodeSelector = ({ setCountryCode }) => {
  const selectHandler = (e) => {
    setCountryCode(e.target.value);
  };
  return (
    <select
      name='country'
      id='country'
      className='ml-14 h-14 w-16 rounded-md bg-[#ffffff0d] text-white absolute pl-2 '
    >
      {countryCode.map((country) => {
        return (
          <option
            key={country.dial_code}
            value={country.dial_code}
            onClick={selectHandler}
            className='h-40 bg-red-500 '
          >
            <span className='mr-4'>{country.code}</span>{' '}
            <span className='ml-2'>{country.flag}</span>
          </option>
        );
      })}
    </select>
  );
};

const SignUpForm = ({ setSignUpError }) => {
  const [countryCode, setCountryCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      action=''
      className='mb-[1.6rem] flex flex-col'
    >
      <DynamicInputManager
        htmlId='name'
        label='Name'
        isRequired={true}
        placeholder='John Doe'
        multiline={false}
        type='text'
        icon={<UserIcon />}
        states={[name, setName]}
      />
      <DynamicInputManager
        htmlId='email'
        label='Email Address'
        isRequired={true}
        multiline={false}
        type='email'
        icon={<MailIcon />}
        states={[email, setEmail]}
      />
      <DynamicInputManager
        htmlId='phone'
        label='Phone'
        isRequired={true}
        multiline={false}
        type='tel'
        icon={<PhoneIcon />}
        states={[phone, setPhone]}
      />
      <DynamicInputManager
        htmlId='password'
        label='Password'
        isRequired={true}
        multiline={false}
        type='password'
        icon={<LockIcon />}
        states={[password, setPassword]}
      />
      <PinkButton text='Sign Up' />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        Already have an account?{' '}
        <Link className='text-[#bd61ec]'>
          <span>Sign In</span>
        </Link>
      </p>
      <GoToHomeBtn />
    </form>
  );
};

export default SignUpForm;
