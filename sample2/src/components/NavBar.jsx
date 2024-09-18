import React from 'react'

const Navbar = () => {
  return (
    <div className=" h-16 w-screen flex bg-yellow-500 p-3">
        <div className="w-[95%] h-full flex justify-center items-center ">
          <div className="w-[50%] h-full flex justify-center items-center font-bold text-xl text-white  gap-1">
            <h1>Arunaesh Kanna A K</h1>
          </div>
          <div className="h-full w-[50%] flex flex-row justify-center items-center ">
            <div className="h-full w-1/3 flex-row justify-center items-center font-bold text-xl text-white hover:bg-green-400">
              <h1>Profile</h1>            
            </div>
            <div className="h-full w-1/3 flex-row justify-center items-center font-bold text-xl text-white hover:bg-green-400">
              <h1>Project</h1>            
            </div>
            <div className="h-full w-1/3 flex-row justify-center items-center font-bold text-xl text-white hover:bg-green-400">
              <h1>Contact</h1>            
            </div>

        </div>
    </div>
  </div>

  )
}

export default Navbar;
