import React from "react";
import { Link } from "react-router-dom";

import Home from "../Home";
import Edit from "../Edit";
import List from "../List";
import Category from "../Category";
import Done from "../Done";
import { Routes, Route, useLocation } from "react-router-dom";

export default function Main({
  todoList,
  addTodo,
  updateTodoList,
  toggleTodoComplete,
  clearCompleteTodo,
  addCategory,
  categorys,
  handleDeleteClick,
}) {
  const location = useLocation();

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <nav>
        <Link
          to="/"
          className={`link-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <i className="fa-solid fa-house"></i>
          Home
        </Link>
        <Link
          to="List"
          className={`link-item ${
            location.pathname === "/List" ? "active" : ""
          }`}
        >
          <i className="fa-solid fa-list-ul"></i>
          List
        </Link>
        <Link
          to="Done"
          className={`link-item ${
            location.pathname === "/Done" ? "active" : ""
          }`}
        >
          <i className="fa-solid fa-check-double"></i>
          Done
        </Link>
        <Link
          to="Category"
          className={`link-item ${
            location.pathname === "/Category" ? "active" : ""
          }`}
        >
          <i className="fa-solid fa-folder"></i>
          Category
        </Link>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home addTodo={addTodo} categorys={categorys}></Home>}
          ></Route>
          <Route
            path="Edit/:id"
            element={
              <Edit
                categorys={categorys}
                todoList={todoList}
                updateTodoList={updateTodoList}
              ></Edit>
            }
          ></Route>
          <Route
            path="List"
            element={
              <List
                categorys={categorys}
                todoList={todoList.filter((item) => !item.done)}
                toggleTodoComplete={toggleTodoComplete}
                handleDeleteClick={handleDeleteClick}
              ></List>
            }
          ></Route>
          <Route
            path="Done"
            element={
              <Done
                completeList={todoList.filter((item) => item.done)}
                toggleTodoComplete={toggleTodoComplete}
                clearCompleteTodo={clearCompleteTodo}
              ></Done>
            }
          ></Route>
          <Route
            path="Category"
            element={
              <Category
                categorys={categorys}
                addCategory={addCategory}
                handleDeleteClick={handleDeleteClick}
              ></Category>
            }
          ></Route>
          <Route
            path="*"
            element={<h2 style={{ color: "#ad8002" }}>Page not found!</h2>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}
