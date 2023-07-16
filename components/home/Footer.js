import React from 'react'

function footer() {
  return (
    <div className='bg-black'>
      <div className='grid justify-center pt-4'>
        <div className='gird justify-center'> 
         <p className='text-[15px] text-serif text-white' >For more imformations </p>
         <p className='text-[15px] text-serif text-white' >please contact us by</p>
       
        </div>
      </div>    

       <div className=' flex gap-3 pt-2 justify-center'>
        <div className='flex'>
          <img src='./img/facebook.png' alt='fblogo' className='flex justify-center h-10'/>
          <p className='text-[13px] text-serif text-white pt-2'>Facebook: Jackie Jack</p>
          <img src='./img/tel.jpg' alt='fblogo' className='flex justify-center h-10'/>
          <p className='text-[13px] text-serif text-white pt-2'>Tel: +85510522822</p>
        </div>
        <div className='flex'>
          <img src='./img/twitter.jpg' alt='fblogo' className='flex justify-center h-10'/>
          <p className='text-[13px] text-serif text-white pt-2'>Twitter: @jackiejazmine</p>

          <img src='./img/mail.png' alt='fblogo' className='flex justify-center h-10'/>
          <p className='text-[13px] text-serif text-white pt-2'>Twitter: @jackiejazmine</p>
        </div>
        
      
        
      </div>
    </div>
  )
}

export default footer
