import React, {useState, useEffect} from 'react';

function useIncrement () {
    const [message2, setMessage2] = useState({initial : "hook personalisé"})
    const increment = () => {
        setMessage2(message2 => {return {...message2, initial : "well done"}}   
        )
    
    }
    return [message2, increment]
}

const Compteur3 = () => {
  const [message, setMessage] = useState({initial : "Start"})
  const [message2, increment] = useIncrement()

  const ok1 = () => {
    setMessage(message => {return {...message, initial : "Hello"}
  })
}

  const ok2 = () => {
    setMessage(message => {return {...message, ajout : "World"}
  })
}

    return (
        <div>
         {console.log(message)}
            <h6>Compteur3</h6>
            <button onClick={ok1}> CLICK</button>
            <button onClick={ok2}> CLICK </button>    
            <h5> {message.initial} </h5>
            <button onClick={increment}> CLICK</button> 
            <h5> {message2.initial} </h5>
        </div>
    );
};

export default Compteur3;