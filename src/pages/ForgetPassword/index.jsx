import React from 'react';
import Forget from './components/Forget';
import FormRight from '../../components/FormRight/FormRight';

function Password() {
  return (
    <div className='relative flex w-screen h-screen overflow-hidden text-white'>
      <Forget />
      <FormRight />
    </div>
  );
}

export default Password;
