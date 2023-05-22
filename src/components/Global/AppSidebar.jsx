import React, { useState } from 'react';
import { BrandLogo } from '../../assets/Brand/Assets';
import { data1, data2, data3 } from '../../utils/Data/SidebarData';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Element = styled.div`
  background: ${(props) =>
    !props.transparent
      ? 'transparent'
      : 'linear-gradient(180deg, #bd61ec 0%, #5e36ce 100%)'};
`;
const SideBarItem = styled.div`
  position: relative;
  z-index: 99;
  background: ${(props) =>
    props.clicked ? ' rgba(255, 255, 255, 0.05)' : 'transparent'};
  border-radius: 9px;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 0 9px 9px 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10.5px);
    transition: width 0.3s linear;
    inset: 0;
    width: 0;
  }
  &:hover:before {
    width: 100%;
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    width: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(180deg, #bd61ec 0%, #5e36ce 100%);
    z-index: 9;
    transition: width 0.3s linear;
  }
  &:hover:after {
    width: 7px;
  }
`;

const AppSidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className='flex p-5 justify-between flex-col h-screen'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-full border-b border-[#FFFFFF26]'>
            <img
              className='w-[50%] pb-4 mx-auto'
              alt={BrandLogo.alt}
              src={BrandLogo.url}
            ></img>
          </div>
          <div className='w-full mt-5 gap-2 flex flex-col'>
            {data1.map((item) => {
              return (
                <SidebarItem
                  key={item.path}
                  item={item}
                  pathname={pathname}
                />
              );
            })}
          </div>
          <div className='w-full mt-5 gap-2 flex flex-col'>
            <h4 className='text-[#FFFFFFC2] text-sm p-3  mt-2'>Settings</h4>
            {data2.map((item) => {
              return (
                <SidebarItem
                  key={item.path}
                  item={item}
                  pathname={pathname}
                />
              );
            })}
          </div>
        </div>
        <div className='w-full mt-5 gap-2 flex flex-col'>
          {data3.map((item) => {
            return (
              <SidebarItem
                key={item.path}
                item={item}
                pathname={pathname}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ item, pathname }) => {
  return (
    <div
      id={item.path}
      className='h-10 w-full flex flex-row'
    >
      <SideBarItem
        clicked={pathname.includes(item.path)}
        className={
          'p-2 -ml-[1px] z-20 px-3 flex flex-row gap-3 backdrop-blur-md w-full'
        }
      >
        <div className='w-3 items-center justify-center flex tools-item'>
          {pathname.includes(item.path) ? item.clicked : item.icon}
        </div>
        <div className='flex items-center text-[12px] text-[#FFFFFFB0]'>
          <Link to={item.path}>{item.label}</Link>
        </div>
      </SideBarItem>
    </div>
  );
};

export default AppSidebar;
