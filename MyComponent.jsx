import React from 'react'
import Child from "./Child"
const MyComponent = () => {
  return (
    <div
        style={{padding:"2rem",
                backgroundColor:"#9ED2BE",
        }}
    
    >
        <h1>MY COMPONENT</h1>
        <Child myFunc />
      
    </div>
  );
}

export default MyComponent;
