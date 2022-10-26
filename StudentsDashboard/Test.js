import React from 'react'

function Test() {
  return (
    <div>
        <div className="relative overflow-x-hidden">
  
  <header className="w-screen flex-none text-white flex justify-between px-8 pt-5 pb-32 overflow-x-hidden">
    <div className="flex">
      <button className="material-icons">menu</button>
      <h2 className="uppercase font-bold pl-5">Dashboard</h2>
    </div>
    <button className="fa fa-bell"></button>
  </header>
  
  <main className="flex-grow absolute mx-auto w-5/6">
    
    <section className="flex flex-col items-center shadow-lg rounded-lg p-5 bg-white">
      <img src="https://thumbs.dreamstime.com/z/beautiful-happy-woman-showing-love-sign-near-eyes-healthy-vision-portrait-holding-heart-shaped-hands-closeup-smiling-83939671.jpg" className="w-16 rounded-full mb-3" />
      <h5 className="text-md font-semibold whitespace-no-wrap overflow-hidden truncate w-full text-center">Ademola Abisola</h5>
      <p className="text-md font-semi-bold text-gray-600 whitespace-no-wrap overflow-hidden truncate w-full text-center">HND/17/COM/FT/202</p>
    </section>
    
    <ul className="p-5 bg-white mt-5 flex flex-rows flex-wrap">
      <li className="flex flex-col items-center justify-center mb-3 w-1/2">
        <i className="fa fa-phone text-gray-600"></i>
        <p className="text-md font-semibold ml-3">Syllabus</p>
      </li>
      <li className="flex flex-col items-center justify-center mb-3 w-1/2">
        <i className="fa fa-phone text-gray-600"></i>
        <p className="text-md font-semibold ml-3">Attendance</p>
      </li>
      <li className="flex flex-col items-center justify-center mb-3 w-1/2">
        <i className="fa fa-phone text-gray-600"></i>
        <p className="text-md font-semibold ml-3">Home Work</p>
      </li>
      <li className="flex flex-col items-center justify-center mb-3 w-1/2">
        <i className="fa fa-phone text-gray-600"></i>
        <p className="text-md font-semibold ml-3">Result</p>
      </li>
    </ul>
 
    
  </main>
</div>
    </div>
  )
}

export default Test