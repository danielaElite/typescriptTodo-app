import Todo from './components/Todo'
//import React from "react";
import React, {useState} from 'react';


function App() {
  //const [data,setData]= useState(null);
  //const [print,setPrint]= useState(false);
  const [todos, setTodos]= useState([]);
  const [value, setValue]= useState("");

  function addTodo(val){
    setTodos([...todos, val])
    setValue("");
  }
  function deleteTodo(val){
    setTodos(todos.filter(todo => todo !== val))
  }

  return (
    <div>
     
     <input value={value} className='inputBar' type="text" onChange={(e) => setValue(e.target.value) }/>
        <button onClick={()=>addTodo(value)}>Add</button>

      <h2>My Tasks</h2>
      {/* <Todo text='chill'/>
      <Todo text='eat'/>
      <Todo text='sleep'/> */}

      <div className='addTodo'> 
      {
        todos.map(todo=>{
          return <Todo text={todo} deleteTodo={deleteTodo}/>

        })
      }
        </div>

    </div>
  );
}
export default App;
