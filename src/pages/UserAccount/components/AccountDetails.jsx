import { ContentItem } from "./ProfileCommon";

const AccountDetails = () => {
  return (
    <div className="p-7 grid grid-cols-3 gap-9">
      <div className="pb-3 flex flex-row flex-wrap justify-between gap-2">
        <h4 className="text-md mb-3 w-full">General Details</h4>
        <ContentItem label="Name" value="Ravinder" />
        <ContentItem label="Email" value="Ravinder@adymize.com" />
        <ContentItem label="Phone" value="9501674599" />
        <ContentItem label="Joining Date" value="22 - 6 - 2022" />
      </div>
      <div className="pb-3 flex flex-row flex-wrap justify-between gap-2">
        <h4 className="text-md mb-3 w-full">Billing Details</h4>
        <ContentItem
          label="Street Address"
          value="#172/19, Prem Nagar, Patiala"
        />
        <ContentItem label="Country" value="India" width="w-[48%]" />
        <ContentItem label="State" value="India" width="w-[48%]" />
        <ContentItem label="City" value="Patiala" width="w-[48%]" />
        <ContentItem label="Pincode" value="147001" width="w-[48%]" />
        <ContentItem label="GST Number" value="" />
      </div>
      <div className="bg-gray-100/70 rounded-lg">
        <h4 className="text-center text-md p-4">Quick Actions</h4>
        <div className="cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between">
          Change Password
          <div className="bg-gray-200 py-1 px-4 text-lg rounded">&gt;</div>
        </div>
        <div className=" mt-4 cursor-pointer bg-white shadow py-3 px-4 w-9/12 mx-auto rounded-md text-sm flex flex-row items-center justify-between">
          Check Subscription
          <div className="bg-gray-200 py-1 px-4 text-lg rounded">&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
