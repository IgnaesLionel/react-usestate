import React, {useState, useEffect} from 'react';

function useChangeState (mymessage) {
    const [text, settext] = useState({initial : "hook personalisé"})
    const myModification = () => {
        settext(text => {return {...text, initial : mymessage}}   
        )
    }
    return [text, myModification]
}

const Compteur3 = () => {
  const [message1, setMessage1] = useState({initial : "initial data"})
  const classicUseState1 = () => {
    setMessage1(message => {return {...message, initial : "Hello"}
  })
}
  const classicUseState2 = () => {
    setMessage1(message => {return {...message, ajout : "World"}
  })
}
  
const [message2, ChangeState1] = useChangeState("well done")
const [message3, ChangeState2] = useChangeState("try")


    return (
        <div>
         {console.log(message1)}
            <h6>modification de l'état</h6>
            <button onClick={classicUseState1}> CLICK</button>
            <button onClick={classicUseState2}> CLICK </button>    
            <h5> {message1.initial} {message1.ajout}</h5>

            <h5>Hook personnalisé</h5>
            <button onClick={ChangeState1}> CLICK</button> 
            <button onClick={ChangeState2}> CLICK</button> 
            <h5> {message2.initial} </h5>
            <h5> {message3.initial} </h5>
        </div>
    );
};

export default Compteur3;