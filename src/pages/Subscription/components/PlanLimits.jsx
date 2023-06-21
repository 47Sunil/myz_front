import { useEffect, useState } from 'react';
// import { useQuery, useQueryClient } from 'react-query';
import { useSubscriptionPlanData } from '../../../actions/Subscription';

const PlanLimits = () => {
  const { data, isLoading } = useSubscriptionPlanData();
  return (
    <div className='bg-white mx-3 p-3 rounded-xl mt-5'>
      <h4 className='text-sm text-gray-800 font-medium text-center'>
        Plan Limits
      </h4>
      {!isLoading &&
        data?.data.map((item) => (
          <ProgressBar
            limit={item.limit}
            limitUsed={item.created}
            label={item.label}
          />
        ))}
      {/* <ProgressBar
        limit='12'
        limitUsed='11'
        label='Landing Page'
      />
      <ProgressBar
        limit='4'
        limitUsed='1'
        label='Domain'
      />
      <ProgressBar
        limit='20'
        limitUsed='8'
        label='Forms'
      /> */}
    </div>
  );
};

const ProgressBar = ({ limit = 12, limitUsed = 6, label }) => {
  const [progressColor, setProgressColor] = useState();
  const [progress, setProgress] = useState();

  useEffect(() => {
    if (limitUsed <= limit / 3) setProgressColor('#12837A');
    setProgress(100 / (limit / limitUsed));
    if (limitUsed <= (limit / 3) * 2 && limitUsed > limit / 3)
      setProgressColor('#E5D435');
    setProgress(100 / (limit / limitUsed));
    if (limitUsed > (limit / 3) * 2) setProgressColor('#AC2001');
    setProgress(100 / (limit / limitUsed));
  }, [limitUsed]);
  return (
    <>
      <div className='flex justify-between mt-2'>
        <span className='text-[11px] text-gray-700'>{label}</span>
        <span className='text-[11px] text-gray-500/40'>{limit}</span>
      </div>
      <div className='w-full bg-gray-100 rounded-full h-2 flex mt-1'>
        <div
          className='bg-gradient-to-r from-[#FF6B00] to-[#FF9900] h-full relative rounded-full'
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className='h-4 w-4 -ml-2 -mt-1 rounded-full z-10 text-[10px] flex items-center justify-center text-white'
          style={{ background: progressColor }}
        >
          {limitUsed}
        </div>
      </div>
    </>
  );
};

// const demoData = {
//   landing_page: {
//     limit: '12',
//     limitUsed: '8',
//   },
//   domain: {
//     limit: '12',
//     limitUsed: '1',
//   },
//   aiTokens: {
//     limit: '12',
//     limitUsed: '6',
//   },
//   forms: {
//     limit: '12',
//     limitUsed: '12',
//   },
// };
export default PlanLimits;
