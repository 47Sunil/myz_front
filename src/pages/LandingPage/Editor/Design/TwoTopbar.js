import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

const TwoTopbar = ({ editor }) => {
  const [pc, setPc] = useState(true);
  const [mob, setMob] = useState(false);
  const [tab, setTab] = useState(false);

  const changePcHandler = () => {
    const device = editor.DeviceManager.get('desktop');
    // console.log(editor)
    editor.DeviceManager.select(device);
  };
  const changeMobHandler = () => {
    const device = editor.DeviceManager.get('mobile');
    editor.DeviceManager.select(device);
  };
  const changeTabHandler = () => {
    const device = editor.DeviceManager.get('tablet');
    editor.DeviceManager.select(device);
  };

  return (
    <div
      className='absolute border-t border-l border-gray-100/20'
      style={{
        background: '#111115',
        height: '50px',
        width: 'calc(100vw - 350px)',
        left: '50px',
      }}
    >
      <div className='flex align-center justify-center'>
        <button
          onClick={() => {
            setPc(false);
            setMob(true);
            setTab(false);
            changeMobHandler();
          }}
          className={
            mob
              ? 'pcContainer h-full flex align-center justify-center items-center bg-white/10'
              : 'pcContainer h-full flex align-center justify-center items-center'
          }
          style={{ width: '50px', height: '50px' }}
        >
          <svg
            width='17'
            height='28'
            viewBox='0 0 17 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.5395 0H2.46053C1.80795 0 1.18211 0.253515 0.720671 0.704774C0.259233 1.15603 0 1.76807 0 2.40625V25.5938C0 26.2319 0.259233 26.844 0.720671 27.2952C1.18211 27.7465 1.80795 28 2.46053 28H14.5395C15.192 28 15.8179 27.7465 16.2793 27.2952C16.7408 26.844 17 26.2319 17 25.5938V2.40625C17 1.76807 16.7408 1.15603 16.2793 0.704774C15.8179 0.253515 15.192 0 14.5395 0V0ZM1.34211 4.96344H15.6579V21.7831H1.34211V4.96344ZM2.46053 1.3125H14.5395C14.6863 1.3125 14.8318 1.34079 14.9675 1.39576C15.1032 1.45072 15.2265 1.53129 15.3303 1.63285C15.4342 1.73442 15.5166 1.85499 15.5728 1.98769C15.629 2.12039 15.6579 2.26262 15.6579 2.40625V3.65094H1.34211V2.40625C1.34211 2.11617 1.45994 1.83797 1.66968 1.63285C1.87943 1.42773 2.1639 1.3125 2.46053 1.3125V1.3125ZM14.5395 26.6875H2.46053C2.1639 26.6875 1.87943 26.5723 1.66968 26.3671C1.45994 26.162 1.34211 25.8838 1.34211 25.5938V23.0956H15.6579V25.5938C15.6579 25.7374 15.629 25.8796 15.5728 26.0123C15.5166 26.145 15.4342 26.2656 15.3303 26.3671C15.2265 26.4687 15.1032 26.5493 14.9675 26.6042C14.8318 26.6592 14.6863 26.6875 14.5395 26.6875V26.6875Z'
              fill={mob ? '#ffffff' : '#717179'}
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setPc(true);
            setMob(false);
            setTab(false);
            changePcHandler();
          }}
          className={
            pc
              ? 'pcContainer h-full flex align-center justify-center items-center bg-white/10'
              : 'pcContainer h-full flex align-center justify-center items-center'
          }
          style={{ width: '50px', height: '50px' }}
        >
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M26.4688 0H1.53125C1.12514 0 0.735658 0.161328 0.448493 0.448493C0.161328 0.735658 0 1.12514 0 1.53125L0 19.4688C0 19.8749 0.161328 20.2643 0.448493 20.5515C0.735658 20.8387 1.12514 21 1.53125 21H9.84375V26.6875H6.34375C6.1697 26.6875 6.00278 26.7566 5.87971 26.8797C5.75664 27.0028 5.6875 27.1697 5.6875 27.3438C5.6875 27.5178 5.75664 27.6847 5.87971 27.8078C6.00278 27.9309 6.1697 28 6.34375 28H21.6562C21.8303 28 21.9972 27.9309 22.1203 27.8078C22.2434 27.6847 22.3125 27.5178 22.3125 27.3438C22.3125 27.1697 22.2434 27.0028 22.1203 26.8797C21.9972 26.7566 21.8303 26.6875 21.6562 26.6875H18.1562V21H26.4688C26.8749 21 27.2643 20.8387 27.5515 20.5515C27.8387 20.2643 28 19.8749 28 19.4688V1.53125C28 1.12514 27.8387 0.735658 27.5515 0.448493C27.2643 0.161328 26.8749 0 26.4688 0ZM1.53125 1.3125H26.4688C26.5268 1.3125 26.5824 1.33555 26.6234 1.37657C26.6645 1.41759 26.6875 1.47323 26.6875 1.53125V15.9688H1.3125V1.53125C1.3125 1.47323 1.33555 1.41759 1.37657 1.37657C1.41759 1.33555 1.47323 1.3125 1.53125 1.3125ZM16.8438 26.6875H11.1562V21H16.8438V26.6875ZM26.4688 19.6875H1.53125C1.47323 19.6875 1.41759 19.6645 1.37657 19.6234C1.33555 19.5824 1.3125 19.5268 1.3125 19.4688V17.2812H26.6875V19.4688C26.6875 19.5268 26.6645 19.5824 26.6234 19.6234C26.5824 19.6645 26.5268 19.6875 26.4688 19.6875Z'
              fill={pc ? '#ffffff' : '#717179'}
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setPc(false);
            setMob(false);
            setTab(true);
            changeTabHandler();
          }}
          className={
            tab
              ? 'pcContainer h-full flex align-center justify-center items-center bg-white/10'
              : 'pcContainer h-full flex align-center justify-center items-center'
          }
          style={{ width: '50px', height: '50px' }}
        >
          <svg
            width='22'
            height='28'
            viewBox='0 0 22 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='1.21738'
              y1='22.1305'
              x2='21.3043'
              y2='22.1305'
              stroke='black'
              strokeWidth='2'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M19.4783 28H2.43478C1.09017 28 0 26.9098 0 25.5652V2.43478C0 1.09017 1.09017 0 2.43478 0H19.4783C20.8229 0 21.913 1.09017 21.913 2.43478V25.5652C21.913 26.9098 20.8229 28 19.4783 28ZM20.6957 2.43478C20.6957 1.76278 20.1503 1.21739 19.4783 1.21739H2.43478C1.76278 1.21739 1.21739 1.76278 1.21739 2.43478V25.5652C1.21739 26.2372 1.76278 26.7826 2.43478 26.7826H19.4783C20.1503 26.7826 20.6957 26.2372 20.6957 25.5652V2.43478ZM10.3478 2.43478C10.3478 2.09861 10.6203 1.82609 10.9565 1.82609C11.2927 1.82609 11.5652 2.09861 11.5652 2.43478C11.5652 2.77096 11.2927 3.04348 10.9565 3.04348C10.6203 3.04348 10.3478 2.77096 10.3478 2.43478ZM10.9565 23.7391C11.6285 23.7391 12.1739 24.2845 12.1739 24.9565C12.1739 25.6285 11.6285 26.1739 10.9565 26.1739C10.2845 26.1739 9.73913 25.6285 9.73913 24.9565C9.73913 24.2845 10.2845 23.7391 10.9565 23.7391Z'
              fill={tab ? '#ffffff' : '#717179'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TwoTopbar;
