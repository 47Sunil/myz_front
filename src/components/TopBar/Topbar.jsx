import userLogo from '../../assets/icons/userlogo.png';
import BellIcon from '../../assets/svg/BellLogo';

const TopBar = () => {
  return (
    <nav className='flex bg-[rgba(255,255,255,.05)] items-center flex-row-reverse h-[65px]'>
      <div className='flex flex-row-reverse text-right px-8 gap-4 items-center'>
        <div className='user-logo'>
          <img
            src={userLogo}
            alt=''
          />
        </div>
        <div className='text-[12px] font-semibold leading-[18px] uppercase text-white '>
          <p className='user-details__name'>Ravinder Singh</p>
          <p className='text-[10px] font-medium leading-[15px] capitalize text-[rgba(255,255,255,.71)] text-right'>
            Premium
          </p>
        </div>
      </div>
      <div className='border-x border-solid border-x-[rgba(255,255,255,.1)] px-4'>
        <BellIcon />
      </div>
    </nav>
  );
};
export default TopBar;
