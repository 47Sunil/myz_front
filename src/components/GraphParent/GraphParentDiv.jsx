import React from 'react';

const GraphParentDiv = () => {
  const [lastUsedDays, setLastUsedDays] = useState('7');
  const arr = ['Last 7 days', 'Last 15 days', 'Last 30 days'];
  const [graphFilter, setGraphFilter] = useState('Last 7 days');
  return (
    <div className='rounded-[13px] bg-white w-full h-full flex flex-col'>
      <div className='rounded-t-[13px] p-[.5rem_1rem] bg-gradient-landing-orange flex items-center justify-between'>
        <p className='text-[19px] text-white font-semibold tracking-[.38px]'>
          Page Views
        </p>
        <Menu
          as='div'
          className='relative inline-block text-left'
        >
          <Menu.Button
            className={
              'inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-[rgba(0,0,0,.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center gap-1'
            }
          >
            <p className='text-[17px] text-[rgba(255,255,255,0.79)]'>
              {graphFilter}
            </p>
            <p className='text-[17px] text-[rgba(255,255,255,0.79)]'>
              <IoMdArrowDropdown />
            </p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                {arr.map((item) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-gradient-landing-blue text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={(item) => handleGraphFilter(item)}
                        >
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='graph h-full w-full px-[1rem]'>
        <Line
          options={options}
          data={graphData}
        />
      </div>
      <div className='rounded-b-[13px] border-t border-[#dbdbdb] bg-[#f4f4f4] w-full h-[10%]'></div>
    </div>
  );
};

export default GraphParentDiv;
