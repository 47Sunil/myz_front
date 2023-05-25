import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTemplatesData } from '../../../actions/LandingPage';
import { useQuery } from 'react-query';
import Eye from '../../../assets/svg/Eye';

const Button = styled.button`
  background: ${(props) =>
    props.white
      ? '#ffffff'
      : 'linear-gradient(203.96deg, #F26E57 9.69%, #C663D4 101.69%)'};
  width: 63px;
  height: 63px;
  font-size: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.white ? '#000000' : '#ffffff')};
  border-radius: 30px;
`;
const ModalBtn = styled.button`
  background: linear-gradient(180deg, #f76f47 0%, #ff9900 100%);
`;

const TemplateManager = ({
  open,
  setOpen,
  createPageData,
  setCreatePageData,
}) => {
  const [templates, setTemplates] = useState([]);

  function handleClick() {
    setOpen(!open);
  }
  const { data, isLoading } = useQuery('templates', useTemplatesData);
  {
    !isLoading && console.log(data?.data);
  }
  return (
    <div className='border-b lg:border-y border-solid border-white/20 pb-4 lg:py-4'>
      <div className='flex w-full gap-4 justify-between'>
        <div className='new-page w-[200px] flex-shrink-0 h-[250px] rounded-xl border border-white/10 bg-white/5 p-2'>
          <div className='align-center relative flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white/70'>
            <Button className='w-50px h-50px align-center flex justify-center text-xl'>
              +
            </Button>
            <p className='absolute bottom-5 mt-2 text-sm leading-4 text-white/80'>
              Use Blank <br></br>Template
            </p>
          </div>
        </div>
        <div className='flex overflow-x-scroll w-full gap-3'>
          {data?.data.map((i) => {
            return (
              <div className='h-[250px] w-[200px] flex-shrink-0 rounded-xl bg-white relative'>
                {isLoading ? (
                  <h1 className='text-xl'>Loading...</h1>
                ) : (
                  <img
                    src={i.image}
                    alt=''
                    className='w-full h-full object-cover object-top rounded-xl '
                  />
                )}
                <div className='absolute bottom-0 w-full p-2 flex flex-col items-center gap-4'>
                  <div className='bg-white rounded-full w-[102px] h-[50px] border border-solid border-[#85878C] shadow-[0_0_19px_rgba(0,0,0,.25)] flex gap-2 p-1'>
                    <button className='bg-gradient-template-eye w-[42px] h-[42px] rounded-full flex justify-center items-center'>
                      <Eye eyeColor='#ffffff' />
                    </button>
                    <Link
                      to={`/landing-pages/create_landing_page?id=${i._id}`}
                      className='bg-[#DFDEE2] w-[42px] h-[42px] rounded-full flex justify-center items-center'
                    >
                      <p className='text-[#2C2B2B] text-[24px] '>+</p>
                    </Link>
                  </div>
                  <p className='bg-[#0A1118] text-[13px] leading-[34px] text-[rgba(255,255,255,.74)] text-center rounded-b-xl h-[34px] w-full'>
                    {i.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <ModalBtn
          className='template-modal-btn w-[200px] flex-shrink-0 h-[250px] rounded-xl p-2'
          onClick={handleClick}
        >
          <div className='align-center relative flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white/70'>
            <Button
              white
              className='w-50px h-50px align-center flex justify-center bg-white text-xl'
            >
              &gt;
            </Button>
            <p className='absolute bottom-5 mt-2 text-center text-sm leading-4 text-white/80'>
              View all <br></br>Templates
            </p>
          </div>
        </ModalBtn>
      </div>
    </div>
  );
};

export default TemplateManager;
