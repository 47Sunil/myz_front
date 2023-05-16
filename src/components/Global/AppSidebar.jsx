import React, { useState } from "react";
import { BrandLogo } from "../../assets/Brand/Assets";
import { data1, data2, data3 } from "../../utils/Data/SidebarData";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Element = styled.div`
  background: ${(props) =>
    !props.transparent
      ? "transparent"
      : "linear-gradient(180deg, #bd61ec 0%, #5e36ce 100%)"};
`;

const AppSidebar = () => {
  return (
    <>
      <div className="flex p-5 justify-between flex-col h-full">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full border-b border-[#FFFFFF26]">
            <img
              className="w-[50%] pb-4 mx-auto"
              alt={BrandLogo.alt}
              src={BrandLogo.url}
            ></img>
          </div>
          <div className="w-full mt-5 gap-2 flex flex-col">
            {data1.map((item) => {
              return <SidebarItem key={item.path} item={item} />;
            })}
          </div>
          <div className="w-full mt-5 gap-2 flex flex-col">
            <h4 className="text-[#FFFFFFC2] text-sm p-3  mt-2">Settings</h4>
            {data2.map((item) => {
              return <SidebarItem key={item.path} item={item} />;
            })}
          </div>
        </div>
        <div className="w-full mt-5 gap-2 flex flex-col">
          {data3.map((item) => {
            return <SidebarItem key={item.path} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={item.path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-10 w-full flex flex-row"
    >
      <Element transparent={isHovered} className="h-10 w-[5px]"></Element>
      <div className="p-2 -ml-[1px] z-20 px-3 flex flex-row gap-3 hover:bg-[#FFFFFF0D] rounded-r rounded-b backdrop-blur-md w-full">
        <div className="w-3 items-center justify-center flex ">{item.icon}</div>
        <div className="flex items-center text-[12px] text-[#FFFFFFB0]">
          <Link to={item.path}>{item.label}</Link>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
