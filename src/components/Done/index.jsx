import React from "react";

const Done = ({ completeList, toggleTodoComplete, clearCompleteTodo }) => {
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
          clearCompleteTodo();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Done;
