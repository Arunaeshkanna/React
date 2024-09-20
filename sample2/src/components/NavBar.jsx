import React from 'react'
import{Link,NavLink} from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className=" h-16 w-screen flex bg-yellow-500 p-3">
        <div className="w-[95%] h-full flex justify-center items-center ">
          <div className="w-[50%] h-full flex justify-center items-center font-bold text-xl text-white  gap-1">
            <button>Arunaesh Kanna A K</button>
          </div>

          <div className="h-full w-[50%] flex flex-row justify-center items-center ">
            <div className="h-full w-1/3 flex justify-center items-center font-bold text-xl text-white hover:bg-green-400 ">
              
                <button>Profile</button> 
                  
            </div>
            
            <div className="h-full w-1/3 flex justify-center items-center font-bold text-xl text-white hover:bg-green-400">
              <Link to={'./project'}>
                <button>Project</button>
              </Link>            
            </div>
            
            <div className="h-full w-1/3 flex justify-center items-center font-bold text-xl text-white hover:bg-green-400">
            <Link to={'./contact'}>
              <button>Contact</button> 
            </Link>           
            </div>
            

        </div>
    </div>
  </div>

  )
}

export default Navbar;
