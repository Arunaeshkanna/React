import React from 'react'
import x from '../assets/img/okda.jpg'


const Profile = () => {
  return (
    <>
    <div className="h-full w-full flex  items-center">
      <div className="h-80  w-[70%] flex  items-center  font-bold text-black text-4xl justify-center">
        <h1>Hi👋folks Iam Arunaesh Kanna A K</h1>
      </div>
      <div className="w-[30%] h-80 flex justify-center items-center py-3 shadow-lg">
          <img src={x} alt="Profile" className="rounded-full h-60 w-60" />
      </div>
    </div>
    <div className="h-64 w-full justify-center items-center flex bg-yellow-500  text-black text-2xl font-bold" >
      <h1>Skilled in developing full-stack web applications using MongoDB, Express.js, React, and Node.js (MERN stack). Proficient in building responsive and dynamic user interfaces with React, creating RESTful APIs with Express.js, managing backend logic and database operations with Node.js and MongoDB. Adept at working in Agile environments, deploying applications on cloud platforms, and implementing secure authentication and authorization using JWT and OAuth. Experienced in version control (Git), performance optimization, and debugging complex applications.</h1>
    </div>

      </>
  )
}

export default Profile
