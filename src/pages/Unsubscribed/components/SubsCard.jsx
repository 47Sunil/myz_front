import React, { useState } from 'react';
import styled from 'styled-components';
import mesh_small from '../../../assets/images/mask_group.png';
import {
  subscriptionPlansYearly,
  subscriptionPlansMonthly,
} from '../../../utils/Data/subscriptionPlans';
import { Link } from 'react-router-dom';
import { usePaymentPendingMutation } from '../../../actions/Unsubscribed';
const Toggle = styled.div`
  width: 25%;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  height: 3rem;
  margin: 2rem auto 0;
  display: flex;
  padding: 5px;
  .item {
    border-radius: 21px;
    text-align: center;
    line-height: calc(3rem - 5px);
    flex-grow: 1;
    color: white;
  }
  .active {
    background: linear-gradient(148deg, #bd61ec 0%, #5e36ce 100%);
  }
`;

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
  border-end-end-radius: 27px;
  border-bottom-left-radius: 27px;
  width: 30%;
  border: solid 1px rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.09);
  .heading {
    background-color: white;
    text-align: center;
    width: 100%;
    h1 {
      color: #2e2e2e;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 1.35px;
    }
    .price {
      color: #6117ff;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1.26px;
    }
  }
  .list {
    padding: 1rem 2rem;
    color: white;
    .list-heading {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .listItem {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 15px;
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        left: 0;
        top: 7px;
        background: linear-gradient(180deg, #f90 0%, #ff6b00 100%);
        border-radius: 50%;
      }
    }
  }
  .cta {
    border: 2px dashed rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.17);
    color: white;
    padding: 0.2rem 0;
    width: 80%;
    text-align: center;
    margin-bottom: 1.5rem;
    span {
      text-decoration: underline;
    }
  }
  .btn {
    border-radius: 13px;
    background: linear-gradient(135deg, #f76f47 0%, #bd61ec 100%);
    border: none;
    color: white;
    width: 80%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 18px;
    margin-bottom: 2rem;
  }
`;

const SubsCard = ({ paymentStatus }) => {
  const [IsYearly, setIsYearly] = useState(true);
  const [IsMonthly, setIsMonthly] = useState(false);
  return (
    <div className='w-full h-full relative z-20'>
      <Toggle>
        <button
          className={IsYearly ? `item active` : `item`}
          onClick={() => {
            setIsYearly(!IsYearly);
            setIsMonthly(!IsMonthly);
          }}
        >
          Yearly
        </button>
        <button
          className={IsMonthly ? 'item active' : 'item'}
          onClick={() => {
            setIsMonthly(!IsMonthly);
            setIsYearly(!IsYearly);
          }}
        >
          Monthly
        </button>
      </Toggle>
      <div className='mt-8 relative flex justify-between px-[10rem]'>
        <div className='absolute w-[20%] left-[6%] top-[-5%]'>
          <img
            src={mesh_small}
            alt=''
          />
        </div>
        <div className='absolute w-[20%] rotate-180 right-[6%] bottom-[-10%]'>
          <img
            src={mesh_small}
            alt=''
          />
        </div>
        {IsYearly
          ? subscriptionPlansYearly.map((item, idx) => (
              <Card key={idx}>
                <div
                  className={
                    item.title === 'ADVANCED'
                      ? 'h-8 w-full absolute top-[-2rem] text-center bg-[#5E36CE] text-[16px] font-medium text-white leading-8'
                      : null
                  }
                >
                  {item.title === 'ADVANCED' && 'Best Value For Money Plan 🤩'}
                </div>
                <div className='heading'>
                  <h1>{item.title}</h1>
                  <div className='price'>&#8377; {item.price}</div>
                </div>
                <div className='list'>
                  <p className='list-heading'>{item.listHeading}</p>
                  {item.listItems.map((i, index) => {
                    return (
                      <p
                        className='listItem'
                        key={index}
                      >
                        {i}
                      </p>
                    );
                  })}
                </div>
                <div className='cta'>
                  Create Upto <span>{item.funnel} Funnels</span>
                </div>
                <Link
                  to={
                    paymentStatus === 'Payment Pending'
                      ? `/unsubscribed/pendingPayment`
                      : `/unsubscribed/form/${item.id}`
                  }
                  className='btn cursor-pointer'
                >
                  Choose Plan
                </Link>
              </Card>
            ))
          : subscriptionPlansMonthly.map((item, idx) => (
              <Card key={idx}>
                <div className='heading'>
                  <h1>{item.title}</h1>
                  <div className='price'>&#8377; {item.price}</div>
                </div>
                <div className='list'>
                  <p className='list-heading'>{item.listHeading}</p>
                  {item.listItems.map((i, index) => {
                    return (
                      <p
                        className='listItem'
                        key={index}
                      >
                        {i}
                      </p>
                    );
                  })}
                </div>
                <div className='cta'>
                  Create Upto <span>{item.funnel} Funnels</span>
                </div>
                <Link
                  to={`/unsubscribed/form/${item.id}`}
                  className='btn cursor-pointer'
                >
                  Choose Plan
                </Link>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default SubsCard;
