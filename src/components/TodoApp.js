import {useEffect, useRef, useState} from 'react'
function TodoApp({todos, addTodo, fetchTodo}) {
    const [text, setText] = useState('')
    const inputRef = useRef()
    // useEffect(() => {
        // Should not call api at component so that component is clearer
        // This component will call api with this url, we dont not reuse this component
        // other places.
        // Solution:
        // - Using container to fetch data from API
        // - Using redux store to fetch data from API

        // This is the way using component to fetch data from API
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(res => {
        //         setTodo(res.data)
        //     })

        // This is the way: Using container to fetch data from API
        // fetchTodo
    // }, [fetchTodo])
    const handleAddTodo = () => {
        addTodo(text)
        setText('')
        inputRef.current.focus()
    }
    return (
        <div>
            <input
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp
