import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-gray-300 py-8">
        <div className="h-64 flex gap-6 justify-center items-center mb-8">
          <a href="mailto:arunaeshkanna9@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="h-16 w-16 flex justify-center items-center bg-yellow-500 text-white font-bold rounded-full hover:scale-110 transform transition-all duration-500 hover:bg-yellow-400 shadow-lg hover:shadow-2xl animate-float">
              <FaEnvelope size={25} />
            </div>
          </a>

          
          <a href="tel:+9994021365">
            <div className="h-16 w-16 flex justify-center items-center bg-green-500 text-white font-bold rounded-full hover:scale-110 transform transition-all duration-500 hover:bg-green-400 shadow-lg hover:shadow-2xl animate-float">
              <FaPhoneAlt size={25} />
            </div>
          </a>

          
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="h-16 w-16 flex justify-center items-center bg-blue-500 text-white font-bold rounded-full hover:scale-110 transform transition-all duration-500 hover:bg-blue-400 shadow-lg hover:shadow-2xl animate-float">
              <FaWhatsapp size={25} />
            </div>
          </a>

          
          <a href="https://www.instagram.com/iam_ak.." target="_blank" rel="noopener noreferrer">
            <div className="h-16 w-16 flex justify-center items-center bg-pink-500 text-white font-bold rounded-full hover:scale-110 transform transition-all duration-500 hover:bg-pink-400 shadow-lg hover:shadow-2xl animate-float">
              <FaInstagram size={25} />
            </div>
          </a>
        </div>

      
        <div className="text-black text-lg font-medium">
          <p>Email: arunaeshkanna9@gmail.com</p>
          <p>Phone: +9994021365</p>
          <p>WhatsApp: +9994021365</p>
          <p>Instagram: <a href="https://www.instagram.com/iam_ak.." className="underline">iam_ak.._</a></p>
        </div>

        
        <div className="mt-8 text-black text-lg">
          <h2 className="text-2xl font-bold text-black">Address:</h2>
          <p>123, Some Street, AK City, USA</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
