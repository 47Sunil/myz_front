import React, { useState } from 'react';

const AdvanceOptions = ({
  label,
  id,
  isChecked,
  setIsChecked,
  setPageData,
  propName,
  setIsDomainEmpty,
  setIsRedirectEmpty,
  setIsCustomEmpty,
}) => {
  // console.log(isChecked, 'is CHECKED ADVANCED OPTIONS');
  const [isAdvanceSelected, setIsAdvanceSelected] = useState(false);
  return (
    <div className='flex gap-4 items-center h-8 w-[40%]'>
      <input
        type='checkbox'
        id={id}
        className='cursor-pointer'
        onChange={() => (
          setIsChecked(!isChecked),
          setIsAdvanceSelected(!isAdvanceSelected),
          isAdvanceSelected &&
            setPageData((prevState) => ({ ...prevState, [propName]: '' }))
        )}
      />
      <label
        htmlFor={id}
        className='text-white text-[12px] cursor-pointer'
      >
        {label}
      </label>
    </div>
  );
};

export default AdvanceOptions;
