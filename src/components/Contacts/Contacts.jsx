import React from "react";
import "./Contact.css";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contacts = () => {
  return (
    <section id="contact" className="bg-imgg"> 
      <div className="container mt-14">
        <h1 className="text-[48px] font-[800] text-center text-white">
          <span className="text-orange-600 text-[52px] text-center">04</span>
          Контакты
        </h1>
        <div className="md:flex items-center justify-between sm:flex-row mt-8 cont">
          <div>
            <h2 className="font-[500] text-white">
              Экспертное решение по:
            </h2>
            <h2 className="font-[500] text-white">
            — Систематизации бизнеса
            </h2>
            <h2 className="font-[500] text-white">
            — Маркетингу/продажам
            </h2>
            <h2 className="font-[500] text-white">
            — Масштабированию
            </h2>
           
          </div>
          <div>
            <img src="https://anvarkhalikov.com/wp-content/uploads/2023/01/cropped-akh_logo-300x118.png" alt="" className="w-[300px] "/>
          </div>
          <div>
          <div className='icons'>
            <a href="https://www.instagram.com/anvarjon_khalikov/" className='item'>
            <LuInstagram  className='text-white w-[30px] h-[30px] mt-5 hover:text-orange-600 ease-in duration-75'/>
            </a>
            
            <a href="https://www.facebook.com/people/%D0%90%D0%BD%D0%B2%D0%B0%D1%80-%D0%A5%D0%B0%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2/pfbid035zfj5L1iuF8PdoUfjEjg2JjWvDJjhTRUbwa5Xdwu6LKFtcUPf9s8r9UnqJDuE6uml/" className='item'>
            <FaFacebookF  className='text-white w-[30px] h-[30px] mt-5 hover:text-orange-600 ease-in duration-75'/>
            </a>
           <a href="https://t.me/anvar_obbo" className='item'>
             <FaTelegram  className='text-white w-[30px] h-[30px] mt-5 hover:text-orange-600 ease-in duration-75' />
           </a>
           <a href="" className='item'>
            <MdOutlineMailOutline className='text-white w-[30px] h-[30px] mt-5 hover:text-orange-600 ease-in duration-75'/>
           </a>
        </div>
          </div>
        </div>
        <h1 className="font-[400] text-center text-white mt-14">
      Copyright © 2023 Anvar Khalikov
        </h1>
      </div>
    </section>
  );
};

export default Contacts;
