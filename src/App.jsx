import React, { useRef } from "react";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Logo from "./img/Logo.png";
import { MdMenu } from "react-icons/md";
import "./App.css";
import { IoIosSend } from "react-icons/io";
import Hero from "./components/Hero/Hero";


const App = () => {
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (

    <>
    <div className="bg-img">
      <header className="w-full leading-8 flex items-center">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="" />
            </div>
            <div className="menu" onClick={toggleMenu} ref={menuRef}>
              <ul className="flex items-center gap-10">
                <li className="text-gray-600  font-[500] ">
                  <a href="#about" className="active hover:text-orange-600 ease-in duration-75">Обо мне</a>
                </li>
                <li className="text-gray-600  font-[500]">
                  <a href="#servisec" className="active hover:text-orange-600 ease-in duration-75">Услуги</a>
                </li>
                <li className="text-gray-600  font-[500]">
                  <a href="#Projects" className="active hover:text-orange-600 ease-in duration-75">Проекты</a>
                </li>
                <li className="text-gray-600 font-[500]">
                  <a href="#contact" className="active hover:text-orange-600 ease-in duration-75">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <a className="flex items-center gap-2 font-[600] text-orange-600 border border-solid border-orange-600 py-2 px-4 rounded-[8px] hover:bg-orange-600 hover:text-white ease-in duration-300 cursor-pointer" href="https://t.me/anvar_obbo">
              <IoIosSend /> Связаться   
              </a>
              <span className="text-2xl text-gray-600 border border-solid border-gray-600 rounded-[5px] cursor-pointer md:hidden" onClick={toggleMenu}>
                <MdMenu />
                </span>          
            </div>

          </div>
        </div>
      
      </header>
      <Hero />
      </div>
      <About />
      <Services />
      <Projects />
      <Contacts />
    </>
  );
};

export default App;
