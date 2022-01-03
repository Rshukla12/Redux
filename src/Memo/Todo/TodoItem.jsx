import React, { useMemo } from "react";

const delay = (time) => {
  const curr = Date.now();
  let i =0;
  while ( curr + time > Date.now() ) i += 1;
  return curr;
}

const areEqual = (prevProps, nextProps) => {
    if (prevProps.status === nextProps.status) {
      return true;
    }
    return false;
};

const TodoItem = ({
  title,
  status,
  id,
  handleToggle,
  handleDelete
}) => {
    //const time = delay(200);
    const time = useMemo(() => delay(200), []);

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>{title}</div>
        <div>{status ? "Completed" : "Incomplete" }</div>
        <button onClick={()=>handleToggle(id)}>Toggle</button>
        <button onClick={()=>handleDelete(id)}>Delete</button> 
        <div>{ time }</div>    
        </div>
    )
}

export const MemoisedTodoItemWithoutComparator = React.memo(TodoItem);
export const MemoisedTodoItem = React.memo(TodoItem, areEqual);
export default TodoItem;