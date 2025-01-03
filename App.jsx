// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// custom hooks

// useState
// useEffect
// useRef
// useReducer
// useContext

import UseFetch from "./customHooks/UseFetch";

function App() {
    const { data, isPending, error } = UseFetch(
        "https://jsonplaceholder.typicode.com/users/"
    );

    if (isPending) {
        return <h2>Loading ....</h2>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }
    return (
        <>
            {data &&
                data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                        </div>
                    );
                })}
        </>
    );
}

export default App;