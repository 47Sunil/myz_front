import { useState } from "react";
import styled from "styled-components";
import OtherSettingsNavigation from "./OtherSettingsNavigation";
import SettingCard from "./SettingCard";

const Wrapper = styled.div`
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
  border-radius: 18px;
`;

const OtherSettingsCommon = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="p-3 h-full">
      <div className="bg-white p-3 rounded-xl h-full">
        <Wrapper className="-mx-7 overflow-hidden">
          <OtherSettingsNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Wrapper>
        <div className="grid grid-cols-2 mt-2 p-8 gap-16">
          {activeTab === 1 && (
            <>
              {data1.map((item) => {
                return (
                  <SettingCard
                    label={item.label}
                    description={item.description}
                    img={item.img}
                    docs="#"
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const data1 = [
  {
    label: "WhatsApp Notifications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    img: "https://res.cloudinary.com/lpmaker/image/upload/v1684784672/settings_sub/wtsicon_lrxqa4.png",
    docs: "#",
  },
  {
    label: "Email Notifications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    img: "https://res.cloudinary.com/lpmaker/image/upload/v1684784672/settings_sub/wtsicon_lrxqa4.png",
    docs: "#",
  },
];

const data2 = [
    {
        label: ""
    }
]

export default OtherSettingsCommon;
