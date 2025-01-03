import React from 'react'
import { createContext } from 'react';
import MyComponent from './MyComponent'
//   ?  how to use context ?
//   ? step 1: import createContext from React
//   ? step 2: create a context outside the component
//   ? step 3: wrap application in context.Provider
//! provider,consumer
const AppContext = createContext();

const UseContext = () => {
    function myFunc(){
        console.log("Hello from my func");
    }
  return (
    <AppContext.Provider value={myFunc}>
        <div 
        style={{
            padding:"2rem",
            backgroundColor:"#C8E4B2",
            height:"100vh",
            // width:"100vh",
        }}
    >
        <h1>UseContext Hook</h1>
        <MyComponent myFunc={myFunc} />
      
        </div>{" "}
    </AppContext.Provider>
    
  )
}

export default UseContext;
export {AppContext};
