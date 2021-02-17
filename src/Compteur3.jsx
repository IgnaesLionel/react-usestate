import React, {useState, useEffect} from 'react';


const Compteur3 = () => {

  const [message, setMessage] = useState({initial : "Start"})

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
            <button onClick={ok1}> CLICKZ</button>
            <button onClick={ok2}> CLICKZ</button>    
            {JSON.stringify(message)} 
        </div>
    );
};

export default Compteur3;