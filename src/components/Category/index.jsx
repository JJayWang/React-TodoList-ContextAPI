import React, { useState } from "react";
import { TodoAppContext } from "../../contexts/todo-app-context";
import { useContext } from "react";

const Category = () => {
  const { categorys, addCategory, registerDeleteInfo, changeAlertShow } = useContext(TodoAppContext);
  const [category, setCategory] = useState("");

  const handleCatetoryCheck = () => {
    addCategory(category);
    setCategory("");
  };

  return (
    <div className="todo-item todo-category">
      <div className="todo-row">
        <input
          type="text"
          className="input-outline"
          placeholder="Enter category name"
          value={category}
          onChange={(e) => {
            const { value } = e.target;
            setCategory(value);
          }}
        />
        <button className="todo-btn" onClick={handleCatetoryCheck}>
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
      <div className="category-container">
        {categorys.map((item) => (
          <span key={item.id} className="category-item">
            <div className="category-name">{item.name}</div>
            {!item.default ? (
              <div
                className="category-delete"
                onClick={() => {
                  changeAlertShow(true);
                  registerDeleteInfo({
                    id: item.id,
                    type: "category",
                  });
                }}
              >
                <i className="fa-solid fa-x"></i>
              </div>
            ) : (
              ""
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Category;
