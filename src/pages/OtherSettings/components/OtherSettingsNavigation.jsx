import { useState } from "react";
import styled from "styled-components";

const Tab = styled.div`
  background: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.33)" : "transparent"};
  color: ${(props) =>
    props.active
      ? "#ffffff"
      : props.locked
      ? "rgba(255, 255, 255, 0.29);"
      : "rgba(255, 255, 255, 0.69);"};
  cursor: ${(props) => (props.locked ? "not-allowed" : "pointer")};
`;

const OtherSettingsNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex">
      {data.map((item) => {
        return (
          <TabItem
            setActiveTab={setActiveTab}
            active={activeTab}
            id={item.id}
            locked={item.locked}
            label={item.label}
          />
        );
      })}
    </div>
  );
};

const TabItem = ({ active, setActiveTab, id, label, locked }) => {
  return (
    <Tab
      active={active === Number(id) ? true : false}
      locked={locked}
      className="px-8 py-2.5 cursor-pointer"
      onClick={() => {
        !locked && setActiveTab(Number(id));
      }}
    >
      {locked ? `🔒 ${label}` : label}
    </Tab>
  );
};

const data = [
  {
    label: "Notification",
    id: 1,
    locked: false,
  },
  {
    label: "Integrations",
    id: 2,
    locked: false,
  },
  {
    label: "Mail & SMTP",
    id: 3,
    locked: true,
  },
  {
    label: "Security",
    id: 4,
    locked: true,
  },
  {
    label: "API access",
    id: 5,
    locked: true,
  },
];
export default OtherSettingsNavigation;
