import styled from "styled-components";

const PaymentGatewayList = () => {
  return (
    <div className="bg-white w-full rounded-t-3xl mt-8">
      <div className="flex flex-row items-between p-4">
        <div className="bg-gray-200/80 rounded-lg border border-gray-300 w-64 h-10 flex items-center px-3 text-gray-700 text-sm">
          Search
        </div>
        <div className="grow justify-end items-center flex flex-row text-gray-700 text-sm">
          Showing
          <div className="bg-gray-200/80 w-12 h-8 mx-2 flex items-center justify-center pr-2 rounded-md border border-gray-300">
            5
          </div>
          of 5 Results
        </div>
      </div>
      <div className="w-full bg-gray-200/70 grid grid-cols-5 px-4 border-y border-gray-300">
        <div className="w-full border-r border-gray-300 py-2 text-sm">
          Payment Gateway
        </div>
        <div className="w-full border-r pl-3 border-gray-300 py-2 text-sm">
          Date Added
        </div>
        <div className="w-full border-r pl-3 border-gray-300 py-2 text-sm">
          Active Status
        </div>
        <div className="w-full border-r pl-3 border-gray-300 py-2 text-sm">
          Amount Collected
        </div>
        <div className="w-full pl-3 border-gray-300 py-2 text-sm">
          Quick Actions
        </div>
      </div>
      <ListItem item={res} />
      <ListItem item={res} />
      <ListItem item={res} />
      <ListItem item={res} />
    </div>
  );
};

const res = {
  icon: "https://res.cloudinary.com/lpmaker/image/upload/v1684185082/Supported%20Payment%20Gateways/rzpicon_kww6gv.png",
  title: "Yomize Gateway",
  brand: "Razorpay",
  date: "9 May 2023",
  active: true,
  collected: "24567 INR",
};

const ListItem = ({ item }) => {
  return (
    <>
      <div className="w-full grid grid-cols-5 px-4 py-3 text-gray-600 items-center">
        <div className="w-full text-sm flex gap-4 items-center">
          <img
            src={item.icon}
            className="w-14 h-14 p-3 bg-[#FFE7C3] rounded-full border-[#FFC978] border"
            alt={item.brand + " mini icon"}
          />
          <div className="w-full">
            {item.title}
            <p className="text-xs text-gray-600/60 -mt-1">{item.brand}</p>
          </div>
        </div>
        <div className="w-full pl-3 text-sm">{item.date}</div>
        <div className="w-full pl-3 text-sm">
          {item.active ? (
            <span className="bg-green-100 border border-green-800/50 rounded-xl px-4 py-1">
              Active
            </span>
          ) : (
            <span className="bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1">
              Not Active
            </span>
          )}
        </div>
        <div className="w-full pl-3 text-sm">{item.collected}</div>
        <div className="w-full pl-3 text-sm">
          {item.active ? (
            <button className="bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1">
              Deactivate
            </button>
          ) : (
            <button className="bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1">
              Activate
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentGatewayList;