import styled from "styled-components";
import PaymentHistory from "./PaymentHistory";
import PlanLimits from "./PlanLimits";
import PlanOffers from "./PlanOffers";

const Wrapper = styled.div`
  background: linear-gradient(152.58deg, #5e36ce 17.08%, #502eb0 98.96%);
  border-radius: 18px;
`;

const Overlay1 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684477673/subscription%20page/subsc_fhwzm4.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: top right;
  height: 100%;
  width: 100%;
  border-radius: 18px;
`;

const Overlay2 = styled.div`
  background-image: url(https://res.cloudinary.com/lpmaker/image/upload/v1684477673/subscription%20page/sub2_pipqrt.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  height: 100%;
  width: 100%;
  background-size: 80%;
  border-radius: 18px;
`;

const CommonHolder = () => {
  return (
    <div className="flex flex-row h-full relative w-full">
      <Wrapper className="h-full w-60 z-10">
        <Overlay1>
          <Overlay2>
            <div className="absolute overflow-hidden -top-1 -left-1 h-28 w-28 ">
              <div className="relative w-full h-full -ml-6 -mt-6">
                <h4 className="bg-green-500 text-center absolute top-1/2 -translate-y-1/2 w-full -rotate-45 shadow-md">
                  Active
                </h4>
              </div>
            </div>
            <div className="flex items-center justify-center pt-9">
              <div className="w-28 h-28 flex justify-center items-start bg-white rounded-full px-6 py-4 border-4 border-[#6117FF91] overflow-hidden relative">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/lpmaker/image/upload/v1684479936/subscription%20page/image_24pans_zm6ti1.png"
                  alt="trophy"
                />
                <div className="absolute w-full bottom-0 bg-gray-200 h-8 flex items-center justify-center text-xs">
                  #123
                </div>
              </div>
            </div>
            <div className="-mr-1.5 -ml-1.5 h-16 flex mt-5 justify-center flex-col bg-gradient-to-r from-[#FF9300] to-[#CE6A22] shadow-md">
              <p className="text-xs text-center text-white">You Are On</p>
              <p className="text-lg text-center text-white font-medium -mt-1">
                Premium Plan
              </p>
            </div>
            <PlanLimits />
            <p className="text-white/80 py-2 text-xs text-center">
              Next Payment Date: 15 June 2023
            </p>
            <div className="mx-3 mt-6">
              <button className="bg-[#3D1981] py-2 w-full  text-white text-sm rounded-lg">
                Upgrade Plan
              </button>
              <p className="text-white/80 py-2 text-xs text-center">
                Cancel Subscription
              </p>
            </div>
          </Overlay2>
        </Overlay1>
      </Wrapper>
      <div className="grow bg-white my-7 -ml-9 rounded-xl flex flex-row overflow-y-scroll">
        <div className="bg-black/40 w-10 blur-xl"></div>
        <div className="p-9 flex flex-col w-full ">
          <div className="bg-gray-100 border border-gray-300/50 p-4 w-full rounded-xl flex items-center">
            <div className="w-6/12 text-md text-gray-600">
              Your Subscription is Active. But You can Always Pay in Advance.
            </div>
            <div className="w-4/12 flex items-center justify-center text-sm text-gray-500">
              Extend For
              <div className="bg-gray-300/60 px-3 rounded py-1 -mt-1 mx-1 flex items-center">
                2
              </div>
              Months
            </div>
            <div className="w-2/12 text-sm text-right">
              <button className="px-6 text-white rounded-lg py-2 bg-gradient-to-r from-[#FF6B00] to-[#FF9900]">
                Pay Now
              </button>
            </div>
          </div>
          <PlanOffers />
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
};

export default CommonHolder;
