import React, { useEffect, useState } from 'react'
import Data from '../../shared/Data'
console.log(Data)
function CategoryList() {
    const [games,setGames] = useState(null);
    useEffect(()=>{
        setGames(Data.categoryList)
    },[])
   
return (
    <div className='flex justify-center '>
      {games&& games.map((game)=>(
        <div className='flex flex-col items-center cursor-pointer '>
         
            <img src={`/img/${game.image}`} width={80} height={45} className=' hover:animate-bounce transitions-all duratin-150'/> 
            <h2 className='text-[15px] text-center'>{game.name}</h2> 
            
        </div>
      ))}
    </div>
  )
}

export default CategoryList
