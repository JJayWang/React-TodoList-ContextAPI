import { useReducer } from "react";
import { createContext } from "react";
import TodoAppReducer from "./todo-app-reducer";
import categoryData from "../data/category.data";

const initialState = {
  todo: [],
  categorys: categoryData,
  deleteInfo: {
    id: "",
    type: "",
  },
  alertShow: false,
  editID: "",
};

export const TodoAppContext = createContext(initialState);

export const TodoAppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoAppReducer, initialState);
  const addTodo = (todo) => {
    dispatch({ type: "addTodo", payload: todo });
  };
  const addCategory = (category) => {
    dispatch({ type: "addCategory", payload: category });
  };

  const deleteCategory = (id) => {
    dispatch({ type: "deleteCategory", payload: id });
  };

  const registerDeleteInfo = (info) => {
    dispatch({ type: "registerDeleteInfo", payload: info });
  };

  const changeAlertShow = (display) => {
    dispatch({ type: "changeAlertShow", payload: display });
  };

  const modifyTodo = (data) => {
    dispatch({ type: "modifyTodo", payload: data });
  };

  const toggleTodoComplete = (id) => {
    dispatch({ type: "toggleTodoComplete", payload: id });
  };

  return (
    <TodoAppContext.Provider
      value={{
        todo: state.todo,
        categorys: state.categorys,
        deleteInfo: state.deleteInfo,
        alertShow: state.alertShow,
        editID: state.editID,
        addTodo,
        addCategory,
        deleteCategory,
        registerDeleteInfo,
        changeAlertShow,
        modifyTodo,
        toggleTodoComplete
      }}
    >
      {children}
    </TodoAppContext.Provider>
  );
};
