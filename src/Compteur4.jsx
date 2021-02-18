import React, {useState, useEffect} from 'react';


const Compteur4 = () => {


    const useIncrement = (initial = 0, step = 1) => {
        const [myCount, setMyCount] = useState(initial)

        const increment = (c) => c+step 
        return[myCount, increment]
    }
    

    const [count, setCount] = useIncrement(20,1)

        return (
        <div>
            <h1>Suite</h1>
            <button> Clikez {count} </button>
        </div>
        );
};

export default Compteur4;
