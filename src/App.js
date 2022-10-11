import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import categoryData from "./data/category.data";
import Main from "./components/Main";
import ConfirmDialog from "./components/ConfirmDialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [categorys, setCategorys] = useState(categoryData);

  const [show, setShow] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({});

  const navigate = useNavigate();

  const addTodo = (todo) => {
    if (todo && todo.content !== "") {
      todo.id = nanoid();
      setTodoList((prev) => {
        return [...prev, todo];
      });
      toast.success("Success");
    } else {
      toast.warn("Please enter your todo");
    }
  };

  const updateTodoList = (todo) => {
    if (todo && todo.content !== "" && todo.id !== "") {
      const newTodoList = [...todoList];
      const updateTodo = newTodoList.find((item) => item.id === todo.id);
      updateTodo.date = todo.date;
      updateTodo.category = todo.category;
      updateTodo.content = todo.content;
      setTodoList(newTodoList);
      toast.success("Success");
      navigate("/List");
    } else {
      toast.warn("Please enter your todo");
    }
  };

  const toggleTodoComplete = (id) => {
    const updateTodo = todoList.find((item) => item.id === id);
    updateTodo.done = !updateTodo.done;
    setTodoList([...todoList]);
  };

  const clearCompleteTodo = () => {
    setTodoList(todoList.filter((item) => !item.done));
  };

  const addCategory = (name) => {
    if (name !== "") {
      const sameName = categorys.find((itme) => itme.name === name);
      if (!sameName) {
        setCategorys((prev) => {
          return [
            ...prev,
            {
              id: nanoid(),
              name: name,
              default: false,
            },
          ];
        });
      }
    }
  };

  const handleDialogClick = (check) => {
    if (check) {
      switch (deleteInfo.type) {
        case "todo":
          setTodoList(todoList.filter((item) => item.id !== deleteInfo.id));
          break;
        case "category":
          let canDelete = !(
            todoList.length > 0 &&
            todoList.find((item) => item.category === deleteInfo.id)
          );
          if (canDelete) {
            setCategorys(categorys.filter((item) => item.id !== deleteInfo.id));
            toast.success("Data has been deleted!");
          } else {
            toast.warn("Data can not delete!");
          }
          break;
      }
    }
    setShow(false);
    setDeleteInfo({});
  };

  const handleDeleteClick = (id, type) => {
    setDeleteInfo({ id, type });
    setShow(true);
  };

  const infoTemp = {
    title: "",
    text: "",
  };

  if (show) {
    switch (deleteInfo.type) {
      case "todo":
        const deleteTodo = todoList.find((item) => item.id === deleteInfo.id);
        infoTemp.text = deleteTodo.content;
        break;
      case "category":
        const deleteCategory = categorys.find((item) => item.id === deleteInfo.id);
        infoTemp.text = deleteCategory.name;
        break;
    }
    infoTemp.text = `Are you sure to delete ${infoTemp.text}?`;
    infoTemp.title = "Delete Message?";
  }

  return (
    <>
      <Main
        todoList={todoList}
        categorys={categorys}
        handleDeleteClick={handleDeleteClick}
        addTodo={addTodo}
        updateTodoList={updateTodoList}
        toggleTodoComplete={toggleTodoComplete}
        clearCompleteTodo={clearCompleteTodo}
        addCategory={addCategory}
      ></Main>
      <ConfirmDialog
        show={show}
        info={infoTemp}
        handleDialogClick={handleDialogClick}
      ></ConfirmDialog>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
