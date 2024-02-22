import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/slice";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/material/Icon";

const ToDoList = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const dispatch = useDispatch();

  const { todoList } = useSelector((state) => state.todo);

  console.log(todoList);

  // console.log(currentTodo);

  const handleAddTodo = () => {
    dispatch(addTodo(currentTodo));
    setCurrentTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (currentTodo) => {};

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        type="text"
        name="todo"
        placeholder="Enter your todo"
      />
      <Button
        variant="contained"
        color="success"
        disabled={currentTodo === ""}
        onClick={handleAddTodo}
      >
        Add Todo
      </Button>

      <div>
        <ul>
          {todoList && todoList.length > 0
            ? todoList.map((item) => (
                <div>
                  <li key={item.id}>
                    <p> {item.title}</p>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteTodo(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleUpdateTodo(item.id)}
                    >
                      Update
                    </Button>
                  </li>
                </div>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
