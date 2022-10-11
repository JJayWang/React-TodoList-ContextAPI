import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoryData from "../../data/category.data";

const List = ({
  todoList,
  categorys,
  toggleTodoComplete,
  handleDeleteClick,
}) => {
  const [searchType, setSearchType] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const categoryNames = categoryData.reduce((accumulator, current) => {
    return {
      ...accumulator,
      [current.id]: current.name,
    };
  }, {});

  let searchList = todoList;
  if (searchType !== "") {
    searchList = searchList.filter((item) => item.category === searchType);
  }

  if (searchWord !== "") {
    searchList = searchList.filter((item) => item.content.includes(searchWord));
  }
  searchList = searchList.map((item) => {
    return { ...item, category: categoryNames[item.category] };
  });

  return (
    <div className="todo-item todo-list">
      <div className="search-group">
        <div className="search-type">
          <select
            className="input-outline"
            onChange={({ target }) => {
              setSearchType(target.value);
            }}
          >
            <option value="">All</option>
            {categorys.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            className="input-outline"
            placeholder="Enter keyword to search"
            onChange={({ target }) => {
              setSearchWord(target.value);
            }}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <ul className="list-container todo">
        {searchList.map((todo) => (
          <li key={todo.id} title={todo.date}>
            <div className="todo-type-wrap">
              <span className="todo-type color2">{todo.category}</span>
            </div>
            <div className="todo-name">{todo.content}</div>
            <div className="todo-icon">
              <Link to={`../Edit/${todo.id}`}>
                <i className="fa-solid fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => {
                  toggleTodoComplete(todo.id);
                }}
              >
                <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link
                to="#"
                onClick={() => {
                  handleDeleteClick(todo.id, "todo");
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
