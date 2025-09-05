import React, {useState} from 'react'

const Todo = () => {

    const [inputText, setInputText] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    const handleSubmit = () => {
        setTodoList([...todoList, {text: inputText, completed: false}])
        setInputText("")
    }
    const handleCheck = (index) => {
        const updated = [...todoList]
        updated[index].completed = !updated[index].completed
        setTodoList(updated)
    }
  return (
    <div>Todos List
        <div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add todo</button>

            <div>
              {todoList.map((list, index) => (
                <div style={{display: "flex"}} key={index}>
                    <input type="checkbox" onClick={() => handleCheck(index)} checked={list.completed}/>
                    <p style={{textDecoration: list.completed? "line-through" : "none"}}>{list.text}</p>
                </div>
              ))}  
            </div>
        </div>
    </div>
  )
}

export default Todo