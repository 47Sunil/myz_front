import razorPayLogo from '../../../../assets/icons/razorpay.png';
// * INDIVIDUAL PAYEMENT METHOD COMPONENT
const PaymentMethod = ({ title, brand, id, setIsSelected, isSelected }) => {
  return (
    <div className='bg-[rgba(255,255,255,0.1)] border-2 border-dashed border-[rgba(255,107,0,0.2)] flex flex-col justify-center items-center p-[24px_15px] gap-3 h-[200px] rounded-[15px] relative hover:outline hover:outline-white hover:outline-offset-4 hover:outline-2'>
      <div className='bg-white p-2 rounded-b-[30px] absolute top-0'>
        <img
          src={razorPayLogo}
          alt=''
        />
      </div>
      <div className='bg-white p-1 rounded-b-[30px]  invisible'>
        <img
          src={razorPayLogo}
          alt=''
        />
      </div>
      <div className='w-full text-center'>
        <p className='text-[14px] text-white leading-[18.9px] font-medium'>
          {title}
        </p>
        <p className='text-[12px] text-white leading-[18.9px] '>({brand})</p>
      </div>
      {isSelected === id ? (
        <div className='bg-gradient-landing-orange rounded-[6px] w-full'>
          <button
            className='bg-[rgba(0,0,0,.62)] text-white text-[14px] leading-[18.9px] text-center font-medium w-full rounded-[6px] py-1'
            onClick={() => setIsSelected('')}
          >
            Selected
          </button>
        </div>
      ) : (
        <button
          className='bg-gradient-landing-orange text-white text-[14px] leading-[18.9px] text-center font-medium w-full rounded-[6px] py-1'
          onClick={() => setIsSelected(id)}
        >
          Select
        </button>
      )}
    </div>
  );
};

export default PaymentMethod;
