import React, {useState, useEffect} from 'react';

//Hook personnalisé
function useIncrement (initial, step) {
    const [count,setCount] = useState(initial)
        const increment = () => {
            setCount(c => c + step)
        }
        return [count, increment]  //<-- retourne un nouvelle object - identique
    }

const Compteur = () => {
    const [count, increment] = useIncrement(0,2);  // <---- une fonction plutot qu'une objet/string/int

    useEffect (() => {
        const timer = window.setInterval(() => {
            increment()
        }, 1000)
        return function () {
            clearInterval(timer)
        }
    })

    useEffect(()=> {
        document.title= 'Compteur' + count
    },[count]) // ne change que si le count est modifié
 

    return (
        <div >      
           <button onClick={increment}> Click  {JSON.stringify(count)} </button>
        </div>
    );
};

export default Compteur;