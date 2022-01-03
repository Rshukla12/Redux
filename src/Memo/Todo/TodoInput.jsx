import { useState } from "react"

const TodoInput = ({onTaskCreate}) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="type to add"/>
      <button onClick={()=>onTaskCreate(title)}>Add Task</button>
    </div>
  )
}

export default TodoInput;