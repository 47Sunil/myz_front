import { useState } from 'react';
import styled from 'styled-components';
import OtherSettingsNavigation from './OtherSettingsNavigation';
import SettingCard from './SettingCard';

const Wrapper = styled.div`
  background: linear-gradient(152.58deg, #5e36ce 17.18%, #512eb1 98.96%);
  border-radius: 18px;
`;

const OtherSettingsCommon = ({
  setShowModalPhone,
  showModalPhone,
  setShowModalEmail,
  showModalEmail,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='p-3 h-full'>
      <div className='bg-white p-3 rounded-xl h-full'>
        <Wrapper className='-mx-7 overflow-hidden'>
          <OtherSettingsNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Wrapper>
        <div className='grid grid-cols-2 mt-2 p-8 gap-16'>
          {activeTab === 1 && (
            <>
              <SettingCard
                label={data1[0].label}
                description={data1[0].description}
                img={data1[0].img}
                docs='#'
                type={'tel'}
              />
              <SettingCard
                label={data1[1].label}
                description={data1[1].description}
                img={data1[1].img}
                docs='#'
                type={'email'}
              />
            </>
          )}
          {activeTab === 2 && (
            <>
              <SettingCard
                label={data1[2].label}
                description={data1[2].description}
                img={data1[2].img}
                docs='#'
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const data1 = [
  {
    label: 'WhatsApp Notifications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    img: 'https://res.cloudinary.com/lpmaker/image/upload/v1684784672/settings_sub/wtsicon_lrxqa4.png',
    docs: '#',
  },
  {
    label: 'Email Notifications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    img: 'https://res.cloudinary.com/lpmaker/image/upload/v1686757214/icons/Others/6557838_aamlur.png ',
    docs: '#',
  },
  {
    label: 'Webhook Notifications',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    img: 'https://res.cloudinary.com/lpmaker/image/upload/v1686757141/icons/Others/webhook_icon_sxqx6p.png ',
    docs: '#',
  },
];

const data2 = [
  {
    label: '',
  },
];

export default OtherSettingsCommon;
