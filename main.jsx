import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import Hooks from "./hooks.jsx";

// import UseMemoHook from './UseMemoHook.jsx';
// import UseReducer from './UseReducer.jsx';
// import CustomHooks from './CustomHooks';
// import UseContext from './UseContext';
import UseCallback from "./UseCallback.jsx"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCallback/>
  </StrictMode>,
)
