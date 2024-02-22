import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../../store/slice";

const ToDoList = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const dispatch = useDispatch();

  // console.log(currentTodo);

  const handleAddTodo = () => {
    dispatch(addTodo(currentTodo));
  }
  

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        type="text"
        name="todo"
        placeholder="Enter your todo"
      />
      <button disabled={currentTodo === ''} onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default ToDoList;
