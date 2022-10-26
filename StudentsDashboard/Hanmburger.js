import React from 'react'

function Hanburger({OpenModal}) {
  return (
      <div onClick={OpenModal}>
           <div>
      <button class="relative group">
        <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
            <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div class="bg-white h-[1px] rounded"></div>
            <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>
    </div>
    </div>
  )
}

export default Hanburger