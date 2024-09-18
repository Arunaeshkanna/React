import React from "react";
const App = () => {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center bg-purple-500">
            <div className="h-4/6 w-[30%] flex justify-center items-center bg-white rounded-md-shadow-2xl">
            <form className="h-[80%] w-[80%] flex flex-col justify-center items-center gap-4">
            <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="text" name="" id="" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="number" name="" id="" placeholder="phone" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="password" name="" id="" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <button type="submit" className=" p-2 w-full bg-purple-600 text-white" onsubmit="f1()"> Register</button>
            </form>
            </div>
            </div>
            function f1(){
                alert("Login success...")
            }
        </>
        
    )
}
export default App;