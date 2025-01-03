// ? ================= useMemo() Hook ===============
//? To handle heavy functions in a component we have to use it.
//? syntx :useMemo(heavyfn,[dependencies])
//? as dependencies changes the function will execute.
//? as we are using useMemo we are not supposed to invoke the function.
import React, {useEffect, useMemo,useState} from 'react'



const UseMemoHook = () => {
    let[counter1,setCounter1] = useState(0);
    let[counter2,setCounter2] = useState(10);

    let handleCounter1 = () => setCounter1(counter1 +1);
    let handleCounter2 = () => setCounter2(counter2 + 1);


    let isEven = useMemo(() =>{
        //heavy fn
        console.log("isEven() Working");
        for(let i = 0; i <= 100000000;i++){}
        return counter1 % 2 === 0;
    },[counter1]);
  return (
    <center>
        <h1>useMemo () Hook</h1>
        <h2>
            Counter 1: {counter1} - is - {isEven ? "Even" : "Odd"}
        </h2>
        <button onClick={handleCounter1}>Update</button>
        <h2>Counter 2 : {counter2}</h2>
        <button onClick={handleCounter2}>Update</button>
    </center>
  );
};
// import React , {useMemo, useState} from "react";
// const UseMemoHook =  () => {
//     const[number,setNumber] =useState(0);
//     const[dark,setDark] = useState(false);
//    const memoCalculation= useMemo(()=>{
//         return expensiveFunction(number);
//     },[number])
//     const calculation = expensiveFunction(number);
//     const cssStyle = {
//         backgroundColor : dark ? "black" : "white",
//         color:dark ? "white" : "black",
//     };
//     return (
//         <div style = {cssStyle}>
//             <input 
//             onChange={(e) => setNumber(e.target.valueAsNumber)}
//             type='number'
//             value={number}
//             />
//             <h2>Calculation:{memoCalculation}</h2>
//             <button onClick={() => setDark(!dark)}>Toggle</button>
           
//         </div>
//     );
// };
// function expensiveFunction(num){
//     console.log("Loop started");
//     for (let i = 0; i < 1000000000; i++){}
//     return num;
// }

 export default UseMemoHook;
