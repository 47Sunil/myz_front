import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import { DownloadIcon } from "./icons";

const PaymentHistory = () => {
  return (
    <div className="flex flex-col mt-6 pb-9">
      <h4 className="font-medium text-lg mb-3">Payment Invoices</h4>
      <div className="bg-gray-100 grid grid-cols-6 p-3 rounded-t-xl">
        <div className="w-full text-sm font-medium border-r border-gray-300">
          Invoice Id
        </div>
        <div className="w-full text-sm font-medium border-r pl-3 border-gray-300">
          Status
        </div>
        <div className="w-full text-sm font-medium border-r pl-3  border-gray-300">
          Date Created
        </div>
        <div className="w-full text-sm font-medium border-r pl-3  border-gray-300">
          Expiry Date
        </div>
        <div className="w-full text-sm font-medium border-r pl-3  border-gray-300">
          Amount
        </div>
        <div className="w-full text-sm font-medium pl-3  border-gray-300">
          Actions
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <ListItem
            invoiceId={item.invoiceId}
            status={item.status}
            dateCreated={item.dateCreated}
            dateExpiry={item.dateExpiry}
            amount={item.amount}
            diffrentColor={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

const ListItem = ({
  invoiceId,
  status,
  dateCreated,
  dateExpiry,
  amount,
  diffrentColor,
}) => {
  return (
    <div
      className={
        "grid grid-cols-6 p-3 " +
        (!diffrentColor ? "bg-gray-100 border-y border-gray-200" : "bg-white")
      }
    >
      <div className="w-full text-sm font-medium">{invoiceId}</div>
      <div className="w-full text-sm pl-3 uppercase tracking-wide ">
        {status}
      </div>
      <div className="w-full text-sm pl-3 ">{dateCreated}</div>
      <div className="w-full text-sm pl-3 ">{dateExpiry}</div>
      <div className="w-full text-sm pl-3 ">{amount}</div>
      <div className="w-full text-sm pl-3 flex flex-row gap-4">
        <div className="cursor-pointer bg-white shadow border border-gray-100 w-5 h-5 rounded flex items-center justify-center">
          <DownloadIcon color="#444444" className="h-2.5" />
        </div>
        {status !== "paid" && (
          <div className="cursor-pointer bg-yellow-300 border border-yellow-600/40 px-3 text-xs h-5 rounded flex items-center justify-center">
            Pay
          </div>
        )}
      </div>
    </div>
  );
};

const data = [
  {
    invoiceId: "#1234",
    status: "paid",
    dateCreated: "12 june 2022",
    dateExpiry: "20 june 2022",
    amount: 69,
  },
  {
    invoiceId: "#1234",
    status: "paid",
    dateCreated: "12 june 2022",
    dateExpiry: "20 june 2022",
    amount: 69,
  },
  {
    invoiceId: "#1234",
    status: "paid",
    dateCreated: "12 june 2022",
    dateExpiry: "20 june 2022",
    amount: 69,
  },
  {
    invoiceId: "#1234",
    status: "not paid",
    dateCreated: "12 june 2022",
    dateExpiry: "20 june 2022",
    amount: 69,
  },
];

export default PaymentHistory;
