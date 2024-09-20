import React from 'react'
import x from '../assets/img/bit-3.jpeg'
import y from '../assets/img/LMD.png'
import z from '../assets/img/qr code.jpeg'


const Project = () => {
  return (
    <>
    <div>Projects</div>
      <div className="h-64 w-50 flex justify-center items-center gap-8">
        <div className="h-64 w-60 bg-yellow-500 flex justify-center items-center border-">
          <img src={x} alt="BitCoin Price Prediction" className="rounded-full h-60 w-60" />
        </div>
        <div className="h-64 w-60 bg-yellow-500 flex justify-center items-center">
          <img src={y} alt="Landmark Dedection using Machine Learning" className="rounded-full h-60 w-60" />
        </div>
        <div className="h-64 w-60 flex justify-center items-center bg-yellow-500 p-5">
          <img src={z} alt="Qr Code" className="rounded-full h-60 w-60" />
        </div>
      </div>
      <div className="h-64 w-50 flex justify-center items-center gap-8">
        <div className="h-64 w-60 flex justify-center items-center bg-gray-300 font-bold text-black">
          <h1>The goal is to ascertain with what accuracy can the direction of Bitcoin price in USD can be predicted. The price data is sourced from the Bitcoin Price index.</h1>
        </div>
        <div className="h-64 w-60 flex justify-center items-center bg-gray-300 font-bold text-black ">
          <h1>Landmark detection is the task of identifying and localizing landmarks in images. This is a challenging task due to the variability of landmarks in appearance, pose, and illumination. In this project, we will develop a landmark detection system using the Google Landmarks v2 dataset.</h1>
        </div>
        <div className="h-64 w-60 flex justify-center items-center bg-gray-300 font-bold text-black">
          <h1>Basic QR Code Generators allow users to create Static QR Codes. These QR Codes have content (text, URL, etc.) encoded into the QR Codes (just like a barcode). For the uninitiated, a Static QR Code is permanent and non-trackable.</h1>
        </div>
      </div>
    </>
  )
}

export default Project
