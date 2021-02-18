import React, {useState, useEffect} from 'react';

function useChangeState (mymessage) {
    const [message2, setMessage2] = useState({initial : "hook personalisé"})
    const ChangeState = () => {
        setMessage2(message2 => {return {...message2, initial : mymessage}}   
        )
    }
    return [message2, ChangeState]
}

const Compteur3 = () => {
  const [message, setMessage] = useState({initial : "initial data"})
  const [message2, ChangeState] = useChangeState("well done")
  const [message3, ChangeState2] = useChangeState("try")

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
            <h6>modification de l'état</h6>
            <button onClick={ok1}> CLICK</button>
            <button onClick={ok2}> CLICK </button>    
            <h5> {message.initial} {message.ajout}</h5>

            <h5>Hook personnalisé</h5>
            <button onClick={ChangeState}> CLICK</button> 
            <button onClick={ChangeState2}> CLICK</button> 
            <h5> {message2.initial} </h5>
            <h5> {message3.initial} </h5>
        </div>
    );
};

export default Compteur3;