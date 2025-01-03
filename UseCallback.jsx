import React,{useState,useCallback} from 'react'

const UseCallback = () => {
        const[count,setCount] = useState(0);
        const increment = useCallback(() => {
            setCount(count +1 );
        },[count]);
    
  return (
    <div>
         <p>count:{count}</p>    //! state up lifting 
       <button  onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallback
