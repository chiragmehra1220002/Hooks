import React from 'react'
import Grandchild from "./Grandchild";
const Child = () => {
  return (
    <div
        style={{
            padding:"2rem",
            backgroundColor:"#7EAA92"
        }}
    
    >
        <h2>Child</h2>
        <Grandchild myFunc />
      
    </div>
  )
}

export default Child;
