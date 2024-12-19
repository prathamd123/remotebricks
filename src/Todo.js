// import React from 'react';
import React, { useState } from 'react';
import './Todo.css';


function ToDoListItems({value,indexNumber,todoList,settodolist}){
    let deleteRow=()=>{
      // alert(indexNumber)
      let finalData=todoList.filter((v,i)=>i!=indexNumber)
      // console.log(finalData)
      settodolist(finalData)
    }
  
    let [status,setStatus] = useState(false);
    let checkStatus=()=>{
      setStatus(!status)
    }
    return(
      <li className={(status)? 'complete-todo' : ''} onClick={checkStatus}>{indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>
    )
  }

function Todo() {
    let [todoList,settodolist] = useState([])
  
  let saveTodoList = (event)=>{
    let todoName = event.target.todoName.value;
    if(!todoList.includes(todoName)){
      let finalTodoList = [...todoList,todoName];
      settodolist(finalTodoList);
    }
    else{
      alert("already exist");
    }

    // alert(todoName);
    event.preventDefault();
  }

  let List=todoList.map((value,index)=>{
    
    return( 
      <ToDoListItems value={value} key={index} indexNumber={index}
        todoList={todoList}
        settodolist={settodolist}
      />
    )
  });
  return (
    <div className="App">
    <h1>Todo List</h1>
    <form onSubmit={saveTodoList}>
     <input type='text' placeholder='Write here' name='todoName' />
     <button>Save</button>

    </form>

    <div className='outerdiv'>
     <ul>
     {List}
     </ul>
    </div>
   </div>
  );
}

export default Todo;
