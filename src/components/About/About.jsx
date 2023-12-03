import React from "react";
import "./About.css";
import Nout from'../../img/hhhh.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container pt-14">
      <h1 className="text-[48px] font-[800] text-center">
              <span className="text-orange-600 text-[52px] text-center">01</span>Обо мне
            </h1>
        <div className="md:flex sm:flex-row flex-wrap flex items-center justify-between cont">
            
              <div>
                <h1 className="text-[30px] font-[700] w-[300px] mt-4 ">
                  Помогаю создать системный бизнес
                </h1>
                <p className="text-gray-600 w-[380px] font-[300] mt-5">
                  Эксперт в области анализа и систематизации бизнес-проектров,
                  продаж и маркетинга.
                </p>
                <a href="https://t.me/anvar_obbo">Связатся</a>
              </div>
              <div className="">
                <h4 className="text-gray-800 font-[600] text-[16px] mt-5">
                  Сооснователь проектов:
                </h4>
                <p className=" font-[500]">— OBBO Marketplace</p>
                <p className=" font-[500]">— AslZar</p>
                <p className=" font-[500]"> — Babolo Group</p>
                <p className=" font-[500]"> — Kredit Market</p>
                <h4 className="text-gray-800 font-[600] text-[16px] mt-8">
                  Высшее образование:
                </h4>
                <p className=" font-[500]">1) Финансы</p>
                <p className=" font-[500]">2) Маркетинг</p>
                <h4 className="text-gray-800 font-[600] text-[16px] mt-8">
                  Допольнительное:
                </h4>
                <p className="font-[500] w-[350px]">
                  Выпускник Summer Academy of Frankfurt School. (Германия,
                  Франкфурт) и «Cochran Fellowship Program» США, Миссури,
                  Чикаго.
                </p>
                <p className="font-[500] w-[320px] mt-4">
                  С 2014 года – успешный предприниматель, стартап-менеджер и
                  бизнес-практик. Участник многих международных конференций и
                  семинаров в Турции, Германии, США, Китай, ОАЭ, России,
                  Казахстане, Узбекистане, Кыргызстане и Таджикистане.
                </p>
              </div>
              <div className="bg-black h-[450px] rounded-[8px]">
                <img src={Nout} alt="" className="w-[300px] h-[400px] rounded-[8px] ml-[-20px] mt-5"/>
              </div>
            </div>
          </div>
    </section>
  );
};

export default About;
