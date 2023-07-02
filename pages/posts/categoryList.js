import React, { useEffect, useState } from 'react'
import Data from './../../shared/Data'
console.log(Data)
function categoryList() {
    const [games,setGames] = useState(null);
    useEffect(()=>{
        setGames(Data.categoryList)
    },[])
   
return (
    <div className='flex'>
      {games&& games.map((game)=>(
        <div>
            <img src={`/img/${game.image}`}/> 
            <h2 className='text-[14px] text-center'>{game.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default categoryList
