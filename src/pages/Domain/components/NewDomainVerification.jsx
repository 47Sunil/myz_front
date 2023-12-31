import React from 'react';

const NewDomainVerification = () => {
  return (
    <SecondScreenWrapper>
      <div className='w-[60vw] h-[80vh] bg-gradient-add-domain-orange z-10 rounded-[63px] absolute top-[130px] left-[50%] translate-x-[-50%] overflow-hidden'>
        <img
          src={starbg}
          alt=''
          className='absolute object-contain'
        />
      </div>
      <div className='w-[62vw] h-[70vh] bg-[#100921] rounded-[22px] z-20 absolute top-[170px] left-[25%] flex flex-col'>
        <div className='w-full h-[100px] bg-black rounded-t-[22px] border-b border-solid border-b-[rgba(255,255,255,.15)] flex flex-col py-4 px-8 justify-between'>
          <h1 className='font-medium text-[27px] leading-[121%] text-white '>
            Adding Domain
          </h1>
          <p className='capitalize font-normal text-[17px] leading-[121%] text-white'>
            are you ready to launch your converting landing pages with{' '}
            <span className='bg-gradient-add-domain-purple-text bg-clip-text text-transparent'>
              magic!
            </span>
          </p>
        </div>
        <div className='py-8 pl-4 flex-grow'>
          <div className='pr-[27rem]'>
            <DynamicInputManager
              htmlId='domain-name'
              label='Enter Domain name'
              isRequired={true}
              placeholder={'tedx.com'}
              states={[domainName.domain_name, setDomainName, 'domain_name']}
              multiline={false}
              type={'text'}
              lock={true}
            />
          </div>
          <div className='pl-5 pt-1'>
            <h2 className='font-normal text-[19px] text-white leading-[121%] mb-4'>
              Add the Following DNS Records
            </h2>
            <div className='w-[29rem] h-[196px] bg-[rgba(255,255,255,0.11)] border border-solid border-[rgba(255,255,255,0.16)] rounded-[11px] p-3'>
              <div className='grid grid-cols-domain gap-2 w-full'>
                <h3 className='text-white text-center'>Name</h3>
                <h3 className='text-white text-center'>Value</h3>
                <h3 className='text-white text-center'>Type</h3>
                <div className='bg-[#121019] rounded-[9px] flex flex-col px-2 py-1'>
                  <p className='text-[rgba(255,255,255,0.66)] text-[14px] leading-[121%] whitespace-nowrap overflow-hidden text-ellipsis border-b border-solid border-[rgba(255,255,255,.14)] py-2'>
                    name
                  </p>
                </div>
                <div className='bg-[#121019] rounded-[9px]'>
                  <p className='text-[rgba(255,255,255,0.66)] text-[14px] leading-[121%] whitespace-nowrap overflow-hidden text-ellipsis border-b border-solid border-[rgba(255,255,255,.14)] px-1 py-2'>
                    value
                  </p>
                </div>
                <div className='bg-[#121019] rounded-[9px]'>
                  <p className='text-[rgba(255,255,255,0.66)] text-[14px] leading-[121%] whitespace-nowrap overflow-hidden text-ellipsis border-b border-solid border-[rgba(255,255,255,.14)] py-2 px-3 text-center'>
                    type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[100px] bg-[rgba(255,255,255,0.04);] rounded-b-[22px] flex items-center py-4 px-8 '>
          <Link
            to='/domain/add_dns'
            className='w-[300px] h-[58px] rounded-[10px] font-semibold text-xl leading-[58px] text-center bg-gradient-orange-text text-white'
          >
            Verify Details
          </Link>
          <Link
            to='/domain/add_dns'
            className='w-[300px] h-[58px] rounded-[10px] font-semibold text-xl leading-[58px] text-center  text-white'
          >
            Change Domain
          </Link>
        </div>
      </div>
    </SecondScreenWrapper>
  );
};

export default NewDomainVerification;
