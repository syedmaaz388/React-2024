import './App.css';
import { useState } from 'react';
import {v4 as uuid4} from 'uuid';

export default function App() {
  const [inputValue,SetInputValue] = useState("")
  const [taskList,setTaskList] = useState([]);
  const [quantity,setQuantity] = useState(0);
  const [sortBy,setSortBy] = useState("input");
  
  let sortedItems;
  if(sortBy === "input" ) sortedItems = taskList;
  if(sortBy === "description" ) sortedItems = taskList.slice().sort((a,b) => a.inputValue.localeCompare(b.inputValue));
  if(sortBy === "packed" ) sortedItems = taskList.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  const HandleAddTask = (e) => {
    e.preventDefault();
    if(inputValue.trim() !== ''){
    const newTask = {
      id:uuid4(),
      Task:inputValue,
      quantity:quantity,
      packed:false
    }
    setTaskList([...taskList,newTask]);
    SetInputValue("");
  }
}

const handleDelete = (id) => {
 const NewTaskList = taskList.filter((item) => item.id !== id)
 setTaskList(NewTaskList);
}

function handleToggleItem(id){
  setTaskList(item => item.map(item => item.id === id ? 
    {...item,packed:!item.packed}:item))
}

function HandleclearAll(){
  const confirmed = window.confirm(
    "Are you sure you want to delete all item?"
  );
  if (confirmed) setTaskList([]);
}

  return (
    <div>
       <h1>TodoList</h1>
       <label>Enter the task: </label>
       <input type="text" value={inputValue} onChange={(e) => SetInputValue(e.target.value)}  placeholder='Enter The Task' />
       <select onChange={(e) => setQuantity(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
       <button onClick={HandleAddTask} >Add</button>
      <ul>
        {taskList.map((item) => (
          <div key={item.id}>
          <input type="checkbox" value={item.packed}  onChange={() => handleToggleItem(item.id)} />
          <li style={item.packed ? {textDecoration:"line-through"}:{}} >{item.Task} - {item.quantity}</li>
          <button onClick={() => handleDelete(item.id)} >❌</button>
          </div>
        ))}
        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
      </ul>

      <button onClick={HandleclearAll}>Clear List</button>


    </div>
  );
}
