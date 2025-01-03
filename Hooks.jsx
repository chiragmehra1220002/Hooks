   import React, { useState, useEffect, useRef } from 'react';
      import './Hooks.css'
    

    function Hooks() {
        const [count, setCount] = useState(0);
        const val = useRef(0);  
        let btnref = useRef();
    

        function handleIncrement() {
            val.current = val.current + 1;
            console.log("Value of val:", val.current);
            setCount(count + 1); 
        }

        useEffect(() => {
            console.log("Component only  re- rendered!");
        });
        function changeColor() {
            btnref.current.style.backgroundColor = "blue";
            }

        return (
            <div className='div2'>
            
                 
                <button style={{backgroundColor:'grey',color:'white'}}
                ref={btnref}
                onClick={handleIncrement}>
                Increment
                </button>
                <br/>
                <br/>
                <button onClick={changeColor}>
                Change Color of 1st Button
                </button>

                <br/>

                <div className ="div3">
                Count: {count}
                </div>
                <div className='ref-value-display'>Ref Value (val): {val.current}</div> 
            </div>
        );
    }
    export default Hooks;
        // */
//     import { createContext, useState } from 'react';
//     import './Hooks.css';
//     import ChildComponentA from './Components/ChildComponentA';

   
//     //step1: create Context
// const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer k andar jaake consume karlo 

// const ThemeContext = createContext();
//     const Hooks = () => {
//         const [user, setUser] = useState({name:"Chirag"});
//         const [theme, setTheme] = useState('light');
      
//       return (


//             <UserContext.Provider value={user}>
//                 <ThemeContext.Provider value={{theme,setTheme}}>
//                  <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
//                      <ChildComponentA />
//                  </div>
          
//                 </ThemeContext.Provider>
//             </UserContext.Provider>
       
         
         
//       )
//     }
    
//           export default Hooks;
//           export {UserContext}
//           export {ThemeContext}
    
