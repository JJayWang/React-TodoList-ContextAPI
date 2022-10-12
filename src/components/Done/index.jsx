import React from "react";
import { useContext } from "react";
import { TodoAppContext } from "../../contexts/todo-app-context";
//{ completeList, toggleTodoComplete, clearCompleteTodo }
const Done = () => {
  const { toggleTodoComplete, todo } = useContext(TodoAppContext);
  const completeList = todo.filter((item) => item.done);
  return (
    <div className="todo-item todo-done">
      <ul className="list-container">
        {completeList.map((done) => (
          <li key={done.id}>
            <div className="todo-name">{done.content}</div>
            <div
              className="todo-icon"
              onClick={() => {
                toggleTodoComplete(done.id);
              }}
            >
              <i className="fa-solid fa-rotate-left"></i>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="todo-btn"
        onClick={() => {
          //clearCompleteTodo();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Done;
