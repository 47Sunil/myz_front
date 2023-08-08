import React from 'react';

const GoToHomeBtn = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '2.5rem 0rem',
      }}
    >
      <button className='btn_back' />
      <p className='sign_label' style={{ color: '#ffffff' }}>
        Go back to Home
      </p>
    </div>
  );
};

export default GoToHomeBtn;
