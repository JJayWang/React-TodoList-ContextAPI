import React from "react";
import { useParams } from 'react-router-dom'

import Form from "../Form";

const Edit = ({ categorys, todoList, updateTodoList }) => {
  const param = useParams();
  const handleSubmitData = (todoData) => {
    updateTodoList(todoData);
  };
  const updateTodo = todoList.find((item) => item.id === param.id);
  if (updateTodo) {
    return (
      <Form
        categorys={categorys}
        todoData={todoList.find((item) => item.id === param.id)}
        handleSubmitData={handleSubmitData}
      ></Form>
    );
  } else {
    return <h2 style={{ color: "#ad8002" }}>Update todo not founded!</h2>;
  }
};

export default Edit;
