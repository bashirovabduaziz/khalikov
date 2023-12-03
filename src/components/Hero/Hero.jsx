import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import './Hero.css'




const Hero = () => {
  return (
   <section className='pt-0'>
    <div className="container pt-14">
        <div className='md:flex items-center justify-between sm:flex-row mt-32 '>
                <div className="w-full md:basis-1/2 ">
                    <h1 className='text-white font-[600] text-[80px] '>Анвар Халиков</h1>
                    <p className='text-white font-[600] text-[16px]'>Предприниматель — бизнес практик</p>
                   
                </div>
                <div>

        </div>
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
   </section>
  )
}

export default Hero
