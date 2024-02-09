import React, { useState } from 'react'
import Square from './Square'


function Game() {
  const[state,setState]=useState(Array(9).fill(null));
  const[isXTurn,setIsXTurn]=useState(true)
 
  const checkWinner=()=>{
    const winner=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  
     for(let logic of winner){
      const[a,b,c]=logic;
      if(state[a]!==null && state[a]=== state[b] && state[a]=== state[c] && state[b]=== state[c]){
        return state[a];
      }
     }
     return false;
    };

    const isWinner= checkWinner();

  const handleClick=(index)=>{
    if(state[index] !==null){
      return;
    }
    
    const copystate=[...state]
    copystate[index]= isXTurn? "X": "O";
    setState(copystate);
    setIsXTurn(!isXTurn);
  }

  const handleReset=()=>{
    setState(Array(9).fill(null))
  }
  return (
    <div>
      {
        
        isWinner ? 
        <>
        <h1 className='text-center text-5xl py-6'>Player {isWinner} Won</h1>
        <div className='grid place-items-center pt-6 '>
        <button  onClick={()=>{handleReset()}} className='w-36 h-12 border-4 rounded-xl bg-[#007bff]  border-pink-400 '>Play Again</button>
        </div>
        </> :
        <div>
        <h4 className='text-center py-4 text-4xl text-white'>Player {isXTurn?"X":"O"} Move</h4>
        <div className='row1 flex'>
           <Square  onClick={()=>{ handleClick(0)}} value={state[0]} />
           <Square  onClick={()=>{handleClick(1)}} value={state[1]} />
           <Square  onClick={()=>{handleClick(2)}} value={state[2]} />
        </div>
        <div className='row2 flex'>
            <Square  onClick={()=>{handleClick(3)}} value={state[3]} />
            <Square  onClick={()=>{handleClick(4)}} value={state[4]} />
            <Square  onClick={()=>{handleClick(5)}} value={state[5]} />
        </div>
        <div className='row3 flex'>
            <Square  onClick={()=>{handleClick(6)}}  value={state[6]} />
            <Square  onClick={()=>{handleClick(7)}} value={state[7]} />
            <Square  onClick={()=>{handleClick(8)}} value={state[8]} />
        </div>
        <div>
          <div className='grid place-items-center py-6'>
            <button onClick={()=>{handleReset()}} className='w-36 h-12 border-2 rounded-xl bg-[#007bff] border-pink-400'>Reset</button>
          </div>
        </div>
       </div>
      }
       
    </div>
  )
}

export default Game
