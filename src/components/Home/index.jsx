import React from "react";
import Form from "../Form";

const Home = ({ addTodo, categorys }) => {
  const handleSubmitData = (todoData) => {
    addTodo(todoData);
  };
  return (
    <Form categorys={categorys} handleSubmitData={handleSubmitData}></Form>
  );
};

export default Home;
