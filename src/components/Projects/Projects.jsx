import React from 'react'

const Projects = () => {
  return (
    <section id='Projects'>
      <div className="container pt-14">
         <h1 className='text-[48px] font-[800] text-center '><span className='text-orange-600 text-[52px] text-center'>03</span>Мои проекты</h1>
         <div className="md:flex items-center justify-between sm:flex-row mt-8 cont">
          <div className='border border-solid border-gray-900 rounded-[8px] overflow-hidden cursor-pointer jjj mt-4'>
            <img src="https://anvarkhalikov.com/wp-content/uploads/2023/02/obbo-300x300.png" alt="" className='w-[200px] h-[200px]'/>
            <h1 className='text-center font-[600]'>OBBO Marketplace</h1>
            <a href="https://obbo.tj/" className='ml-11 mt-3'>сайт проекта</a>
          </div>
          <div className='border border-solid border-gray-900 rounded-[8px] overflow-hidden cursor-pointer jjj mt-4'>
            <img src="http://plp.na4u.ru/wp-content/uploads/2023/02/babolo-300x300.png" alt="" className='w-[200px] h-[230px]'/>
            <h1 className='text-center font-[600]'>Babolo Group</h1>
          </div>
          <div className='border border-solid border-gray-900 rounded-[8px] overflow-hidden cursor-pointer jjj mt-4'>
            <img src="http://plp.na4u.ru/wp-content/uploads/2023/02/aslzar-300x300.png" alt="" className='w-[200px] h-[200px]'/>
            <h1 className=' font-[600] text-center '>AslZar</h1>
            <a href="https://aslzar.com/" className='ml-11 mt-3'>сайт проекта</a>
          </div>
          <div className='border border-solid border-gray-900 rounded-[8px] overflow-hidden h-[250px] cursor-pointer jjj mt-4'>
            <img src="http://plp.na4u.ru/wp-content/uploads/2023/03/km.png" alt="" className='w-[200px] h-[70px] mt-[60px] xxx'/>
            <h1 className='text-center font-[600] mt-[70px] '>Kredit Market</h1>
            <a href="https://kreditmarket.tj/" className='ml-12 mt-3 ccc'>сайт проекта</a>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Projects