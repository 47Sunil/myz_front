import React from 'react'

const HeaderBar = () => {
  return (
   <>
    <div className='h-full flex p-2 items-center flex-row justify-end'>
        <div className="my-2 px-4 border-y-0  border border-[#FFFFFF1A] text-[#908C99]">
            Bell
        </div>
        <div className="p-2  grid grid-cols-12 gap-2">
            <div className="col-span-8 flex flex-col items-end justify-center">
                <p className='text-sm text-white'>Ravinder</p>
                <p className='text-xs -mt-0.5 text-[#FFFFFFB5]'>Testt</p>
            </div>
            <div className="col-span-4">
                <img className='rounded-circle w-9 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
            </div>
        </div>
    </div>
   </>
  )
}

export default HeaderBar