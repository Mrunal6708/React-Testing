import { useState } from 'react'
import './App.css'


function counter(){
  const [Count, SetCount]= useState(0);

  const handaleIncrement =()=>{
    SetCount(Count +1);
  };
  const handaleDecrement =()=>{
    SetCount(Count -1)
  }; 
  return (
    <div className='App'>
       <h2>Counter:{Count}</h2>
       <button onClick={handaleIncrement}>- Increment</button>
       <button onClick={handaleDecrement}>+ Decrement</button>
    </div>
  );
}

export default counter
