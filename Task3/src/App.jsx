import { useState } from 'react'
import './App.css'

function Counter(){
  const [Count , SetCount]= useState (0);

  const Increment=()=>SetCount(Count + 1);
  
  const Decrement=()=>SetCount(Count - 1);
  
  return(
    <div>
      <h2>Counter:{Count}</h2>
       <button onClick={Increment}>+ Increment</button>
       <button onClick={Decrement}>- Decrement</button>
    </div>
  );
}

export default Counter;

