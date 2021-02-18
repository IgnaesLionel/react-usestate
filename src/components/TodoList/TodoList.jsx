import React, { useState, useEffect } from 'react';

const TodoList = () => {

    const [todos, setTodos] =  useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        (async function() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=1')
            const responseData = await response.json()
            if (response.ok) {
                setTodos(responseData)
            } else {
                alert(JSON.stringify(responseData))
            }
            setLoading(false)

        })()
    },[])

    if (loading) {
        return 'Chargement......'
    }

    return (
        <div>
            <h1> Todo List</h1>
           {/*  {JSON.stringify(todos)} */}
            {todos.map(t => <li key={t.id}> {t.title} </li>)}
        </div>
    );
};

export default TodoList;