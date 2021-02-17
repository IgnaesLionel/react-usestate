import React, {useState, useEffect} from 'react';


function useIncrement (initial, step){
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(c => c + step)
        
    }

    return [count, increment]

}



const Compteur2 = () => {
    const [count, increment] = useIncrement(10,1);
    //crée 2 variable


    return (
        <div>
            <h6>Compteur2</h6>
            <button onClick={increment}> Incrémenter {count}</button>
{console.log(increment)}
        </div>
    );
};

export default Compteur2;