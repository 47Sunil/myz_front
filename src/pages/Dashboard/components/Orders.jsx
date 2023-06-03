import ArrowIcon from '../../../assets/svg/Arrow';
import Workflow from '../../../assets/images/workflow.png';
import ProfileImage from '../../../assets/icons/profileimagelogo.png';
const OrderActivity = ({ ordersActivity }) => {
  return (
    <div className='w-full mt-4 p-[1.313rem_1rem]  h-full bg-[rgba(255,255,255,0.08)] border border-solid border-[rgba(255,255,255,.3)] rounded-[29px]'>
      <div className='flex gap-4'>
        <div className='bg-white p-[9px] rounded-[10px] border-2 border-solid border-[rgba(255,107,0,1)] h-fit aspect-square object-cover w-[5rem]'>
          <img
            src={Workflow}
            alt=''
          />
        </div>
        <div className='right-text'>
          <h2 className='font-semibold text-2xl text-white'>Order Activity</h2>
          <p className='text-[#eaeaea] font-normal text-[14px] flex items-center gap-[5px] whitespace-nowrap'>
            All Orders <ArrowIcon />
            <span className='bg-gradient-reddot rounded-full w-[14px] h-[14px] inline-block'></span>
          </p>
        </div>
      </div>
      <div className='right-list'>
        {ordersActivity.map((data) => {
          return (
            <div className='bg-gradient-transparent-white shadow-[0_8px_70px_rgba(0,0,0,0.15)] rounded-[12px] mt-4 flex items-center p-[10px] justify-between'>
              <div className='flex items-center gap-2'>
                <div className='rightItemIcon'>
                  <img
                    src={ProfileImage}
                    alt=''
                  />
                </div>
                <div className='rightItemText'>
                  <h4 className='font-normal text-[16px] text-white'>
                    {data?.metadata.customer.name}
                  </h4>
                  <p className='font-light text-[10px] text-white'>
                    {data?.metadata.product.name}
                  </p>
                </div>
              </div>
              <div className='text-right'>
                <h4 className='font-normal text-[16px] text-white text-right bg-gradient-orange-text bg-clip-text text-transparent'>
                  &#8377;{data?.metadata.product.price}
                </h4>
                <p className='font-light text-[8px] text-white'>
                  4 minutes ago
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderActivity;
