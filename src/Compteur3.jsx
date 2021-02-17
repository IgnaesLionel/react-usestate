import React, {useState, useEffect} from 'react';


const Compteur3 = () => {

    const [myCount, setMyCount] = useState(0)

    function increment () {
        setMyCount = useState(10)
    }

    return (
        <div>
            <h6>Compteur3</h6>
            <button onClick={increment}> {myCount} </button>     
        </div>
    );
};

export default Compteur3;