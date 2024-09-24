import React from 'react';
import x from '../assets/img/bit-3.jpeg';
import y from '../assets/img/LMD.png';
import z from '../assets/img/qr code.jpeg';

const Project = () => {
  return (
    <>
      <div className="text-3xl font-bold text-center my-6">Projects</div>

      
      <div className="h-64 w-full flex justify-center items-center gap-8">
        <div className="h-64 w-60 bg-yellow-500 flex justify-center items-center rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out bg-gray-300">
          <img src={x} alt="Bitcoin Price Prediction" className="rounded-full h-60 w-60 hover:translate-x-3 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="h-64 w-60 bg-yellow-500 flex justify-center items-center rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
          <img src={y} alt="Landmark Detection using Machine Learning" className="rounded-full h-60 w-60 hover:translate-x-3 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="h-64 w-60 bg-yellow-500 flex justify-center items-center rounded-lg transform hover:scale-105 transition-all duration-500 ease-in-out">
          <img src={z} alt="QR Code" className="rounded-full h-60 w-60 hover:translate-x-3 transition-transform duration-500 ease-in-out" />
        </div>
      </div>

      
      <div className="h-64 w-full flex justify-center items-center gap-8 mt-4">
        <div className="h-64 w-60 bg-gray-300 p-4 flex justify-center items-center font-bold text-black rounded-lg hover:bg-gray-400 hover:translate-x-2 transition-transform duration-500 ease-in-out">
          <h1>
            The goal is to ascertain with what accuracy can the direction of Bitcoin price in USD can be predicted. The price data is sourced from the Bitcoin Price index.
          </h1>
        </div>
        <div className="h-64 w-60 bg-gray-300 p-4 flex justify-center items-center font-bold text-black rounded-lg hover:bg-gray-400 hover:translate-x-2 transition-transform duration-500 ease-in-out">
          <h1>
            Landmark detection is the task of identifying and localizing landmarks in images. This project develops a detection system using the Google Landmarks v2 dataset.
          </h1>
        </div>
        <div className="h-64 w-60 bg-gray-300 p-4 flex justify-center items-center font-bold text-black rounded-lg hover:bg-gray-400 hover:translate-x-2 transition-transform duration-500 ease-in-out">
          <h1>
            Basic QR Code Generators allow users to create static QR codes with encoded content like text or URLs. These codes are permanent and non-trackable.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Project;
