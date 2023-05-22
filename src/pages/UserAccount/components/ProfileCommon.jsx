import { useState } from "react";
import styled from "styled-components";
import AccountDetails from "./AccountDetails";
import PaymentHistory from "./PaymentHistory";

const Wrapper = styled.div`
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
  border-radius: 18px;
`;

const Overlay1 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684247150/Account%20page/Group_198_nhghcr.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

const Overlay2 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684247150/Account%20page/Group_200_u3zid6.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

const ProfileCommon = () => {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <>
      <div className="flex flex-col">
        <Wrapper className="w-full h-36 z-20 ">
          <Overlay1>
            <Overlay2 className="relative">
              <div className="w-32 h-32 absolute translate-x-1/2 right-1/2 bottom-0 bg-white rounded-full translate-y-1/2 bg-[#221154] p-1">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  alt="User Img"
                  className="rounded-full"
                />
              </div>
            </Overlay2>
          </Overlay1>
        </Wrapper>
        <div className="bg-black/50 w-11/12 mx-auto h-4  z-10 -mt-3 blur-md"></div>
        <div className="bg-white w-11/12 mx-auto -mt-2 pt-16 rounded-b-xl">
          <h4 className="w-full text-center py-4 text-lg">Ravinder Singh</h4>
          <div className="w-[500px] bg-gray-100 p-2 mx-auto rounded-full grid grid-cols-3 gap-2 text-sm">
            <div
              className={
                "w-full p-2 rounded-full text-center cursor-pointer " +
                (activeTab === 1 &&
                  ` bg-gradient-to-r from-[#D9CCFF] to-[#ECC8FF] `)
              }
              onClick={() => setActiveTab(1)}
            >
              Account Details
            </div>
            <div
              className={
                "w-full p-2 rounded-full text-center cursor-pointer " +
                (activeTab === 2 &&
                  ` bg-gradient-to-r from-[#D9CCFF] to-[#ECC8FF] `)
              }
              onClick={() => setActiveTab(2)}
            >
              Payment History
            </div>
            <div className="w-full p-2 rounded-full text-center text-gray-300 cursor-not-allowed">
              🔒 Manage Users
            </div>
          </div>
          {activeTab === 1 ? <AccountDetails /> : <PaymentHistory />}
        </div>
      </div>
    </>
  );
};

export const ContentItem = ({
  label,
  value,
  width = "w-full",
  editable = false,
  isEditing = false,
}) => {
  return (
    <>
      <div className={`relative flex flex-col ` + width}>
        <label htmlFor="" className="text-sm py-1">
          {label}
        </label>
        <input
          type="text"
          value={value}
          className="bg-gray-100 py-2 px-3 rounded-md text-sm h-10"
          readOnly={isEditing && editable}
          disabled={isEditing && editable}
        />
        {!isEditing && (
          <div className="h-10 w-full absolute bg-transparent bottom-0"></div>
        )}
      </div>
    </>
  );
};

export default ProfileCommon;
