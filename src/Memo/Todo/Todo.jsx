import { useCallback, useState } from "react"
import { v4 as uuid } from "uuid";
import TodoInput from "./TodoInput";
import TodoItem, { MemoisedTodoItem } from "./TodoItem";
 
const Todo = () => {
  const [data, setData] = useState(()=>[{
    title: "test",
    id: 1,
    status: false
  }]);

  const handleNewTask = ( title ) => {
    const newTask = {
      status: false,
      title,
      id: uuid()
    }
    setData([...data, newTask]);
  }

  const handleToggle = useCallback((id) => {
    setData((prev) => prev.map((item) => item.id === id ? { ...item, status: !item.status} : item))
  }, [])

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div>
      <TodoInput onTaskCreate={handleNewTask}/>

      { data.map(el => (
        <MemoisedTodoItem 
          title={el.title}
          id={el.id}
          key={el.id}
          status={el.status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )) }
    </div>
  )
}
export default Todo;