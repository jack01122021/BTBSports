import React from 'react'
import { Avatar, Button,} from '@mui/material'

function header() {
  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#ff3366] bg-slate-900'>
      <div className='flex'> 
      <img src="./img/Untitled.png" className='h-12' alt='logo'/>
      <b className='text-[35px] text-serif text-white' >BTB Sport</b>
  

      </div>
      
      <div className='flex gap-8 pt-3'>
        <Button className='bg-[#ff3366] p-2 px-3 text-white h-min' size='sm' >Creat Posts</Button>
        <Button className='bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full h-min ' size='sm'>Sign in</Button>
        <Avatar/>
      </div>
      
    </div>
  )
}

export default header
