import React from 'react';
import { SiC, SiHtml5, SiCss3, SiPython, SiGit } from 'react-icons/si'; // Import icons from react-icons
import x from '../assets/img/okda.jpg';

const Profile = () => {
  return (
    <>
      <div className="h-full w-full flex items-center bg-gray-300">
        <div className="h-80 w-[70%] flex flex-col items-center font-bold text-black text-4xl justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1>
            Hi👋folks I am Arunaesh Kanna A K
          </h1>
          <div className="text-lg mt-4 flex space-x-4">
            <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              <SiC className="h-6 w-6 mr-2" />
              <span>C</span>
            </div>
            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out">
              <SiHtml5 className="h-6 w-6 mr-2" />
              <span>HTML</span>
            </div>
            <div className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
              <SiCss3 className="h-6 w-6 mr-2" />
              <span>CSS</span>
            </div>
            <div className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
              <SiPython className="h-6 w-6 mr-2" />
              <span>Python</span>
            </div>
            <div className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out">
              <SiGit className="h-6 w-6 mr-2" />
              <span>Git</span>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-80 flex justify-center items-center py-3">
          <img
            src={x}
            alt="Profile"
            className="rounded-full h-60 w-60 object-cover shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 animate-float"
          />
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce" />
      </div>

      <div className="h-64 w-full flex justify-center items-center bg-yellow-500 text-black text-2xl font-bold rounded-lg p-4 transition duration-300 ease-in-out hover:bg-yellow-600 hover:shadow-lg">
        <h1 className="leading-tight">
          Skilled in developing full-stack web applications using MongoDB,
          Express.js, React, and Node.js (MERN stack). Proficient in building
          responsive and dynamic user interfaces with React, creating RESTful
          APIs with Express.js, managing backend logic and database operations
          with Node.js and MongoDB. Adept at working in Agile environments and,
          deploying applications on cloud platforms, and implementing secure, fast
          authentication and authorization using JWT and OAuth. Experienced in the
          version control (Git), performance optimization, and debugging complex
          applications.
        </h1>
      </div>
    </>
  );
};

export default Profile;
