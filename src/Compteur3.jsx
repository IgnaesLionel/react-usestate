import React, {useState, useEffect} from 'react';


const Compteur3 = () => {

  const [message, setMessage] = useState("Hello")

  const ok = () => {
    setMessage("World")
  }


    return (
        <div>
         
            <h6>Compteur3</h6>
            <button onClick={ok}> {message} </button>     
        </div>
    );
};

export default Compteur3;