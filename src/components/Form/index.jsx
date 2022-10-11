import React, { useState } from "react";
import { categoryDefault } from "../../data/category.data";

const Form = ({ categorys, todoData, handleSubmitData }) => {
  const now = new Date();

  const parseMonth = now.getMonth() + 1;
  const parseDay = now.getDate();
  let dateData = `${now.getFullYear()}-${
    parseMonth < 10 ? `0${parseMonth}` : parseMonth
  }-${parseDay < 10 ? `0${parseDay}` : parseDay}`;

  console.log(dateData);

  let categoryData = categoryDefault;
  let contentData = "";
  let id = "";
  if (todoData) {
    dateData = todoData.date;
    categoryData = todoData.category;
    contentData = todoData.content;
    id = todoData.id;
  }

  const [date, setDate] = useState(dateData);
  const [category, setCategory] = useState(categoryData);
  const [content, setContent] = useState(contentData);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmitData({
      id,
      date,
      category,
      content,
    });
    setDate(dateData);
    setCategory(categoryDefault);
    setContent("");
  };

  return (
    <div className="todo-item todo-form">
      <form action="#" onSubmit={handleFormSubmit}>
        <div className="todo-row">
          <div className="form-group">
            <div className="title">Date</div>
            <input
              type="date"
              value={dateData}
              className="input-outline input-layout"
              onChange={({ target }) => setDate(target.value)}
            />
          </div>
        </div>
        <div className="todo-row">
          <div className="form-group">
            <div className="title">Category</div>
            <select
              className="input-outline input-layout"
              onChange={({ target }) => {
                setCategory(target.value);
              }}
              value={category}
            >
              {categorys &&
                categorys.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <div className="title">Content</div>
            <input
              type="text"
              className="input-outline input-layout"
              placeholder="Enter your todo"
              value={content}
              onChange={({ target }) => {
                setContent(target.value);
              }}
            />
          </div>
        </div>
        <button className="todo-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
