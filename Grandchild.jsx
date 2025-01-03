import {useContext} from 'react';
import { AppContext } from './UseContext';


const Grandchild = () => {
   const returnedValFromContext= useContext(AppContext);
  
  return (
    <div
        style={{
            padding:"2rem",
            backgroundColor:"#FFD987",
        }}
    
    >
        <h3>Grandchild</h3>
        <button onClick={returnedValFromContext}>Call My Func</button>
      
    </div>
  )
}

export default Grandchild;
