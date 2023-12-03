import React from "react";

const Services = () => {
  return (
    <section id="servisec">
      <div className="container pt-14 mt-10">
        <h1 className="text-[48px] font-[800] text-center">
          <span className="text-orange-600 text-[52px] text-center">02</span>Мои
          сервисы
        </h1>
        <div className="md:flex sm:flex-row flex-wrap flex items-center justify-between mt-8 cont">
          <div className="w-[300px] h-[350px] ser-bg rounded-[8px] cursor-pointer hover:bg-orange-600 duration-500 ease-in hover:text-white mt-11">
            <img
              src="http://plp.na4u.ru/wp-content/uploads/2021/02/computer.png"
              alt=""
              className="w-[70px] h-[70px] mt-5 ml-[100px]"
            />
            <p className="font-[600] ml-[20px] mt-3">
              {" "}
              Разработка стратегического планирования (Видение, Миссия,
              Стратегия)
            </p>
            <p className="font-[600] ml-[20px]">
              Выбор ниши и подбор эффективной бизнес-модели
            </p>
            <p className="font-[600] ml-[20px]">Стратегический менеджмент</p>
            <p className=" font-[600] ml-[20px]"> Масштабирование бизнеса</p>
          </div>
          <div className="w-[300px] h-[350px] ser-bg rounded-[8px] cursor-pointer hover:bg-orange-600 duration-500 ease-in hover:text-white mt-11">
            <img
              src="http://plp.na4u.ru/wp-content/uploads/2021/02/ads.png"
              alt=""
              className="w-[70px] h-[70px] mt-5 ml-[100px]"
            />
            <p className="mt-3 font-[600] ml-[20px]">
              {" "}
              Разработка бренда и его продвижение
            </p>
            <p className="font-[600] ml-[20px]">
              Маркетинговая стратегия и увеличение прибыли
            </p>
            <p className="font-[600] ml-[20px]">
              Продвижение компании в онлайне
            </p>
            <p className="font-[600] ml-[20px]">
              {" "}
              Разработка стратегии эффективных продаж
            </p>
          </div>
          <div className="w-[300px] h-[350px] ser-bg rounded-[8px] cursor-pointer hover:bg-orange-600 duration-500 ease-in hover:text-white mt-11 sss">
            <img
              src="http://plp.na4u.ru/wp-content/uploads/2021/02/settings.png"
              alt=""
              className="w-[70px] h-[70px] mt-5 ml-[100px]"
            />
            <p className="mt-3 font-[600] ml-[20px]">
              Внедрение финансового учёта и контроля
            </p>
            <p className="font-[600] ml-[20px]">Аналитика и дашборды</p>
            <p className="font-[600] ml-[20px]">
              Финансовый анализ и оценка рисков
            </p>
            <p className="font-[600] ml-[20px]">
              {" "}
              Увеличение рентабельности бизнеса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
