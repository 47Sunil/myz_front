import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
const ModalBtn = styled.div`
  background: linear-gradient(180deg, #f76f47 0%, #ff9900 100%);
`;

const TemplateManager = () => {
  const [templates, setTemplates] = useState([]);

  // const getTemplates = async () => {
  //   const { data } = await axios.get('/api/v1/template/templates');
  //   console.log(data);
  //   setTemplates(data.data);
  // };

  // useEffect(() => {
  //   getTemplates();
  // }, []);

  return (
    <div className='border-y border-solid border-white/20 py-4'>
      <div className='grid grid-cols-6 gap-4'>
        <div className='new-page h-[250px] rounded-xl border border-white/10 bg-white/5 p-2'>
          <div className='align-center relative flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white/70'>
            <Button className='w-50px h-50px align-center flex justify-center text-xl'>
              +
            </Button>
            <p className='absolute bottom-5 mt-2 text-sm leading-4 text-white/80'>
              Use Blank <br></br>Template
            </p>
          </div>
        </div>
        {templates.slice(0, 4).map((item) => {
          return (
            <div
              className={`relative h-[250px] rounded-xl border bg-cover p-2`}
              style={{
                background: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            >
              <button
                className='absolute bottom-1.5 w-11/12 rounded-lg p-2 text-sm text-white'
                style={{ background: '#0A1118' }}
              >
                {item.name}
              </button>
              <div className='absolute bottom-16 right-[50%] flex h-16 w-32 translate-x-[50%] gap-3 rounded-full border border-gray-600/60 bg-white p-1'>
                <Link
                  className='w-16'
                  to={`/landing-pages/add?template=${item._id}&ai=${item.aiEnabled}`}
                >
                  <ModalBtn className='flex h-14 items-center justify-center rounded-full p-1 text-3xl font-medium text-white'>
                    +
                  </ModalBtn>
                </Link>
                <div className='flex h-14 w-16 items-center justify-center rounded-full bg-[#DFDEE2] p-1'></div>
              </div>
            </div>
          );
        })}

        <ModalBtn className='template-modal-btn h-[250px] rounded-xl p-2'>
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
