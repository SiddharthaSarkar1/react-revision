import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "../../store/slice";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/material/Icon";

import './ToDoList.css';

const ToDoList = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentEditedTodoId, setCurrentEditedTodoId] = useState(null);
  const dispatch = useDispatch();

  const { todoList, todoListFromApi, loading } = useSelector(
    (state) => state.todo
  );

  console.log(todoList);

  // console.log(currentTodo);

  const handleAddTodo = () => {
    dispatch(addTodo(currentTodo));
    setCurrentTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (currentTodo) => {
    setCurrentEditedTodoId(currentTodo.id);
    setCurrentTodo(currentTodo.title);
  };

  const handleEditTodo = () => {
    dispatch(editTodo({ currentEditedTodoId, currentTodo }));
    setCurrentTodo("");
  };

  const FetchListOfTodosFromApi = () => {
    dispatch(fetchTodos());
  };

  // console.log(todoListFromApi);

  if (loading) {
    return (
      <div className="loadingDiv">
        <h1>Fetching Todos From API. Please Wait.</h1>
        <span className="loader"></span>
      </div>
    );
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
      <Button
        variant="contained"
        color="success"
        disabled={currentTodo === ""}
        onClick={currentEditedTodoId !== null ? handleEditTodo : handleAddTodo}
      >
        {currentEditedTodoId !== null ? "Edit Todo" : "Add Todo"}
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
                      onClick={() => handleUpdateTodo(item)}
                    >
                      Update
                    </Button>
                  </li>
                </div>
              ))
            : null}
        </ul>
      </div>

      <div>
        <Button variant="outlined" onClick={FetchListOfTodosFromApi}>
          Fetch List of Todos From API
        </Button>
        <div>
          <ul>
            {todoListFromApi && todoListFromApi.length > 0
              ? todoListFromApi.map((item) => (
                  <li key={item.id}>{item.todo}</li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
